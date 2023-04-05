import{_ as s,c as n,o as a,N as p}from"./chunks/framework.0799945b.js";const D=JSON.parse('{"title":"promise.all顺序执行","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise.all顺序执行.md"}'),l={name:"FrontEnd/js&css/promise.all顺序执行.md"},e=p(`<h1 id="promise-all顺序执行" tabindex="-1">promise.all顺序执行 <a class="header-anchor" href="#promise-all顺序执行" aria-label="Permalink to &quot;promise.all顺序执行&quot;">​</a></h1><p>众所周知，promise.all里面的请求是同步进行，和forEach具有一样的特性</p><p>那怎么保证promises顺序执行（或者说串行、任务队列）呢？</p><p>如果知道promises的长度可以用then的链式调用实现，如果不知道怎么办呢？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 完成一个方法executePromises，实现promises的顺序执行</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1000s打印1，9000s打印1，10000s打印1，再输出结果列表[1,1,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">function executePromises(promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义一个task函数</span></span>
<span class="line"><span style="color:#A6ACCD;">let task = (timer) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要返回一个函数，如果直接返回一个new Promise相当于已经调用开始执行了</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这里数组里放还没有开始调用的异步任务</span></span>
<span class="line"><span style="color:#A6ACCD;">let promises = [task(1000), task(8000), task(1000)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>想到的第一个方法用reduce来保证串联，初始化一个返回空数组的promise，后续一直在这个数组上进行累加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function executePromises(promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 方法一 reduce函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promises.reduce((prePromise, nextPromise) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return prePromise.then((preRes) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 特别注意这里nextPromise()要加括号，表示调用开始执行函数，但是prePromise不用加</span></span>
<span class="line"><span style="color:#A6ACCD;">            return nextPromise().then((nextRes) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return [...preRes, nextRes]</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, Promise.resolve([]))</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这个方法只实现了每个promise都运行成功的情况，如果有请求发送了错误这个方法就不太适合了</p><p>如果用遍历+await实现呢？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let result = []</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let promise of promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 要写promise()而不是promise，因为要调用该函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    let ans = await promise()</span></span>
<span class="line"><span style="color:#A6ACCD;">    result.push(ans)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 相当于返回一个promise.resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">return result</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果有一个请求发送了错误，我们可以进行一个捕获</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let result = []</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let promise of promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 要写promise()而不是promise，因为要调用该函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        let ans = await promise()</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.push(ans)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.push(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;错误&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 相当于返回一个promise.resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">return result</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>用map函数遍历也是可以的，但是注意尽量不要用forEach，因为它也具有同时执行的特性，不确定返回的结果列表中的顺序</p><hr><p>要注意，promise.all传入的promise数组其实是在外面就已经开始执行的promise了，而我上述写的方法中的promise()和nextPromise()都是在函数内部才开始调用，所以如果想要还原promise.all的思想，可以在传入promise.all的时候做一个map遍历，调用每个函数，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Promise.all(functions.map(f =&gt; f())).then(r =&gt; console.log(r))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>但是！！！！！这样又相当于同时开始执行，不能做到串行了，所以还是得在函数内部才开始调用执行</p><p>！！！</p>`,18),o=[e];function t(r,c,i,C,A,m){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};

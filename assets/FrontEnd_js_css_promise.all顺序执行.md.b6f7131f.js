import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"promise.all顺序执行","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise.all顺序执行.md"}'),e={name:"FrontEnd/js&css/promise.all顺序执行.md"},p=l(`<h1 id="promise-all顺序执行" tabindex="-1">promise.all顺序执行 <a class="header-anchor" href="#promise-all顺序执行" aria-label="Permalink to &quot;promise.all顺序执行&quot;">​</a></h1><p>众所周知，promise.all里面的请求是同步进行，和forEach具有一样的特性</p><p>那怎么保证promises顺序执行呢？</p><p>如果知道promises的长度可以用then的链式调用实现，如果不知道怎么办呢？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 完成一个方法executePromises，实现promises的顺序执行</span></span>
<span class="line"><span style="color:#A6ACCD;">// 输出结果列表[ans1,ans2,ans3]</span></span>
<span class="line"><span style="color:#A6ACCD;">function executePromises(promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let promises = []</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0; i &lt; Math.random() * 10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    promises.push(</span></span>
<span class="line"><span style="color:#A6ACCD;">        new Promise((resolve =&gt; resolve(&quot;ans&quot; + i)))</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>想到的第一个方法用reduce来保证串联，初始化一个返回空数组的promise，后续一直在这个数组上进行累加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function executePromises(promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 方法一 reduce函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promises.reduce((prePromise, nextPromise) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return prePromise.then((preRes) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return nextPromise.then((nextRes) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return [...preRes, nextRes]</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, Promise.resolve([]))</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这个方法只实现了每个promise都运行成功的情况，如果有请求发送了错误这个方法就不太适合了</p><p>如果用遍历+await实现呢？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let result = []</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let promise of promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let ans = await promise</span></span>
<span class="line"><span style="color:#A6ACCD;">    result.push(ans)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 相当于返回一个promise.resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">return result</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果有一个请求发送了错误，我们可以进行一个捕获</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let result = []</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let promise of promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let ans = await promise</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.push(ans)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }catch (err){</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.push(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;错误&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 相当于返回一个promise.resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">return result</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>用map函数遍历也是可以的，但是注意尽量不要用forEach，因为它也具有同时执行的特性，不确定返回的结果列表中的顺序</p>`,13),o=[p];function t(r,c,i,C,A,m){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{u as __pageData,D as default};

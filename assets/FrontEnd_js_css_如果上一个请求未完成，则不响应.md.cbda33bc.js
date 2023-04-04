import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"如果上一个请求未完成，则不响应","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/如果上一个请求未完成，则不响应.md"}'),p={name:"FrontEnd/js&css/如果上一个请求未完成，则不响应.md"},e=l(`<h1 id="如果上一个请求未完成-则不响应" tabindex="-1">如果上一个请求未完成，则不响应 <a class="header-anchor" href="#如果上一个请求未完成-则不响应" aria-label="Permalink to &quot;如果上一个请求未完成，则不响应&quot;">​</a></h1><p>pdd前端实习面试</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 现有一个异步请求，可能多次调用它</span></span>
<span class="line"><span style="color:#A6ACCD;">// 实现一个封装callAsyncFunction，如果上一次调用异步请求完成，则正常再次调用，否则的话则忽略这次调用</span></span>
<span class="line"><span style="color:#A6ACCD;">function callAsyncFunction(fn){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 异步请求</span></span>
<span class="line"><span style="color:#A6ACCD;">const fn = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(&quot;成功&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            // reject(&quot;模拟错误&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 封装后的异步请求，实现上述的功能</span></span>
<span class="line"><span style="color:#A6ACCD;">let callPromiseFn = callAsyncFunction(fn)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 第一次调用，正常响应</span></span>
<span class="line"><span style="color:#A6ACCD;">callPromiseFn()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 第二次调用，上一次调用未完成，不响应</span></span>
<span class="line"><span style="color:#A6ACCD;">callPromiseFn()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 第三次调用，上一次调用已完成，响应</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;这次可以调用成功了&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    callPromiseFn()</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1200)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>首先相当于同时能只能运行一个异步函数，则联想到用闭包的私有变量控制当前的运行个数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function callAsyncFunction(promiseFn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 利用闭包的概念，构造私有变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    let runningTask = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 封装一个方法回去，这个方法返回的值是一个promise</span></span>
<span class="line"><span style="color:#A6ACCD;">    return async function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (runningTask === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            runningTask++;</span></span>
<span class="line"><span style="color:#A6ACCD;">            let ans = await promiseFn();</span></span>
<span class="line"><span style="color:#A6ACCD;">            runningTask--;</span></span>
<span class="line"><span style="color:#A6ACCD;">            return ans;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>但是这还存在一个问题，如果异步请求发生了错误怎么办呢？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const fn = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // resolve(&quot;成功&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            reject(&quot;模拟错误&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let ans = await promiseFn();//无法捕获await错误返回的值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>所以考虑封装一个promise返回</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 利用闭包的概念，构造私有变量</span></span>
<span class="line"><span style="color:#A6ACCD;">let runningTask = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 封装一个方法回去，这个方法返回的值是一个promise</span></span>
<span class="line"><span style="color:#A6ACCD;">return function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (runningTask === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        runningTask++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Promise(async (resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        	// 用try...catch捕获错误	</span></span>
<span class="line"><span style="color:#A6ACCD;">            try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ans = await promiseFn();</span></span>
<span class="line"><span style="color:#A6ACCD;">                runningTask--;</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve(ans);</span></span>
<span class="line"><span style="color:#A6ACCD;">            } catch (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                runningTask--;</span></span>
<span class="line"><span style="color:#A6ACCD;">                reject(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const _=s(p,[["render",c]]);export{u as __pageData,_ as default};

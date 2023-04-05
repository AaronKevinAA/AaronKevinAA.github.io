import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const D=JSON.parse('{"title":"使用setTimeout实现setInterval","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/myInterval.md"}'),e={name:"FrontEnd/js&css/myInterval.md"},p=l(`<h1 id="使用settimeout实现setinterval" tabindex="-1">使用setTimeout实现setInterval <a class="header-anchor" href="#使用settimeout实现setinterval" aria-label="Permalink to &quot;使用setTimeout实现setInterval&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 用setTimeout 实现 setInterval</span></span>
<span class="line"><span style="color:#A6ACCD;">// setInterval(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">//     console.log(&quot;1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// },1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">function myInterval(fn,timer){</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fn();</span></span>
<span class="line"><span style="color:#A6ACCD;">        myInterval(fn,timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const fn = function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">myInterval(fn,1000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>但这样递归创建setTimeout，又不清除，会造成内存泄漏的呀，怎么办？修改代码如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function myInterval(fn, timer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timeoutId;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function repeat() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fn();</span></span>
<span class="line"><span style="color:#A6ACCD;">        timeoutId = setTimeout(repeat, timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    timeoutId = setTimeout(repeat, timer)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 返回一个清除的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        clearTimeout(timeoutId)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const fn = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const cancel = myInterval(fn, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 3000秒后清除所有定时器</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    cancel()</span></span>
<span class="line"><span style="color:#A6ACCD;">},3000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[p];function o(c,i,r,C,A,y){return a(),n("div",null,t)}const u=s(e,[["render",o]]);export{D as __pageData,u as default};

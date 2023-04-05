import{_ as s,c as n,o as a,N as e}from"./chunks/framework.0799945b.js";const y=JSON.parse('{"title":"实现setTimeout准时","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/setTimeout准时.md"}'),t={name:"FrontEnd/js&css/setTimeout准时.md"},l=e(`<h1 id="实现settimeout准时" tabindex="-1">实现setTimeout准时 <a class="header-anchor" href="#实现settimeout准时" aria-label="Permalink to &quot;实现setTimeout准时&quot;">​</a></h1><p>在 JavaScript 中，<code>setTimeout</code> 函数的第二个参数是表示延迟时间的毫秒数。这个延迟时间并不是准确的时间，而是一个大致的时间。这是因为 JavaScript 是一个单线程的语言，所以它不能同时执行多个任务。因此，在执行 <code>setTimeout</code> 函数时，JavaScript 引擎将任务添加到事件队列中，并在指定的时间后执行该任务。但是，如果此时 JavaScript 引擎正忙于执行其他任务，则 <code>setTimeout</code> 函数的任务将被延迟执行，直到 JavaScript 引擎可以执行它为止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 实现一个准时的setTimeout</span></span>
<span class="line"><span style="color:#A6ACCD;">function mySetTimeout(fn, timer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let startTime = new Date();</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timeId;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let task = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let nowTime = new Date();</span></span>
<span class="line"><span style="color:#A6ACCD;">        let delay = timer - (nowTime - startTime);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (delay &lt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            fn();</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            timeId = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                fn()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, delay)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    task()</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        clearTimeout(timeId)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const fn = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">mySetTimeout(fn, 5000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我感觉这样写好像有点问题</p><p>或者用date+setInternal实现？但密集型任务消耗性能</p><hr><p>其实以上方法仍然是不准时的</p><p>要精确的可以使用其他工具来实现，比如 <code>requestAnimationFrame</code> 函数或 Web Workers。</p>`,8),p=[l];function o(c,i,r,A,C,m){return a(),n("div",null,p)}const u=s(t,[["render",o]]);export{y as __pageData,u as default};

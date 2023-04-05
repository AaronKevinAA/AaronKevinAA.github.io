import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const y=JSON.parse('{"title":"每隔时间段执行一次函数","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/每隔时间段执行一次函数.md"}'),p={name:"FrontEnd/js&css/每隔时间段执行一次函数.md"},e=l(`<h1 id="每隔时间段执行一次函数" tabindex="-1">每隔时间段执行一次函数 <a class="header-anchor" href="#每隔时间段执行一次函数" aria-label="Permalink to &quot;每隔时间段执行一次函数&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 实现一个repeat方法，每隔一段时间调用一次函数，并有调用次数上限</span></span>
<span class="line"><span style="color:#A6ACCD;">function repeat(fn,timer,wait){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">    let count = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (; count &lt; timer;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 封装一个promise，当setTimeout运行了才改变promise状态</span></span>
<span class="line"><span style="color:#A6ACCD;">        await new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                fn()</span></span>
<span class="line"><span style="color:#A6ACCD;">                count++</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, wait)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let fn = function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;fn&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">repeat(fn,5,1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">// fn</span></span>
<span class="line"><span style="color:#A6ACCD;">// fn</span></span>
<span class="line"><span style="color:#A6ACCD;">// fn</span></span>
<span class="line"><span style="color:#A6ACCD;">// fn</span></span>
<span class="line"><span style="color:#A6ACCD;">// fn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[e];function t(c,r,i,C,A,_){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{y as __pageData,d as default};

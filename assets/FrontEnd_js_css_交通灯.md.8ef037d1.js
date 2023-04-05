import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const _=JSON.parse('{"title":"交通灯","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/交通灯.md"}'),p={name:"FrontEnd/js&css/交通灯.md"},e=l(`<h1 id="交通灯" tabindex="-1">交通灯 <a class="header-anchor" href="#交通灯" aria-label="Permalink to &quot;交通灯&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function red() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;red&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function green() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;green&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function yellow() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;yellow&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 实现一个灯持续time时间长度</span></span>
<span class="line"><span style="color:#A6ACCD;">function task(timer, color) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (color === &#39;red&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                red()</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else if (color === &#39;green&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                green()</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else if (color === &#39;yellow&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                yellow()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const taskRunner = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        await task(3000, &#39;red&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        await task(1000, &#39;green&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        await task(2000, &#39;yellow&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">taskRunner()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[e];function c(t,r,C,i,A,y){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{_ as __pageData,d as default};

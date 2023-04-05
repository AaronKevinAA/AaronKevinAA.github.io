import{_ as s,c as n,o as a,N as e}from"./chunks/framework.0799945b.js";const d=JSON.parse('{"title":"promise链式中断","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise链式中断.md"}'),p={name:"FrontEnd/js&css/promise链式中断.md"},o=e(`<h1 id="promise链式中断" tabindex="-1">promise链式中断 <a class="header-anchor" href="#promise链式中断" aria-label="Permalink to &quot;promise链式中断&quot;">​</a></h1><p>我们都知道promise具有链式调用的特性</p><p>那知不知道链式调用的条件呢？</p><p><strong>条件是上一个promise已完成，且上一个promise释放的错误已捕获</strong></p><p>所以中断链式调用，只需要<strong>上一个promise返回一个未完成的promise</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// promise链式调用的时候，怎么中断呢?</span></span>
<span class="line"><span style="color:#A6ACCD;">new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}).then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // return 1 相当于then里的res</span></span>
<span class="line"><span style="color:#A6ACCD;">    // throw new Error(&quot;err&quot;) 相当于catch里的err</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 在这里我想中断下面的链式操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    // TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise(resolve =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;">}).then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch(err=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).then(res=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),l=[o];function r(t,c,i,C,A,_){return a(),n("div",null,l)}const D=s(p,[["render",r]]);export{d as __pageData,D as default};

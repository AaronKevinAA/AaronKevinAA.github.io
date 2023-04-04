import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const d=JSON.parse('{"title":"promise.all即使有一个请求错误，依旧能返回所有请求","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise.all即使有一个请求错误，依旧能返回所有请求.md"}'),e={name:"FrontEnd/js&css/promise.all即使有一个请求错误，依旧能返回所有请求.md"},p=l(`<h1 id="promise-all即使有一个请求错误-依旧能返回所有请求" tabindex="-1">promise.all即使有一个请求错误，依旧能返回所有请求 <a class="header-anchor" href="#promise-all即使有一个请求错误-依旧能返回所有请求" aria-label="Permalink to &quot;promise.all即使有一个请求错误，依旧能返回所有请求&quot;">​</a></h1><p>我们知道promise.all只要有一个请求发生了错误，整个promise.all都会走catch，如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let promises = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(&quot;data1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(&quot;data2&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject(&quot;err1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.all(promises).then((datas)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(datas)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch((err)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// err1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>现在要求即使有一个请求发送了错误，依然走then，返回的数据设为null即可，例如[data1,data2,null]</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//确保任何被拒绝的 Promise 都返回一个 resolved 的 Promise，并且该 Promise 的值为 null</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.all(promises.map(promise =&gt; promise.catch(() =&gt; null)))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then((datas) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(datas)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }).catch((err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>也可以用allSettled实现，但题目要求是修改promise.all方法，so~</p>`,6),o=[p];function t(c,r,i,C,A,_){return n(),a("div",null,o)}const y=s(e,[["render",t]]);export{d as __pageData,y as default};

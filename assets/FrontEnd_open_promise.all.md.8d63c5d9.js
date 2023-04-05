import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const D=JSON.parse('{"title":"promise.all方法","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/open/promise.all.md"}'),e={name:"FrontEnd/open/promise.all.md"},p=l(`<h1 id="promise-all方法" tabindex="-1">promise.all方法 <a class="header-anchor" href="#promise-all方法" aria-label="Permalink to &quot;promise.all方法&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 手写实现promise.all方法</span></span>
<span class="line"><span style="color:#A6ACCD;">// 正确返回结果列表，错误返回错误信息</span></span>
<span class="line"><span style="color:#A6ACCD;">function promiseAll(promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    let completeCount = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let promise of promises) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            promise.then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                result.push(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">                completeCount++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (completeCount === promises.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                reject(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let promises = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    Promise.resolve(&quot;data1&quot;), Promise.resolve(&quot;data2&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">promises.push(Promise.reject(&quot;err1&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">promiseAll(promises).then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[p];function t(r,c,i,C,A,m){return a(),n("div",null,o)}const _=s(e,[["render",t]]);export{D as __pageData,_ as default};

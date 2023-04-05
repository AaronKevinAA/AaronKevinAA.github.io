import{_ as s,c as n,o as a,N as e}from"./chunks/framework.0799945b.js";const D=JSON.parse('{"title":"promise.all实现","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise.all.md"}'),l={name:"FrontEnd/js&css/promise.all.md"},p=e(`<h1 id="promise-all实现" tabindex="-1">promise.all实现 <a class="header-anchor" href="#promise-all实现" aria-label="Permalink to &quot;promise.all实现&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 手写实现promise.race方法</span></span>
<span class="line"><span style="color:#A6ACCD;">// 只返回最快的那个请求</span></span>
<span class="line"><span style="color:#A6ACCD;">function promiseRace(promises){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for(let promise of promises){</span></span>
<span class="line"><span style="color:#A6ACCD;">            promise.then(res=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }).catch(err=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                reject(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let promises = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(&quot;data1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            reject(&quot;err1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },500)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">promiseRace(promises).then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[p];function r(t,c,i,C,A,m){return a(),n("div",null,o)}const _=s(l,[["render",r]]);export{D as __pageData,_ as default};

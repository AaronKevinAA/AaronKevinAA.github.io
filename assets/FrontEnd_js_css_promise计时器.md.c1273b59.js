import{_ as s,c as n,o as e,N as a}from"./chunks/framework.0799945b.js";const d=JSON.parse('{"title":"promise计时器","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise计时器.md"}'),p={name:"FrontEnd/js&css/promise计时器.md"},o=a(`<h1 id="promise计时器" tabindex="-1">promise计时器 <a class="header-anchor" href="#promise计时器" aria-label="Permalink to &quot;promise计时器&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 实现一个promise计时器，超出时间直接报错，返回一个promise</span></span>
<span class="line"><span style="color:#A6ACCD;">function promiseTimer(promise, time) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 封装一个计时器 到时调用reject方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timer = new Promise((resolve, reject) =&gt; setTimeout(()=&gt;{reject(&quot;超时&quot;)}, time));</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Promise.race([promise, timer])</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let promise = new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(&quot;未超时&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">promiseTimer(promise, 500)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .then(res =&gt; console.log(res))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .catch((err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果是多个promise一起计时呢？</p><p>TODO:有时间我再想想怎么实现，感觉是Promise.all+race啊</p>`,4),l=[o];function t(r,c,i,m,C,A){return e(),n("div",null,l)}const D=s(p,[["render",t]]);export{d as __pageData,D as default};

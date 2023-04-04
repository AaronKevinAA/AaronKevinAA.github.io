import{_ as s,c as a,o as n,N as p}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"url加请求参数","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/url-add-param.md"}'),l={name:"FrontEnd/js&css/url-add-param.md"},e=p(`<h1 id="url加请求参数" tabindex="-1">url加请求参数 <a class="header-anchor" href="#url加请求参数" aria-label="Permalink to &quot;url加请求参数&quot;">​</a></h1><p>pdd前端实习面试</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let url = &quot;www.baidu.com?a=1&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let params = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    b: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    c: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// url:www.baidu.com?a=1&amp;b=2&amp;c=3</span></span>
<span class="line"><span style="color:#A6ACCD;">function addParam(url, params) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 判断第一个分隔符是?还是&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const sep = url.indexOf(&quot;?&quot;) === -1 ? &quot;?&quot; : &quot;&amp;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 这里用数组接受参数值，这样方便用join(&quot;&amp;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    let paramsStr = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let key in params) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 因为in会遍历到原型对象，所以要判断一下key是不是当前对象的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (params.hasOwnProperty(key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果参数是d:m=1呢？所以说这里要用encodeURIComponent编码参数</span></span>
<span class="line"><span style="color:#A6ACCD;">            paramsStr.push(\`\${key}=\${encodeURIComponent(params[key])}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return url + sep + paramsStr.join(&quot;&amp;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(addParam(url, params))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[e];function t(r,c,i,C,A,u){return n(),a("div",null,o)}const y=s(l,[["render",t]]);export{m as __pageData,y as default};

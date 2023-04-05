import{_ as s,c as a,o as n,N as e}from"./chunks/framework.0799945b.js";const h=JSON.parse('{"title":"正则：匹配手机号","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/匹配手机号.md"}'),l={name:"FrontEnd/js&css/匹配手机号.md"},p=e(`<h1 id="正则-匹配手机号" tabindex="-1">正则：匹配手机号 <a class="header-anchor" href="#正则-匹配手机号" aria-label="Permalink to &quot;正则：匹配手机号&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const reg = /^1[3456789]\\d{9}$/</span></span>
<span class="line"><span style="color:#A6ACCD;">const phone=&#39;12345678911&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(reg.test(phone)){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">}else{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>解释：</p><p>//表示正则表达式</p><p>^表示开头，$表示结尾，例如^hello$表示只匹配hello，而不是hello world等等</p><p>1表示开头必须是1</p><p>[34567689]表示1后面跟的数字可以是3-9中的任意一个</p><p>\\d表示数字，等同于[0-9]</p><p>{9}表示前面的\\d必须有九个</p>`,9),o=[p];function t(c,r,i,_,d,C){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};

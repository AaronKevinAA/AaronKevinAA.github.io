import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const _=JSON.parse('{"title":"下划线转驼峰","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/undeline-camelcase.md"}'),e={name:"FrontEnd/js&css/undeline-camelcase.md"},p=l(`<h1 id="下划线转驼峰" tabindex="-1">下划线转驼峰 <a class="header-anchor" href="#下划线转驼峰" aria-label="Permalink to &quot;下划线转驼峰&quot;">​</a></h1><p>腾讯云智笔试</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 实现一个函数： underlineToCamelCase</span></span>
<span class="line"><span style="color:#A6ACCD;">// 输入字段：“_hello_world”</span></span>
<span class="line"><span style="color:#A6ACCD;">// 输入解析后的结果为:“helloWorld”</span></span>
<span class="line"><span style="color:#A6ACCD;">function underlineToCamelCase(str) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用正则</span></span>
<span class="line"><span style="color:#A6ACCD;">    let pStr = str.replace(/_([a-z])/g, function (match, group) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return group.toUpperCase();</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 这里考虑了首字母下划线，如果题目没要求可以不写</span></span>
<span class="line"><span style="color:#A6ACCD;">    return pStr.charAt(0).toLowerCase() + pStr.slice(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(underlineToCamelCase(&quot;_hello_world&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>驼峰转下划线</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 实现一个函数： camelCaseToUnderline</span></span>
<span class="line"><span style="color:#A6ACCD;">// 输入字段：“helloWorld”</span></span>
<span class="line"><span style="color:#A6ACCD;">// 输入解析后的结果为:“hello_world”</span></span>
<span class="line"><span style="color:#A6ACCD;">function camelCaseToUnderline(str) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用正则</span></span>
<span class="line"><span style="color:#A6ACCD;">    return str.replace(/([a-z])([A-Z])/g, function (match, group1,group2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return group1 + &#39;_&#39; + group2.toLowerCase();</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(camelCaseToUnderline(&quot;helloWorld&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),o=[p];function c(t,r,C,i,A,d){return a(),n("div",null,o)}const y=s(e,[["render",c]]);export{_ as __pageData,y as default};

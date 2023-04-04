import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const d=JSON.parse('{"title":"url参数解析","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/url-parse.md"}'),e={name:"FrontEnd/js&css/url-parse.md"},p=l(`<h1 id="url参数解析" tabindex="-1">url参数解析 <a class="header-anchor" href="#url参数解析" aria-label="Permalink to &quot;url参数解析&quot;">​</a></h1><p>小米前端实习面试</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let url = &quot;http://www.domain.com/?user=jack&amp;id=123&amp;id=456&amp;city=%E5%8C%97%E4%BA%AC&amp;enabled&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 实现一个函数： parseParam</span></span>
<span class="line"><span style="color:#A6ACCD;">// 输入解析后的结果为:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// {</span></span>
<span class="line"><span style="color:#A6ACCD;">//   user: &#39;jack&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">//   id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型</span></span>
<span class="line"><span style="color:#A6ACCD;">//   city: &#39;北京&#39;, // 中文需解码</span></span>
<span class="line"><span style="color:#A6ACCD;">//   enabled: true, // 未指定值得 key 约定为 false</span></span>
<span class="line"><span style="color:#A6ACCD;">// }</span></span>
<span class="line"><span style="color:#A6ACCD;">function parseParam(url) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 截取问号后面的字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    let paramsList = url.slice(url.indexOf(&quot;?&quot;)+1).split(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用reduce函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    return paramsList.reduce((result, param) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let [key, value] = param.split(&quot;=&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 解码值</span></span>
<span class="line"><span style="color:#A6ACCD;">        let decodeValue = decodeURIComponent(value || &quot;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 判断值的类型</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (Number(decodeValue)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果是数字</span></span>
<span class="line"><span style="color:#A6ACCD;">            decodeValue = Number(decodeValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (decodeValue === &quot;&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果是空，则表示是逻辑对</span></span>
<span class="line"><span style="color:#A6ACCD;">            decodeValue = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 判断是否之前出现过该字段</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (key in result) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果之前出现过而且已经是数组了，则直接加上该值</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (result[key] instanceof Array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                result[key] = [...result[key], decodeValue]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 否则要重新构建一个数组，包含之前的值</span></span>
<span class="line"><span style="color:#A6ACCD;">                result[key] = [result[key], decodeValue]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">            result[key] = decodeValue</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 这里要return result 否则，每次循环都会被初始化为{}</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(parseParam(url))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[p];function c(t,r,C,A,i,u){return a(),n("div",null,o)}const D=s(e,[["render",c]]);export{d as __pageData,D as default};

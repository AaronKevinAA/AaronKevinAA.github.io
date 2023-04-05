import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const D=JSON.parse('{"title":"数组的交集、并集、差集","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/数组的交集、并集、差集.md"}'),e={name:"FrontEnd/js&css/数组的交集、并集、差集.md"},p=l(`<h1 id="数组的交集、并集、差集" tabindex="-1">数组的交集、并集、差集 <a class="header-anchor" href="#数组的交集、并集、差集" aria-label="Permalink to &quot;数组的交集、并集、差集&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr1 = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr2 = [2,3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 并集 解构+set+解构</span></span>
<span class="line"><span style="color:#A6ACCD;">let unionArr = [...new Set([...arr1,...arr2])]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(unionArr)  //[1,2,3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 交集</span></span>
<span class="line"><span style="color:#A6ACCD;">let res = arr1.filter(item=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return arr2.includes(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(res) //[2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 差集 arr1-arr2</span></span>
<span class="line"><span style="color:#A6ACCD;">let ans = arr1.filter(item=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return !arr2.includes(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ans) //[1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>那如果是要求多个数组的交集呢？</p><p>像这种长度没办法提前确定的，都可以考虑reduce方法是否能实现</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function intersection(...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (args.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (args.length === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return args[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let res = args.reduce((result, arr) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result.filter(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return arr.includes(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    return [...new Set(res)]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(intersection(arr1, arr2, arr3))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),r=[p];function o(t,c,i,C,A,y){return a(),n("div",null,r)}const d=s(e,[["render",o]]);export{D as __pageData,d as default};

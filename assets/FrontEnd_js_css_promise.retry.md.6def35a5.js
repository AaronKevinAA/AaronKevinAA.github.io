import{_ as s,c as n,o as a,N as e}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"实现promise.retry","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise.retry.md"}'),l={name:"FrontEnd/js&css/promise.retry.md"},p=e(`<h1 id="实现promise-retry" tabindex="-1">实现promise.retry <a class="header-anchor" href="#实现promise-retry" aria-label="Permalink to &quot;实现promise.retry&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//实现一个方法promiseRetry,失败或超时重新请求,达到最大重试次数则返回reject</span></span>
<span class="line"><span style="color:#A6ACCD;">function promiseRetry(promise, timeout, maxCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 封装一个带有定时器的异步请求方法,必须是对象函数,这样才能每次调用都是生成一个新的请求</span></span>
<span class="line"><span style="color:#A6ACCD;">    let promiseTimer = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            promise().then(res =&gt; resolve(res)).catch((err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                reject(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果超时直接执行reject</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                reject()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, timeout)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let count = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        function run() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            promiseTimer().then(resolve).catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (count &gt;= maxCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&quot;请求重试&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                count++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                //再次调用这个方法</span></span>
<span class="line"><span style="color:#A6ACCD;">                setTimeout(run, timeout);</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        run();</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let promise = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(&quot;未超时,成功获取数据&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, Math.random() * 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // reject()</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">promiseRetry(promise, 500, 3).then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;达到最大次数&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[p];function t(r,c,i,C,A,y){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};

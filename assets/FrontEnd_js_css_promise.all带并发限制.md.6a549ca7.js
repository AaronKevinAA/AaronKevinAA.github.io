import{_ as s,c as n,o as a,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"实现带并发限制的promise.all","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/js&css/promise.all带并发限制.md"}'),p={name:"FrontEnd/js&css/promise.all带并发限制.md"},e=l(`<h1 id="实现带并发限制的promise-all" tabindex="-1">实现带并发限制的promise.all <a class="header-anchor" href="#实现带并发限制的promise-all" aria-label="Permalink to &quot;实现带并发限制的promise.all&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 实现一个带并发个数限制的promise.all方法limitedPromiseAll</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1000s打印两个1,9000s打印两个1,10000s打印两个1</span></span>
<span class="line"><span style="color:#A6ACCD;">function limitedPromiseAll(promises,limit){</span></span>
<span class="line"><span style="color:#A6ACCD;">	//TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义一个task函数</span></span>
<span class="line"><span style="color:#A6ACCD;">let task = (timer) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 要返回一个函数，如果直接返回一个new Promise相当于已经调用开始执行了</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这里数组里放还没有开始调用的异步任务</span></span>
<span class="line"><span style="color:#A6ACCD;">let promises = [task(1000), task(1000), task(8000), task(8000), task(1000), task(1000)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">limitedPromiseAll(promises,2).then(r=&gt;console.log(r))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>实现如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function limitedPromiseAll(promises,limit){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 当前正在运行的任务个数</span></span>
<span class="line"><span style="color:#A6ACCD;">    let runningCount = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 等待执行的队列</span></span>
<span class="line"><span style="color:#A6ACCD;">    let waitQueue = [...promises];</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 执行任务的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    function runTask(promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Promise(async(resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            runningCount++;</span></span>
<span class="line"><span style="color:#A6ACCD;">            try{</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ans = await promise();</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve(ans);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }catch (err){</span></span>
<span class="line"><span style="color:#A6ACCD;">                reject(err);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">                runningCount--;</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&quot;任务完成&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        function runQueue(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(waitQueue.length===0&amp;&amp;runningCount===0){</span></span>
<span class="line"><span style="color:#A6ACCD;">                resolve(&quot;所有任务已执行完毕&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(runningCount&lt;limit&amp;&amp;waitQueue.length&gt;0){</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 出队列</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(\`当前线程空闲，取出等待队列中方法执行\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">                const currentTask = waitQueue.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 不管当前任务成功或失败都通知队列可以开始取任务了</span></span>
<span class="line"><span style="color:#A6ACCD;">                runTask(currentTask).finally(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    runQueue()</span></span>
<span class="line"><span style="color:#A6ACCD;">                })</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 通知队列继续取任务，因为有可能还存在空闲</span></span>
<span class="line"><span style="color:#A6ACCD;">                runQueue()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 当前有等待任务但是队列不空闲</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&quot;当前达到最大数量，阻塞当前线程，等待空闲&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        runQueue()</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),o=[e];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};

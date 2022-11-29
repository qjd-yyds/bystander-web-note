import{_ as n,e as s}from"./app.1f7b43e3.js";var a="/web-site/assets/await.02653b06.jpg";const p={},t=s(`<h1 id="\u6DF1\u5165\u7406\u89E3-async-await" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3-async-await" aria-hidden="true">#</a> \u6DF1\u5165\u7406\u89E3 async/await</h1><h2 id="\u4EC0\u4E48\u662F" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F" aria-hidden="true">#</a> \u4EC0\u4E48\u662F</h2><ul><li>\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u8BA9\u5F02\u6B65\u64CD\u4F5C\u66F4\u52A0\u7B80\u5355</li><li>\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A promise <ul><li>return \u7684\u503C\u662F promise resolved \u65F6\u5019\u7684 value</li><li>throw \u7684\u503C\u662F promise rejected \u65F6\u5019\u7684 reason</li></ul></li></ul><h2 id="\u8BA4\u8BC6-async" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC6-async" aria-hidden="true">#</a> \u8BA4\u8BC6 async</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="await" tabindex="-1"><a class="header-anchor" href="#await" aria-hidden="true">#</a> await</h2><ul><li>\u53EA\u80FD\u51FA\u73B0\u5728 async \u51FD\u6570\u5185\u6216\u8005\u6700\u5916\u5C42</li><li>\u7B49\u5F85\u4E00\u4E2A promise \u5BF9\u8C61\u7684\u503C</li><li>await \u7684 promise \u72B6\u6001\u4E3A rejected\uFF0C\u540E\u7EED\u64CD\u4F5C\u4E2D\u65AD <img src="`+a+`" alt="await"></li></ul><h2 id="\u9519\u8BEF\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u6355\u83B7" aria-hidden="true">#</a> \u9519\u8BEF\u6355\u83B7</h2><p>\u4EE5\u4E0B\u4EE3\u7801 reject \u540E\uFF0C\u540E\u7EED\u4EE3\u7801\u4E2D\u65AD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u540E\u7EED\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C</span>
  <span class="token keyword">return</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F53\u4F7F\u7528 catch \u6355\u83B7\u9519\u8BEF\u540E\uFF0C\u540E\u7EED\u4EE3\u7801\u4E0D\u4F1A\u4E2D\u65AD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u5F02\u5E38</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C</span>
  <span class="token keyword">return</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F7F\u7528 trycatch \u4E5F\u4E0D\u4F1A\u4E2D\u65AD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u5F02\u5E38</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C</span>
  <span class="token keyword">return</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="async-\u51FD\u6570\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#async-\u51FD\u6570\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> async \u51FD\u6570\u5B9E\u73B0\u539F\u7406</h2><p>\u5E95\u5C42\u4F7F\u7528\u4E86 generator \u751F\u6210\u5668\u4F5C\u4E3A\u5C01\u88C5\u5B9E\u73B0 async function example(params) { ... }\u4E3A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1.\u5148\u5206\u89E3\u6210\u666E\u901A\u51FD\u6570\uFF0C\u4F20\u5165\u4E00\u4E2Agenerator\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// spawn \u8FD4\u56DE\u4E00\u4E2Apromise</span>
<span class="token keyword">function</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token parameter">genF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u751F\u6210\u5668\u5BF9\u8C61</span>
    <span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">genF</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6267\u884Cstep\u65B9\u6CD5</span>
    <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token parameter">nextF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> next
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6267\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668\u5BF9\u8C61</span>
        next <span class="token operator">=</span> <span class="token function">nextF</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5982\u679C\u751F\u6210\u5668\u7ED3\u675F,\u8FD4\u56DEresolve\u72B6\u6001</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,17);function e(c,o){return t}var u=n(p,[["render",e]]);export{u as default};
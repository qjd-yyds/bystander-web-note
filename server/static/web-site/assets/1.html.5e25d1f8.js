import{_ as n,o as s,a,e as p}from"./app.1f7b43e3.js";const e={},t={class:"language-javascript ext-js line-numbers-mode"},o=p(`<pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">longNoRepeatStr</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    pre <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> max <span class="token operator">=</span> count
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div>`,2),c=[o];function l(r,u){return s(),a("div",t,c)}var i=n(e,[["render",l]]);export{i as default};

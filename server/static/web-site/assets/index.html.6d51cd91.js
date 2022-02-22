import{_ as n,c as s}from"./app.56e16294.js";var a="/web-site/assets/priority-queue.e885d384.png";const p={},t=s('<h1 id="\u4F18\u5148\u7EA7\u961F\u5217-priority-queue" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7\u961F\u5217-priority-queue" aria-hidden="true">#</a> \u4F18\u5148\u7EA7\u961F\u5217\uFF08priority-queue\uFF09</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6BD4\u8F83\u5F62\u8C61\u70B9\uFF0C\u53EF\u4EE5\u79F0\u4E3A\u63D2\u961F,\u6BD4\u5982\u4F18\u5148\u7ED9\u519B\u4EBA\u8001\u4EBA\u5B55\u5987\u63D2\u961F</p></div><p>\u548C\u961F\u5217\u5DEE\u4E0D\u591A\uFF0C\u4F46\u662F\u4F18\u5148\u7EA7\u961F\u5217\u518D\u63D2\u5165\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u4F1A\u5148\u8003\u8651\u8FD9\u4E2A\u6570\u636E\u7684\u4F18\u5148\u7EA7\uFF0C\u548C\u5176\u4ED6\u6570\u636E\u4F18\u5148\u7EA7<strong>\u8FDB\u884C\u6BD4\u8F83</strong>\uFF0C\u7136\u540E\u63D2\u5165\u6B63\u786E\u7684\u4F4D\u7F6E</p><ul><li>\u5C01\u88C5\u5143\u7D20\u548C\u4F18\u5148\u7EA7\u653E\u5728\u4E00\u8D77</li><li>\u6DFB\u52A0\u5143\u7D20\uFF0C\u5C06\u65B0\u63D2\u5165\u7684\u5143\u7D20\u7684\u4F18\u5148\u7EA7\u548C\u961F\u5217\u4E2D\u5B58\u5728\u5143\u7D20\u7684\u4F18\u5148\u7EA7\u6BD4\u8F83\uFF0C\u4EE5\u83B7\u53D6\u6B63\u786E\u7684\u4F4D\u7F6E</li></ul><p><img src="'+a+`" alt="\u4F18\u5148\u7EA7\u961F\u5217"></p><h2 id="\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5" aria-hidden="true">#</a> \u5C01\u88C5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PriorityQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B50\u5143\u7D20\u6784\u9020\u51FD\u6570</span>
  <span class="token keyword">function</span> <span class="token function">QueueElement</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element
    <span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u63D2\u5165\u65B9\u6CD5</span>
  <span class="token class-name">PriorityQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">enqueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> queueElement <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueueElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> priority<span class="token punctuation">)</span>
    <span class="token comment">// \u5224\u65AD\u961F\u5217\u662F\u5426\u7A7A</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueElement<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> added <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u4F18\u5148\u7EA7\u5C0F\u4E8E\uFF0C\u6DFB\u52A0\u5230\u5F53\u524D\u5143\u7D20\u4E4B\u524D</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>queueElement<span class="token punctuation">.</span>priority <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>priority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> queueElement<span class="token punctuation">)</span>
          added <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u6CA1\u6709\u627E\u5230\u4F18\u5148\u7EA7\u6BD4\u81EA\u5DF1\u9AD8\u7684\uFF0C\u5728\u5C3E\u90E8\u6DFB\u52A0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>added<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueElement<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,8);function e(o,c){return t}var u=n(p,[["render",e]]);export{u as default};

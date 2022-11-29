import{_ as n,e as s}from"./app.1f7b43e3.js";const a={},p=s(`<h1 id="rxjs-reactivex" tabindex="-1"><a class="header-anchor" href="#rxjs-reactivex" aria-hidden="true">#</a> Rxjs(reactiveX)</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>reactiveX \u662F Reactive Extensions \u7684\u7F29\u5199\uFF0C<strong>\u54CD\u5E94\u5F0F\u7F16\u7A0B</strong>\uFF0C\u4E00\u79CD\u7F16\u7A0B\u6A21\u578B</li><li>Rxjs \u662F JavaScript \u7684\u5B9E\u73B0</li><li>\u4F7F\u7528\u53EF\u89C2\u5BDF\u5E8F\u5217(Observable) \u6570\u636E\u548C\u65F6\u95F4\u7684\u4E00\u4E2A\u62BD\u8C61 \u6765\u7F16\u5199\u5F02\u6B65\u548C\u57FA\u4E8E\u4E8B\u4EF6\u7684\u7A0B\u5E8F</li><li>\u4F18\u70B9 <ul><li>\u51FD\u6570\u5F0F\u98CE\u683C</li><li>\u8F7B\u677E\u5E76\u53D1</li><li>\u7B80\u5316\u4EE3\u7801</li><li>\u5F02\u6B65\u9519\u8BEF\u5904\u7406</li></ul></li></ul><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p><code>npm install rxjs</code> \u8BA2\u9605 document \u7684\u9F20\u6807\u79FB\u52A8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Rx <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span>
<span class="token keyword">const</span> docele <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
<span class="token keyword">const</span> mousemove$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>docele<span class="token punctuation">,</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">)</span>
mousemove$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  docele<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token punctuation">.</span>clientX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token punctuation">.</span>clientY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u521B\u5EFA observable</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Rx <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span>
<span class="token keyword">const</span> observable <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    observer<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
observable<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// 1,2,3</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u53D6\u6D88 observable <code>unsubscribe</code> Observable</p><ul><li>\u521B\u5EFA</li><li>\u8BA2\u9605</li><li>\u6267\u884C</li><li>\u6E05\u7406</li></ul><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>observable \u6210\u4E3A ECMAScript \u63D0\u6848</p><ul><li>\u53EF\u4EE5\u53D6\u6D88</li><li>\u53EF\u4EE5\u53D1\u9001\u591A\u4E2A\u503C</li><li>\u5B66\u4E60\u66F2\u7EBF\u9661\u5CED</li><li>\u6709\u5DE5\u5177\u51FD\u6570\u5BF9\u7ED3\u679C\u5904\u7406</li></ul><p>\u804A\u5929\u5BA4\u4F18\u5316\uFF0C\u652F\u6301 3 \u4E07\u4EBA\u76F4\u64AD</p><ol><li>\u4F7F\u7528\u5B9A\u65F6\u5668\uFF0C\u6BCF\u9694 1s \u5237\u65B0</li><li>\u7EF4\u62A4\u4E00\u4E2A\u961F\u5217\uFF0C\u652F\u6301\u7EC8\u6B62\u7B49\u64CD\u4F5C</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6BCF\u9694\u4E00\u79D2\u66F4\u65B0\u6570\u636E</span>
Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>chatRoomIns<span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">bufferTime</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">message</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u6BCF\u96945ms\u51FA\u6765\u4E00\u4E2A\u6570\u636E\uFF0C1s\u540E\u5904\u7406</span>
Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">bufferTime</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">message</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,16);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
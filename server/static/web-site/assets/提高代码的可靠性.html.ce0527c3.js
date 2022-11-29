import{_ as a,e as s}from"./app.1f7b43e3.js";const n={},e=s(`<h1 id="\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u9760\u6027" tabindex="-1"><a class="header-anchor" href="#\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u9760\u6027" aria-hidden="true">#</a> \u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u9760\u6027</h1><h2 id="\u51FD\u6570\u5F0F\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u7F16\u7A0B" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u7F16\u7A0B</h2><div class="custom-container tip"><p class="custom-container-title">\u547D\u4EE4\u5F0F\u7F16\u7A0B</p><p>\u8BE6\u7EC6\u7684\u547D\u4EE4\u673A\u5668\u5982\u4F55\u53BB\u5904\u7406\u4E00\u4EF6\u4E8B\u60C5\u4EE5\u8FBE\u5230\u4F60\u60F3\u8981\u7684\u6548\u679C</p></div><div class="custom-container tip"><p class="custom-container-title">\u51FD\u6570\u5F0F</p><p>\u5C06\u7A0B\u5E8F\u5206\u89E3\u6210\u4E00\u4E9B\u53EF\u91CD\u7528\u66F4\u53EF\u9760\u4E14\u6613\u4E8E\u7406\u89E3\u7684\u90E8\u5206\uFF0C\u7136\u540E\u5C06\u5B83\u4EEC\u7EC4\u5408\u8D77\u6765\uFF0C\u5F62\u6210\u4E00\u4E2A\u66F4\u6613\u63A8\u7406\u7684\u7A0B\u5E8F\u6574\u4F53</p></div><p>\u51FD\u6570\u5F0F\u7F16\u7A0B\u5F0F\u4E00\u79CD\u7F16\u7A0B\u8303\u5F0F\uFF0C\u662F\u4E00\u79CD\u6784\u5EFA\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7ED3\u6784\u548C\u5143\u7D20\u7684\u98CE\u683C\uFF0C\u5B83\u628A\u8BA1\u7B97\u770B\u4F5C\u662F\u5BF9\u6570\u5B66\u51FD\u6570\u7684\u8BC4\u4F30\uFF0C\u907F\u514D\u4E86\u72B6\u6001\u7684\u53D8\u5316\u548C\u6570\u636E\u7684\u53EF\u53D8</p><h2 id="\u7EAF\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u51FD\u6570" aria-hidden="true">#</a> \u7EAF\u51FD\u6570</h2><p>\u5982\u679C\u51FD\u6570\u7684\u8C03\u7528\u53C2\u6570\u76F8\u540C\uFF0C\u5219\u6C38\u8FDC\u8FD4\u56DE\u76F8\u540C\u7684\u7ED3\u679C\u3002\u4ED6\u4E0D\u4F9D\u8D56\u7A0B\u5E8F\u6267\u884C\u671F\u95F4\u51FD\u6570\u5916\u90E8\u4EFB\u4F55\u72B6\u6001\u6216\u8005\u6570\u636E\u7684\u53D8\u6362\uFF0C\u53EA\u4F9D\u8D56\u8F93\u5165\u7684\u53C2\u6570</p><p>:::: code-group ::: code-group-item \u975E\u7EAF\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> discount <span class="token operator">=</span> <span class="token number">0.8</span>
<span class="token keyword">const</span> <span class="token function-variable function">calculatePrice</span> <span class="token operator">=</span> <span class="token parameter">price</span> <span class="token operator">=&gt;</span> price <span class="token operator">*</span> discount
<span class="token keyword">let</span> price <span class="token operator">=</span> <span class="token function">calculatePrice</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>::: ::: code-group-item \u7EAF\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">calculatePrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> discount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> price <span class="token operator">*</span> discount
<span class="token keyword">let</span> price <span class="token operator">=</span> <span class="token function">calculatePrice</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>::: ::::</p><h2 id="\u51FD\u6570\u526F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u526F\u4F5C\u7528" aria-hidden="true">#</a> \u51FD\u6570\u526F\u4F5C\u7528</h2><ul><li>\u5F53\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u9664\u4E86\u8FD4\u56DE\u51FD\u6570\u503C\u4EE5\u5916\uFF0C\u8FD8\u5BF9\u4E3B\u8C03\u7528\u51FD\u6570\u4EA7\u751F\u9644\u52A0\u7684\u5F71\u54CD</li><li>\u4F8B\u5982\u4FEE\u6539\u5168\u5C40\u53D8\u91CF\uFF08\u51FD\u6570\u5916\u7684\u53D8\u91CF\uFF09\u6216\u4FEE\u6539\u53C2\u6570</li><li>splice pop \u8FD9\u4E9B\u539F\u751F\u51FD\u6570 \u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\uFF0C\u88AB\u8BA4\u4E3A\u4EA7\u751F\u526F\u4F5C\u7528\uFF0C\u662F\u4E0D\u7EAF\u7684</li></ul><div class="custom-container tip"><p class="custom-container-title">\u5982\u4F55\u4FDD\u8BC1\u51FD\u6570\u65E0\u526F\u4F5C\u7528</p><ul><li>\u51FD\u6570\u5165\u53E3\u4F7F\u7528\u53C2\u6570\u8FD0\u7B97\uFF0C\u800C\u4E0D\u4FEE\u6539\u4ED6</li><li>\u51FD\u6570\u5185\u4E0D\u4FEE\u6539\u51FD\u6570\u5916\u7684\u53D8\u91CF</li><li>\u8FD0\u7B97\u7ED3\u679C\u901A\u8FC7\u51FD\u6570\u8FD4\u56DE\u5916\u90E8</li></ul></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">let</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 50</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u53EF\u53D8\u6027\u548C\u4E0D\u53EF\u53D8\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u53D8\u6027\u548C\u4E0D\u53EF\u53D8\u6027" aria-hidden="true">#</a> \u53EF\u53D8\u6027\u548C\u4E0D\u53EF\u53D8\u6027</h2><ul><li>\u53EF\u53D8\u6027\u662F\u6307\u4E00\u4E2A\u53D8\u91CF\u521B\u5EFA\u4EE5\u540E\u53EF\u4EE5\u4EFB\u610F\u4FEE\u6539</li><li>\u4E0D\u53EF\u53D8\u6027\u662F\u6307\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4E00\u65E6\u88AB\u521B\u5EFA\uFF0C\u5C31\u6C38\u8FDC\u65E0\u6CD5\u53CD\u6B63\u6539\u53D8\uFF0C\u4E0D\u53EF\u53D8\u6027\u662F<strong>\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u6838\u5FC3\u6982\u5FF5</strong></li></ul><p>\u901A\u8FC7\u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D\u6765\u5B9E\u73B0\u4E0D\u53EF\u53D8\u6027</p>`,19);function p(t,c){return e}var l=a(n,[["render",p]]);export{l as default};

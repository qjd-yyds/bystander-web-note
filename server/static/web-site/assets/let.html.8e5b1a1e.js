import{_ as a,c as n}from"./app.56e16294.js";const s={},e=n(`<h1 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> let</h1><h2 id="var-\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#var-\u7684\u95EE\u9898" aria-hidden="true">#</a> var \u7684\u95EE\u9898</h2><ul><li>\u58F0\u660E\u63D0\u524D\uFF08hoist\uFF09</li><li>\u6CA1\u6709&quot;\u5757\u7EA7\u4F5C\u7528\u57DF&quot; <blockquote><p>\u4EE3\u7801\u4E2D\u7684\u53D8\u91CF\u4F1A\u8D85\u51FA\u62EC\u53F7\u8FD4\u56DE\uFF0C\u5F71\u54CD\u5916\u56F4\u53D8\u91CF<br> if \u7684\u82B1\u62EC\u53F7\uFF0C\u5BF9\u8C61\u7684\u82B1\u62EC\u53F7</p></blockquote></li></ul><h2 id="let-\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#let-\u7684\u4F18\u70B9" aria-hidden="true">#</a> let \u7684\u4F18\u70B9</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u5728\u53D8\u91CF\u58F0\u660E\u4E4B\u524D\u4F7F\u7528\uFF0C\u62A5\u9519 ReferenceError:cannot acces &#39;b&#39; before initialization</p><p>\u5176\u5B9E\u8FD9\u4E2A\u53EA\u6709\u5728\u65B0\u7248\u8C37\u6B4C\u6D4F\u89C8\u5668\u624D\u4F1A\u62A5\u9519\uFF0C\u65E7\u7684\u6D4F\u89C8\u5668\u62A5\u9519 ReferenceError: b is not defined</p></div><ul><li>&quot;\u4E0D\u4F1A\u88AB\u58F0\u660E\u63D0\u524D&quot;</li><li>\u751F\u6210&quot;\u5757\u7EA7\u4F5C\u7528\u57DF&quot;</li><li>\u5728\u5168\u5C40\u4E2D\u521B\u5EFA\u53D8\u91CF window \u8BBF\u95EE\u4E0D\u5230</li><li>\u4E0D\u80FD\u88AB\u91CD\u590D\u58F0\u660E</li></ul><h2 id="\u6682\u65F6\u6027\u6B7B\u533A" tabindex="-1"><a class="header-anchor" href="#\u6682\u65F6\u6027\u6B7B\u533A" aria-hidden="true">#</a> \u6682\u65F6\u6027\u6B7B\u533A</h2><p>let \u6216\u8005 const \u58F0\u660E\u7684\u8BED\u53E5\u4F1A\u5F62\u6210\u6682\u65F6\u6027\u6B7B\u533A</p><p>\u5728\u4E0B\u9762\u8BED\u53E5\u4E2D \u82B1\u62EC\u53F7\u5185\u7684\u6240\u6709\u4EE3\u7801\u65E0\u6CD5\u8BBF\u95EEx\uFF0C\u56E0\u4E3Ajs\u5F62\u6210\u4E86\u6682\u65F6\u6027\u6B7B\u533A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// x is not defind</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#\u672C\u8D28" aria-hidden="true">#</a> \u672C\u8D28</h2><p>\u533F\u540D\u51FD\u6570\u81EA\u8C03</p>`,12);function t(o,r){return e}var p=a(s,[["render",t]]);export{p as default};

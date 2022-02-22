import{_ as n,c as a}from"./app.56e16294.js";const s={},e=a(`<h1 id="bfc-block-formatting-context" tabindex="-1"><a class="header-anchor" href="#bfc-block-formatting-context" aria-hidden="true">#</a> BFC\uFF08block formatting context\uFF09</h1><p>\u9875\u9762\u4E0A\u53EA\u6709\u5757\u7EA7\u5143\u7D20\u624D\u53EF\u4EE5\u53C2\u4E0E\u7684\u4E00\u4E2A\u5757\u7EA7\u4E0A\u4E0B\u6587\uFF0CIFC \u5219\u662F\u884C\u5185\u4E0A\u4E0B\u6587</p><ul><li>\u72EC\u7ACB\u6E32\u67D3\u533A\u57DF</li><li>\u5916\u9762\u4E0D\u80FD\u5F71\u54CD\u5185\u90E8</li><li>\u5185\u90E8\u4E5F\u4E0D\u80FD\u5F71\u54CD\u5916\u90E8</li></ul><h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><ul><li>\u4E0A\u4E0B margin \u4F1A\u5408\u5E76</li><li>\u5DE6\u53F3\u4E0D\u4F1A\u5408\u5E76</li><li>\u8BA1\u7B97\u7236\u7EA7 BFC \u9AD8\u5EA6\u65F6\uFF0C\u5185\u90E8\u7684\u6D6E\u52A8\u5143\u7D20\u9AD8\u5EA6\u5FC5\u987B\u8BA1\u7B97\u5728\u5185</li></ul><h2 id="\u5F62\u6210\u7684\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F62\u6210\u7684\u6761\u4EF6" aria-hidden="true">#</a> \u5F62\u6210\u7684\u6761\u4EF6</h2><ul><li>float \u7684\u503C\u4E0D\u662F none</li><li>position \u7684\u503C\u4E0D\u662F static \u6216\u8005 relative</li><li>display \u7684\u503C\u662F inline-block\uFF0Ctable-cell\uFF0Cflex\uFF0Ctable-caption \u6216\u8005 inline-flex</li><li>overflow \u7684\u503C\u4E0D\u662F visible</li></ul><h2 id="\u89E3\u51B3-margin-\u5408\u5E76-\u4F7F\u7528-bfc-\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-margin-\u5408\u5E76-\u4F7F\u7528-bfc-\u89E3\u51B3" aria-hidden="true">#</a> \u89E3\u51B3 margin \u5408\u5E76\uFF0C\u4F7F\u7528 BFC \u89E3\u51B3</h2><ul><li>\u5916\u5C42\u5305\u4E00\u4E2A\u65B0\u7684\u5143\u7D20 \u8BA9\u4ED6\u53D8\u6210 BFC \u5982 overflow\uFF1Ahidden\u3002\u7F3A\u70B9\uFF1A\u5185\u90E8\u81EA\u7531\u5B50\u5143\u7D20\u8D85\u51FA\u7236\u5143\u7D20\u4E5F\u80FD\u663E\u793A\uFF0C\u5C31\u51B2\u7A81\u4E86</li><li>\u4F7F\u7528\u4F2A\u5143\u7D20\u3002\u4F18\u70B9\uFF1A\u4E0D\u9690\u85CF\u5185\u5BB9\uFF0C\u4E0D\u6DFB\u52A0\u9AD8\u5EA6\uFF0C\u4E0D\u5F71\u54CD\u9AD8\u5EA6</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u7236\u5143\u7D20:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token string">&#39;table&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u89E3\u51B3\u5782\u76F4\u65B9\u5411-margin-\u6EA2\u51FA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u5782\u76F4\u65B9\u5411-margin-\u6EA2\u51FA" aria-hidden="true">#</a> \u89E3\u51B3\u5782\u76F4\u65B9\u5411 margin \u6EA2\u51FA</h2><p>\u5B50\u5143\u7D20\u8BBE\u7F6E margin-top\uFF0C\u8D85\u51FA\u7236\u5143\u7D20\u7684\u8303\u56F4\uFF0C\u4F1A\u53D8\u6210\u7236\u5143\u7D20\u7684 margin-top</p><p>\u5982\u4F55\u89E3\u51B3</p><ul><li>\u8BBE\u7F6E\u7236\u5143\u7D20 overflow\uFF1Ahidden</li><li>\u7236\u5143\u7D20\u6DFB\u52A0\u900F\u660E\u4E0A\u8FB9\u6846\uFF0C\u8FB9\u6846\u53EF\u4EE5\u963B\u6B62 margin \u6EA2\u51FA\u3002\u7F3A\u70B9\uFF1A\u4F1A\u5F71\u54CD\u5BBD\u9AD8</li><li>\u4F7F\u7528 padding-top \u4EE3\u66FF margin-top\uFF0Cpadding \u4E5F\u53EF\u4EE5\u963B\u6B62 margin \u6EA2\u51FA\uFF0C\u4F46\u662F\u5728\u9ED8\u8BA4\u7684\u76D2\u5B50\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u9AD8\u5EA6</li><li>\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u4E4B\u524D\u6DFB\u52A0\u7A7A\u7684 table\uFF0Ctable \u5929\u751F\u5F62\u6210 BFC</li><li>\u4F7F\u7528\u4F2A\u5143\u7D20\u4EE3\u66FF\u7A7A\u7684 table</li></ul><h2 id="\u5DE6\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94" aria-hidden="true">#</a> \u5DE6\u5B9A\u5BBD\uFF0C\u53F3\u8FB9\u81EA\u9002\u5E94</h2><p>\u5DE6\u4FA7\u6D6E\u52A8\uFF0C\u53F3\u4FA7\u4F7F\u7528 overflow\uFF1Ahidden\uFF0C\u901A\u8FC7\u5F62\u6210 BFC\uFF0C\u5DE6\u8FB9\u7684\u6D6E\u52A8\u65E0\u6CD5\u8FDB\u5165\u53F3\u8FB9\uFF0C\u53F3\u8FB9\u7684\u4E0D\u80FD\u8FDB\u5165\u6D6E\u52A8\u5143\u7D20\u7684\u4E0B\u65B9</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u9AD8\u5EA6\u574D\u584C" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5EA6\u574D\u584C" aria-hidden="true">#</a> \u9AD8\u5EA6\u574D\u584C</h2><p>\u5B50\u5143\u7D20\u6D6E\u52A8\uFF0C\u4E0D\u5360\u666E\u901A\u6587\u6863\u6D41\uFF0C\u7236\u5143\u7D20\u5931\u53BB\u652F\u6491\uFF0C\u9020\u6210\u9AD8\u5EA6\u574D\u584C</p><h3 id="\u5982\u4F55\u89E3\u51B3\u9AD8\u5EA6\u574D\u584C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u89E3\u51B3\u9AD8\u5EA6\u574D\u584C" aria-hidden="true">#</a> \u5982\u4F55\u89E3\u51B3\u9AD8\u5EA6\u574D\u584C</h3><ul><li>\u7236\u5143\u7D20\u8BBE\u7F6E overflow\uFF1Ahidden\u3002\u5F3A\u5236\u6240\u6709\u5185\u90E8\u5143\u7D20\u7684\u6D6E\u52A8\u548C margin</li><li>\u5C3E\u90E8\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684\u5143\u7D20 \u8BBE\u7F6E clear\uFF1Aboth\u3002\u5229\u7528\u7236\u5143\u7D20\u5FC5\u987B\u5305\u88F9\u975E\u6D6E\u52A8\u5143\u7D20\u548C clear\uFF1Aboth \u5C5E\u6027\u3002\u4F46\u662F\u591A\u4E86\u4E00\u4E2A\u770B\u4E0D\u89C1\u7684\u5143\u7D20\uFF0C\u5F71\u54CD\u540E\u7EED\u67E5\u627E</li><li>\u7236\u5143\u7D20\u6D6E\u52A8</li><li>\u7236\u5143\u7D20\u672B\u5C3E\u4F2A\u5143\u7D20\u8BBE\u7F6E clear\uFF1Aboth,\u6709\u4E9B\u6D4F\u89C8\u5668\u7684 table \u6709\u9ED8\u8BA4\u9AD8\u5EA6\uFF0C\u4F7F\u7528 height\uFF1A0</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u7236\u5143\u7D20::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token string">&#39;table&#39;</span><span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,22);function l(p,t){return e}var c=n(s,[["render",l]]);export{c as default};

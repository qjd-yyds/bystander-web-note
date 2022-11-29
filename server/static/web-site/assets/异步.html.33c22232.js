import{_ as n,e as s}from"./app.1f7b43e3.js";const a={},e=s(`<h1 id="\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65" aria-hidden="true">#</a> \u5F02\u6B65</h1><h2 id="\u4EC0\u4E48\u662F\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u540C\u6B65" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u540C\u6B65</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u540C\u6B65\u4EE3\u7801\u4F1A\u5728\u8C03\u7528\u5F97\u5230\u7ED3\u679C\u540E\uFF0C\u518D\u6267\u884C\u4E0B\u9762\u7684\u4EE3\u7801</p></div><p>\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u5148\u6253\u5370 1\uFF0C2s \u4E4B\u540E\u4F1A\u6253\u5370 2,3</p><p>\u4EE3\u7801\u6267\u884C\u987A\u5E8F\u8868\u73B0\u4E3A\u987A\u5E8F\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> t <span class="token operator">&gt;</span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4EC0\u4E48\u662F\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5F02\u6B65" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5F02\u6B65</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8C03\u7528\u5F02\u6B65\u4EE3\u7801\u540E\uFF0C\u4F1A\u5148\u6302\u8D77\uFF0C\u7ACB\u5373\u6267\u884C\u4E0B\u9762\u4EE3\u7801</p></div><p>\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u5148\u6253\u5370 1\uFF0C3\uFF0C\u7B49\u5F85 2s \u540E\u6253\u5370 2</p><p>\u4EE3\u7801\u6267\u884C\u4E0D\u662F\u987A\u5E8F\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5355\u7EBF\u7A0B-js-\u5982\u4F55\u5B9E\u73B0\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u5355\u7EBF\u7A0B-js-\u5982\u4F55\u5B9E\u73B0\u5F02\u6B65" aria-hidden="true">#</a> \u5355\u7EBF\u7A0B js \u5982\u4F55\u5B9E\u73B0\u5F02\u6B65</h2><p>\u901A\u8FC7\u6D4F\u89C8\u5668\u7684\u591A\u7EBF\u7A0B\u5B9E\u73B0\u5F02\u6B65</p><h3 id="\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B" aria-hidden="true">#</a> \u8FDB\u7A0B</h3><ul><li>\u7A0B\u5E8F\u8FD0\u884C\u7684\u5B9E\u4F8B</li><li>\u540C\u4E00\u4E2A\u7A0B\u5E8F\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u8FDB\u7A0B</li><li>\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u7EBF\u7A0B</li></ul><p>linxu \u67E5\u770B\u8FDB\u7A0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ps,process status <span class="token comment"># \u67E5\u770B\u8FDB\u7A0B</span>
top,table of process <span class="token comment"># \u67E5\u770B\u52A8\u6001\u8FDB\u7A0B</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B" aria-hidden="true">#</a> \u7EBF\u7A0B</h3><ul><li>\u64CD\u4F5C\u7CFB\u7EDF\u80FD\u591F\u8FD0\u7B97\u8C03\u5EA6\u7684\u6700\u5C0F\u5355\u4F4D</li><li>\u4E00\u6B21\u53EA\u80FD\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1</li><li>\u62E5\u6709\u81EA\u5DF1\u7684\u8C03\u7528\u6808\uFF0C\u5BC4\u5B58\u5668\u73AF\u5883</li><li>\u540C\u4E00\u4E2A\u8FDB\u7A0B\u7684\u7EBF\u7A0B\u5171\u4EAB\u8FDB\u7A0B\u7684\u8D44\u6E90</li></ul><h3 id="\u6D4F\u89C8\u5668\u4E2D\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4E2D\u8FDB\u7A0B" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u4E2D\u8FDB\u7A0B</h3><ul><li><p>chromium \u6D4F\u89C8\u5668\u8FDB\u7A0B</p><ul><li><p>\u6D4F\u89C8\u5668\u8FDB\u7A0B</p><p>\u63A7\u5236 \u201CChrome\u201D \u5E94\u7528\u7A0B\u5E8F\uFF0C\u5305\u62EC\u5730\u5740\u680F\u3001\u4E66\u7B7E\u3001\u540E\u9000\u548C\u524D\u8FDB\u6309\u94AE\u7B49\u3002\u8FD8\u9700\u8981\u5904\u7406 Web \u6D4F\u89C8\u5668\u7684\u6743\u9650\u7BA1\u7406\uFF0C\u4F8B\u5982\u7F51\u7EDC\u8BF7\u6C42\u548C\u6587\u4EF6\u8BBF\u95EE</p></li><li><p>\u6E32\u67D3\u8FDB\u7A0B</p><ul><li>GUI \u7EBF\u7A0B\uFF1A\u6E32\u67D3\u9875\u9762</li><li>js \u5F15\u64CE\u7EBF\u7A0B\uFF1A\u89E3\u6790\u548C\u6267\u884C js \u7A0B\u5E8F\u548C GUI \u4E92\u65A5\u7EBF\u7A0B</li><li>\u5B9A\u65F6\u89E6\u53D1\u5668\u7EBF\u7A0B\uFF1AsetTimeout \u548C setInterval</li><li>\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B\uFF1A\u5C06\u6EE1\u8DB3\u89E6\u53D1\u6761\u4EF6\u7684\u4E8B\u4EF6\u653E\u5165\u4EFB\u52A1\u961F\u5217</li><li>\u5F02\u6B65 http \u8BF7\u6C42\u7EBF\u7A0B\uFF1Axhr \u6240\u5728\u7EBF\u7A0B</li></ul></li><li><p>GPU \u8FDB\u7A0B</p></li></ul><p>\u72EC\u7ACB\u4E8E\u5176\u4ED6\u8FDB\u7A0B\uFF0C\u4E13\u7528\u4E8E\u5904\u7406 GPU \u4EFB\u52A1\uFF0C\u5B83\u88AB\u5206\u6210\u4E0D\u540C\u7684\u8FDB\u7A0B\uFF0C\u56E0\u4E3A GPU \u4F1A\u5904\u7406\u6765\u81EA\u591A\u4E2A\u8FDB\u7A0B\u7684\u8BF7\u6C42\uFF0C\u5E76\u5C06\u5B83\u4EEC\u7ED8\u5236\u5728\u76F8\u540C\u7684 Surface \u4E2D\u3002</p><ul><li><p>\u7F51\u7EDC\u8FDB\u7A0B</p></li><li><p>\u63D2\u4EF6\u8FDB\u7A0B</p><p>\u63A7\u5236\u7F51\u7AD9\u4F7F\u7528\u7684\u63D2\u4EF6\uFF0C\u4F8B\u5982\uFF1AFlash\u3002</p></li></ul></li></ul><h3 id="\u6D4F\u89C8\u5668\u91C7\u7528\u591A\u8FDB\u7A0B\u67B6\u6784\u6709\u4EC0\u4E48\u4F18\u52BF\u548C\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u91C7\u7528\u591A\u8FDB\u7A0B\u67B6\u6784\u6709\u4EC0\u4E48\u4F18\u52BF\u548C\u7F3A\u70B9" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u91C7\u7528\u591A\u8FDB\u7A0B\u67B6\u6784\u6709\u4EC0\u4E48\u4F18\u52BF\u548C\u7F3A\u70B9</h3><div class="custom-container tip"><p class="custom-container-title">\u4F18\u70B9</p><ol><li>\u7A33\u5B9A\uFF1A \u6D4F\u89C8\u5668\u5C06\u4E0D\u540C\u7684\u529F\u80FD\u804C\u8D23\u5212\u5206\u81F3\u4E0D\u540C\u7684\u8FDB\u7A0B\u4E2D\uFF0C\u5404\u4E2A\u8FDB\u7A0B\u72EC\u7ACB\u5DE5\u4F5C\u4E14\u76F8\u4E92\u9694\u79BB\u7684\uFF0C\u5F53\u4E00\u4E2A\u8FDB\u7A0B\u5D29\u574F\u65F6\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u8FDB\u7A0B\uFF0C\u5F71\u54CD\u7684\u4EC5\u4EC5\u662F\u5F53\u524D\u8FDB\u7A0B\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u4E86\u6D4F\u89C8\u5668\u7684\u7A33\u5B9A\u6027</li><li>\u6D41\u7545\uFF1A\u540C\u6837\u53D7\u5229\u4E0E\u8FDB\u7A0B\u7684\u76F8\u4E92\u72EC\u7ACB\u4E14\u9694\u79BB\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u963B\u585E\u4E5F\u4EC5\u4EC5\u5F71\u54CD\u7684\u662F\u6E32\u67D3\u8FDB\u7A0B\u800C\u5DF2\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5230 GPU \u8FDB\u7A0B\u3001\u63D2\u4EF6\u8FDB\u7A0B\u7B49\uFF0C\u4FDD\u8BC1\u4E86\u6D4F\u89C8\u5668\u7684\u53EF\u4EE5\u6D41\u7A0B\u4E14\u6709\u6761\u4E0D\u7D6E\u7684\u8FD0\u884C</li><li>\u5B89\u5168\uFF1A\u591A\u8FDB\u7A0B\u67B6\u6784\u5F15\u5165\u7684\u6C99\u7BB1\u673A\u5236\uFF0C \u628A\u63D2\u4EF6\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B\u9501\u5728\u6C99\u7BB1\u91CC\u9762\uFF0C\u8FD9\u6837\u5373\u4F7F\u5728\u6E32\u67D3\u8FDB\u7A0B\u6216\u8005\u63D2\u4EF6\u8FDB\u7A0B\u91CC\u9762\u6267\u884C\u4E86\u6076\u610F\u7A0B\u5E8F\uFF0C\u6076\u610F\u7A0B\u5E8F\u4E5F\u65E0\u6CD5\u7A81\u7834\u6C99\u7BB1\u53BB\u83B7\u53D6\u7CFB\u7EDF\u6743\u9650\uFF0C\u4FDD\u8BC1\u4E86\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u6027</li></ol></div><div class="custom-container danger"><p class="custom-container-title">\u7F3A\u70B9</p><ol><li>\u67B6\u6784\u590D\u6742\uFF1A\u6D4F\u89C8\u5668\u6A21\u5757\u4E4B\u95F4\u7684\u8026\u5408\u6027\u9AD8\uFF0C\u6269\u5C55\u6027\u5DEE\uFF0C\u4F1A\u5BFC\u81F4\u73B0\u6709\u7684\u67B6\u6784\u5F88\u96BE\u9002\u5E94\u65B0\u9700\u6C42</li><li>\u56E0\u4E3A\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u4F1A\u5305\u542B\u516C\u5171\u57FA\u7840\u7ED3\u6784\u7684\u526F\u672C\uFF08\u5982 JavaScript \u8FD0\u884C\u73AF\u5883\uFF09\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u6D4F\u89C8\u5668\u4F1A\u6D88\u8017\u66F4\u591A\u7684\u5185\u5B58\u8D44\u6E90</li></ol></div><h2 id="\u5F02\u6B65\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u573A\u666F" aria-hidden="true">#</a> \u5F02\u6B65\u573A\u666F</h2><h3 id="\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u5B9A\u65F6\u5668</h3><div class="custom-container danger"><p class="custom-container-title">\u5B9A\u65F6\u5668\u7684\u95EE\u9898</p><ol><li>\u5B9A\u65F6\u5668\u53EF\u80FD\u4E0D\u4F1A\u6309\u65F6\u6267\u884C</li><li>\u5B9A\u65F6\u5668\u5D4C\u5957 5 \u6B21\u4EE5\u540E\u6700\u5C0F\u95F4\u9694\u4E0D\u80FD\u5C0F\u4E8E 4ms</li></ol></div><ol start="3"><li>\u8C03\u7528 webAPI</li><li>\u5B9A\u65F6\u5668\u8BA1\u6570 2s</li><li>\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B\u5C06\u5B9A\u65F6\u5668\u4E8B\u4EF6\u653E\u5165\u4EFB\u52A1\u961F\u5217\u4E2D</li><li>\u4E3B\u7EBF\u7A0B\u901A\u8FC7 eventloop \u904D\u5386\u4EFB\u52A1\u961F\u5217</li></ol><p>\u5E94\u7528\u573A\u666F</p><ul><li>\u9632\u6296</li><li>\u8282\u6D41</li><li>\u52A8\u753B \u4F1A\u51FA\u73B0\u6389\u5E27</li><li>\u5012\u8BA1\u65F6</li></ul><h3 id="\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> \u7F51\u7EDC\u8BF7\u6C42</h3><h3 id="\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a> \u4E8B\u4EF6\u7ED1\u5B9A</h3><h3 id="es6-promise" tabindex="-1"><a class="header-anchor" href="#es6-promise" aria-hidden="true">#</a> ES6 promise</h3>`,33);function p(t,l){return e}var c=n(a,[["render",p]]);export{c as default};

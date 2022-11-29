import{_ as e,e as a}from"./app.1f7b43e3.js";const s={},n=a(`<h2 id="\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> \u6838\u5FC3\u6982\u5FF5</h2><ul><li>entry \u5165\u53E3</li><li>output \u51FA\u53E3</li><li>loader \u6A21\u5757\u8F6C\u6362\u5668\uFF0C\u5C06\u6A21\u5757\u7684\u539F\u5185\u5BB9\u6309\u7167\u9700\u6C42\u8F6C\u6362\u6210\u65B0\u5185\u5BB9</li><li>plugin \u6269\u5C55\u63D2\u4EF6 \u5728 webpack \u6784\u5EFA\u8FC7\u7A0B\u7684\u7279\u5B9A\u65F6\u673A\u6CE8\u5165\u6269\u5C55\u903B\u8F91\uFF0C\u8D77\u5230\u4F18\u5316\u6216\u8005\u6539\u53D8\u6784\u5EFA\u7ED3\u679C</li><li>mode \u63A7\u5236\u6253\u5305\u73AF\u5883</li><li>devserver \u5C0F\u578B\u7684 express \u670D\u52A1\u5668\uFF0C\u4F7F\u7528 webpack-dev-middleware \u4E2D\u95F4\u4EF6\u4E3A webpack \u63D0\u4F9B\u670D\u52A1</li></ul><h2 id="sourcemap-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#sourcemap-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> sourceMap \u662F\u4EC0\u4E48</h2><p>\u5728\u7F16\u8BD1\u5904\u7406\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5728\u751F\u6210\u4EE3\u7801\u7684\u540C\u65F6\u88AB\u8F6C\u6362\u7684\u90E8\u5206\u548C\u6E90\u4EE3\u7801\u5BF9\u5E94\u90E8\u5206\u7684\u6620\u5C04\u5173\u7CFB</p><ul><li>sourcemap \u5176\u5B9E\u5C31\u662F\u4E24\u4E2A\u4EE3\u7801\u7684\u6620\u5C04\u5173\u7CFB</li><li>js\uFF0Ccss\uFF0Cjava \u90FD\u53EF\u4EE5\u6709</li><li>chrome \u4E5F\u505A\u4E86 sourcemap \u7684\u89E3\u6790\u529F\u80FD</li></ul><h3 id="webpack-\u4E2D\u7684-sourcemap" tabindex="-1"><a class="header-anchor" href="#webpack-\u4E2D\u7684-sourcemap" aria-hidden="true">#</a> webpack \u4E2D\u7684 sourcemap</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6587\u4EF6\u6307\u7EB9\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u6307\u7EB9\u6280\u672F" aria-hidden="true">#</a> \u6587\u4EF6\u6307\u7EB9\u6280\u672F</h2><p>\u6E90\u6587\u4EF6 hash \u5185\u5BB9\u6458\u8981 \u54C8\u5E0C\u7B97\u6CD5\uFF08\u6458\u8981\u7B97\u6CD5\uFF09\u660E\u6587\u8F6C\u6210\u5BC6\u6587\uFF0C\u6570\u636E\u6709\u4E22\u5931\uFF0C\u6240\u4EE5\u4E0D\u53EF\u9006</p><ul><li>\u7248\u672C\u63A7\u5236</li><li>\u7F13\u5B58</li></ul><h2 id="\u4EC0\u4E48\u662F-chunk" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-chunk" aria-hidden="true">#</a> \u4EC0\u4E48\u662F chunk</h2><p>webpack \u4F1A\u6839\u636E\u6A21\u5757\u4F9D\u8D56\u56FE\u7684\u5185\u5BB9\u7EC4\u7EC7\u5206\u5305---chunk \u5BF9\u8C61</p><ul><li>\u540C\u4E00\u4E2A entry \u7684\u751F\u6210\u4E00\u4E2A chunk</li><li>\u5F02\u6B65\u6A21\u5757\u5355\u72EC\u6210\u4E00\u4E2A chunk</li><li>\u61D2\u52A0\u8F7D\u5355\u72EC\u6210\u4E00\u4E2A chunk</li><li><code>entry.runtime</code>\u5355\u72EC\u6210\u4E00\u4E2A chunk\uFF08nodejs \u8FD0\u884C\u65F6\u548C webpack \u8FD0\u884C\u65F6\u4EE3\u7801\uFF09</li></ul><h2 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h2><h3 id="\u6253\u5305\u6548\u7387" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u6548\u7387" aria-hidden="true">#</a> \u6253\u5305\u6548\u7387</h3><ul><li>speed-measure-webpack-plugin\uFF1A\u6253\u5370\u6BCF\u4E2A loader \u7684\u6267\u884C\u65F6\u95F4</li><li>exclude/include \u7F29\u5C0F\u8F6C\u4E49\u8303\u56F4</li><li>\u7F13\u5B58\u6280\u672F cache-loader</li><li>\u5E76\u884C\u5904\u7406\uFF1AhappyPack \u5E76\u884C\u6253\u5305\u5DE5\u5177</li><li>noparse\uFF1A\u5982\u679C\u7B2C\u4E09\u65B9\u6CA1\u6709\u63D0\u4F9B AMD/Commonjs \u89C4\u8303\u7248\u672C\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>noparse</code>\u8FD9\u4E2A\u6765\u6807\u8BC6\uFF0C\u8FD9\u6837 webpack \u5C31\u4E0D\u4F1A\u8F6C\u5316\u548C\u7F16\u8BD1\uFF0C\u4ECE\u800C\u63D0\u9AD8 webpack \u6784\u5EFA\u6027\u80FD\uFF0C\u4F8B\u5982<code>jquery</code>,<code>lodash</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">noparse</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">jquery|lodash</span><span class="token regex-delimiter">/</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u63D0\u9AD8\u9875\u9762\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u63D0\u9AD8\u9875\u9762\u6027\u80FD" aria-hidden="true">#</a> \u63D0\u9AD8\u9875\u9762\u6027\u80FD</h3><ul><li><code>\u538B\u7F29\u4EE3\u7801</code>:\u5220\u9664\u591A\u4F59\u4EE3\u7801\u6CE8\u91CA\u7B80\u5316\u4EE3\u7801\u3002\u5229\u7528<code>uglifyPlugin</code>\u548C<code>parallelUglifyPlugin</code>\u6765\u538B\u7F29 js\uFF0C\u4F7F\u7528<code>cssnano</code>\uFF08css-loader?minimize\uFF09\u538B\u7F29 css</li><li><code>CDN\u52A0\u901F</code>:\u6784\u5EFA\u8FC7\u7A0B\uFF0C\u9759\u6001\u4EE3\u7801\u4FEE\u6539\u5230 CDN \u4E0A</li><li><code>treeShaking</code>:\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C\u7684\u7247\u6BB5\u5220\u9664\u3002\u53EF\u4EE5\u5728\u542F\u52A8 webpack \u8FFD\u52A0\u53C2\u6570<code>--optimize-minimize</code></li><li><code>codeSplitting</code>:\u4EE3\u7801\u5206\u5272\uFF0C\u8FD9\u6837\u53EF\u4EE5\u7EC4\u4EF6\u5206\u5FEB\uFF0C\u5145\u5206\u5229\u7528\u6D4F\u89C8\u5668\u7F13\u5B58</li><li><code>\u4F5C\u7528\u57DF\u63D0\u5347</code>\uFF1A\u51CF\u5C11\u4E00\u4E9B\u53D8\u91CF\u58F0\u660E</li></ul><h2 id="\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> \u6267\u884C\u6D41\u7A0B</h2><ol><li>\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u548C shell \u8BED\u53E5\uFF0C\u5C06\u914D\u7F6E\u8FDB\u884C\u5408\u5E76</li><li>\u901A\u8FC7\u8FD9\u4E9B\u914D\u7F6E\u521D\u59CB\u5316\u4E00\u4E2A compiler \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u5BF9\u8C61\uFF0C\u6267\u884C compiler \u7684 run \u65B9\u6CD5\u8FDB\u884C\u6587\u4EF6\u7684\u7F16\u8BD1</li><li>\u4ECE entry \u5165\u53E3\u51FA\u53D1\uFF0C\u5BF9\u5176\u4F9D\u8D56\u7684\u6A21\u5757\u8FDB\u884C loader \u7684\u7F16\u8BD1\uFF0C\u5982\u679C\u4F9D\u8D56\u7684\u6587\u4EF6\u5B58\u5728\u4F9D\u8D56\u6587\u4EF6\uFF0C\u5C31\u9012\u5F52\u4F9D\u8D56\u7684\u6587\u4EF6</li><li>\u89E3\u6790\u4EE5\u540E\uFF0C\u4F1A\u751F\u6210\u5165\u53E3\u548C\u6A21\u5757\u7684\u5173\u7CFB\uFF0C\u5C06\u4ED6\u4EEC\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u7684\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 chunk\uFF0C\u518D\u628A\u5B83\u5408\u5E76\u6210\u4E00\u4E2A\u6587\u4EF6\u901A\u8FC7 output \u7684\u914D\u7F6E\u7ED9\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF\u4E2D</li></ol><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0Cwebpack \u4F1A\u5728\u7279\u5B9A\u7684\u6267\u884C\u65F6\u673A\u66B4\u9732\u4E00\u4E9B\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u5728\u76D1\u542C\u5230\u4ED6\u9700\u8981\u7684\u4E00\u4E9B\u4E8B\u4EF6\u540E\u6267\u884C\u76F8\u5173\u7684\u903B\u8F91\uFF0C\u53EF\u4EE5\u8C03\u7528 webpack \u7684 api \u6539\u53D8 webpack \u7684\u6253\u5305\u7ED3\u679C</p>`,22);function l(i,r){return n}var p=e(s,[["render",l]]);export{p as default};

import{_ as n,e as a}from"./app.1f7b43e3.js";const s={},t=a(`<h2 id="\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a> \u7F13\u5B58</h2><p>\u5B58\u50A8\u88AB\u7528\u5230\u7684\u6570\u636E\uFF0C\u8BA9\u6570\u636E\u8BBF\u95EE\u7684\u66F4\u5FEB</p><ol><li>\u547D\u4E2D\u7F13\u5B58\uFF1A\u5728\u7F13\u5B58\u4E2D\u62FF\u5230\u6570\u636E</li><li>\u6CA1\u6709\u547D\u4E2D/\u7A7F\u900F\uFF1A\u7F13\u5B58\u4E2D\u6CA1\u6709\u6570\u636E\uFF0C\u8FDB\u884C\u7A7F\u900F</li><li>\u547D\u4E2D\u7387\uFF1A\u547D\u4E2D\u6B21\u6570\u548C\u603B\u6B21\u6570</li><li>\u7F13\u5B58\u5927\u5C0F\uFF1A\u7F13\u5B58\u4E2D\u53EF\u4EE5\u7F13\u5B58\u591A\u5C11\u6570\u636E\uFF08\u6BCF\u4E00\u4E2A\u57DF\u4E0B\u9762\u7684\u7F13\u5B58\u6570\u636E\u5927\u5C0F\u6709\u9650\u5236\uFF09</li><li>\u6E05\u7A7A\u7B56\u7565\uFF1A\u5982\u679C\u7F13\u5B58\u7A7A\u95F4\u4E0D\u591F\u6570\u636E\uFF0C\u6E05\u7A7A\u4E00\u4E9B\u6570\u636E</li></ol><h2 id="\u4F18\u5316\u6590\u6CE2\u90A3\u5951\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316\u6590\u6CE2\u90A3\u5951\u6570\u5217" aria-hidden="true">#</a> \u4F18\u5316\u6590\u6CE2\u90A3\u5951\u6570\u5217</h2><p>\u5E38\u89C4\u7684\u6590\u6CE2\u90A3\u5951\u6570\u5217\u6570\u636E\uFF0C\u4F7F\u7528\u9012\u5F52\u5B9E\u73B0\uFF0C\u5982\u679C\u6CA1\u6709\u8FDB\u884C\u4E00\u4E9B\u7F13\u5B58\u7B56\u7565\uFF0C\u4F1A\u5341\u5206\u8017\u65F6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">memory</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> maxLength <span class="token operator">=</span> <span class="token number">10</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// {}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> hash <span class="token operator">=</span> arg<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>hash <span class="token operator">===</span> hash<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> item<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      hash<span class="token punctuation">,</span>
      value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> maxLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">mfib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">mfib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> mfib <span class="token operator">=</span> <span class="token function">memory</span><span class="token punctuation">(</span>fib<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mfib</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> Cache-Control</h2><p>\u5B9A\u4E49\u6240\u6709\u7F13\u5B58\u90FD\u8981\u9075\u5B88\u7684\u884C\u4E3A</p><table><thead><tr><th>\u503C</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>public</td><td>\u6240\u6709\u65B9\u7F13\u5B58\uFF08\u7ECF\u5386\u4E86\u591A\u4E2A\u670D\u52A1\u5668\uFF09</td></tr><tr><td>private</td><td>\u53EA\u5141\u8BB8\u5BA2\u6237\u7AEF\u7F13\u5B58</td></tr><tr><td>no-cache</td><td>\u534F\u5546\u7F13\u5B58</td></tr><tr><td>no-store</td><td>\u4E0D\u7F13\u5B58</td></tr></tbody></table><hr><p>\u5B9A\u4E49\u7F13\u5B58\u7684\u65F6\u95F4</p><table><thead><tr><th>\u503C</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>max-age</td><td>\u79D2(\u7EC8\u7AEF\u7F13\u5B58)</td></tr><tr><td>s-maxage</td><td>\u79D2(\u4EE3\u7406\u7F13\u5B58)</td></tr></tbody></table><h2 id="\u5F3A\u5236\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u7F13\u5B58" aria-hidden="true">#</a> \u5F3A\u5236\u7F13\u5B58</h2><p>\u5F3A\u5236\u4F7F\u7528\u7F13\u5B58\uFF0C\u4E0D\u53BB\u670D\u52A1\u5668\u5BF9\u6BD4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cache-Control:max-age=600
Expires:&lt;\u6700\u540E\u671F\u9650&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u534F\u5546\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u534F\u5546\u7F13\u5B58" aria-hidden="true">#</a> \u534F\u5546\u7F13\u5B58</h2><p>\u6BCF\u6B21\u8BF7\u6C42\u548C\u670D\u52A1\u7AEF\u5BF9\u6BD4\uFF0C\u7F13\u5B58\u751F\u6548\u4E0D\u4F20\u56DE body</p><h3 id="\u65B9\u6848\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E00" aria-hidden="true">#</a> \u65B9\u6848\u4E00</h3><p>\u4E24\u8005\u5BF9\u6BD4\uFF0C\u6CA1\u6709\u8D85\u8FC7\u65F6\u95F4\u5C31\u62FF\u7F13\u5B58\u7684</p><ul><li>\u670D\u52A1\u7AEF\u8FD4\u56DE Last-Modified:&lt;\u6628\u5929&gt;</li><li>\u8BF7\u6C42 If-Modified-Since:&lt;\u6628\u5929&gt;</li></ul><h3 id="\u65B9\u6848\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E8C" aria-hidden="true">#</a> \u65B9\u6848\u4E8C</h3><p>\u4E24\u8005\u5BF9\u6BD4\uFF0C\u76F8\u540C\u5C31\u7F13\u5B58</p><ul><li>\u670D\u52A1\u7AEF\u8FD4\u56DE E-Tag:1234567</li><li>\u8BF7\u6C42 If-None-Match:1234567</li></ul>`,23);function p(e,o){return t}var l=n(s,[["render",p]]);export{l as default};

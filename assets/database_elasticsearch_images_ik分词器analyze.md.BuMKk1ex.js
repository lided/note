import{_ as s,c as n,o as t,ag as p}from"./chunks/framework.DPDPlp3K.js";const r=JSON.parse('{"title":"install","description":"","frontmatter":{},"headers":[],"relativePath":"database/elasticsearch/images/ik分词器analyze.md","filePath":"database/elasticsearch/images/ik分词器analyze.md"}'),i={name:"database/elasticsearch/images/ik分词器analyze.md"};function e(l,a,o,c,u,d){return t(),n("div",null,a[0]||(a[0]=[p(`<h1 id="install" tabindex="-1">install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;install&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bin/elasticsearch-plugin install https://github.com/infinilabs/analysis-ik/releases/download/v7.17.18/elasticsearch-analysis-ik-7.17.18.zip</span></span></code></pre></div><p>ik 有俩中分词方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ik_smart 最少切分</span></span>
<span class="line"><span># @result [&quot;我&quot;,&quot;是&quot;,&quot;中国人&quot;]</span></span>
<span class="line"><span>GET /_analyze</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;analyzer&quot;: &quot;ik_smart&quot;, </span></span>
<span class="line"><span>  &quot;text&quot;: &quot;我是中国人&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ik_max_word 最细切分</span></span>
<span class="line"><span># @result [&quot;我&quot;,&quot;是&quot;,&quot;中国人&quot;,&quot;中国&quot;,&quot;国人&quot;]</span></span>
<span class="line"><span>GET /_analyze</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;analyzer&quot;: &quot;ik_max_word&quot;, </span></span>
<span class="line"><span>  &quot;text&quot;: &quot;我是中国人&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="扩展字典" tabindex="-1">扩展字典 <a class="header-anchor" href="#扩展字典" aria-label="Permalink to &quot;扩展字典&quot;">​</a></h1><p>在 config/analysis-ik/ 文件夹下新增一个my.dic文件,内容如下</p><div class="language-dic vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dic</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>是我</span></span></code></pre></div><p>在IKAnalyzer.cfg.xml文件中添加该文件</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">entry</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ext_dict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;my.dic&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">entry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>重启,执行结果如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># @result [&quot;我&quot;,&quot;是中&quot;,&quot;国人&quot;]</span></span>
<span class="line"><span>GET /_analyze</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;analyzer&quot;: &quot;ik_smart&quot;, </span></span>
<span class="line"><span>  &quot;text&quot;: &quot;我是中国人&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># @result [&quot;我&quot;,&quot;是中&quot;,&quot;中国人&quot;,&quot;中国&quot;,&quot;国人&quot;]</span></span>
<span class="line"><span>GET /_analyze</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;analyzer&quot;: &quot;ik_max_word&quot;, </span></span>
<span class="line"><span>  &quot;text&quot;: &quot;我是中国人&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11)]))}const q=s(i,[["render",e]]);export{r as __pageData,q as default};

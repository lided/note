import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"POSIX标准","description":"","frontmatter":{},"headers":[],"relativePath":"linux/regular.md","filePath":"linux/regular.md"}'),l={name:"linux/regular.md"};function i(t,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<p>正则表达式有多种标准，每种标准都有其特定的语法和功能集。这些标准反映了不同编程语言或工具对正则表达式的实现方式。</p><h1 id="posix标准" tabindex="-1">POSIX标准 <a class="header-anchor" href="#posix标准" aria-label="Permalink to &quot;POSIX标准&quot;">​</a></h1><h2 id="bre" tabindex="-1">BRE <a class="header-anchor" href="#bre" aria-label="Permalink to &quot;BRE&quot;">​</a></h2><blockquote><p>Basic Regular Expressions</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># BRE对应元字符有</span></span>
<span class="line"><span>^$，[]*</span></span></code></pre></div><h2 id="ere" tabindex="-1">ERE <a class="header-anchor" href="#ere" aria-label="Permalink to &quot;ERE&quot;">​</a></h2><blockquote><p>extended regular expression</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ERE在在BRE基础上，增加一下字符</span></span>
<span class="line"><span>(){}？+|</span></span></code></pre></div><h1 id="old" tabindex="-1">old <a class="header-anchor" href="#old" aria-label="Permalink to &quot;old&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`^\`：匹配输入字符串的开始。</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>\`$\`：匹配输入字符串的结束。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`*\`：匹配前一个元字符零次或多次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`+\`：匹配前一个元字符一次或多次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`?\`：匹配前一个元字符零次或一次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 用于分隔多个模式，表示“或”的关系。</span></span>
<span class="line"><span>eg: qb|c 表示 qb 或 c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[] 定义字符类，匹配其中任意一个字符。</span></span>
<span class="line"><span>eg: [qfc] 表示qfc三个字符随机一个</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[^] 在字符类中使用，表示不匹配其中任何一个字符。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>() 用于捕获匹配的内容，创建一个分组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\\\`：转义字符，用于取消后续字符的特殊意义，或表示特殊字符类别如 \`\\d\` 表示数字。</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>. （点号）匹配任意单个字符，除了换行符。</span></span>
<span class="line"><span>!#$%&amp;()*0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^abcdefghijklmnopqrstuvwxyz</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>\\d 匹配任意数字</span></span>
<span class="line"><span>0123456789</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\D 匹配任意除数字以外的字符</span></span>
<span class="line"><span>!&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\w 大小写字母,数字,下划线 [0-9a-zA-Z_]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\W \\w取反 [^\\w]</span></span>
<span class="line"><span> !&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[\\]^\`{|}~</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>1. \`\\w\`：匹配任意单词字符（字母、数字、下划线），相当于 \`[a-zA-Z0-9_]\`。</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>14. \`\\s\`：匹配任意空白字符（空格、制表符、换行符等）。</span></span></code></pre></div>`,11)]))}const b=a(l,[["render",i]]);export{u as __pageData,b as default};

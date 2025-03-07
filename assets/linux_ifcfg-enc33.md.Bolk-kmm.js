import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.C0zBmBgP.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/ifcfg-enc33.md","filePath":"linux/ifcfg-enc33.md"}'),t={name:"linux/ifcfg-enc33.md"};function i(l,s,o,c,u,r){return p(),a("div",null,s[0]||(s[0]=[e(`<h3 id="进入目录" tabindex="-1">进入目录 <a class="header-anchor" href="#进入目录" aria-label="Permalink to &quot;进入目录&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/network-scripts/ifcfg-ens33</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TYPE=&quot;Ethernet&quot;</span></span>
<span class="line"><span>PROXY_METHOD=&quot;none&quot;</span></span>
<span class="line"><span>BROWSER_ONLY=&quot;no&quot;</span></span>
<span class="line"><span>BOOTPROTO= &quot;static&quot; # 设置为静态</span></span>
<span class="line"><span>DEFROUTE=&quot;yes&quot;</span></span>
<span class="line"><span>IPV4_FAILURE_FATAL=&quot;no&quot;</span></span>
<span class="line"><span>IPV6INIT=&quot;yes&quot;</span></span>
<span class="line"><span>IPV6_AUTOCONF=&quot;yes&quot;</span></span>
<span class="line"><span>IPV6_DEFROUTE=&quot;yes&quot;</span></span>
<span class="line"><span>IPV6_FAILURE_FATAL=&quot;no&quot;</span></span>
<span class="line"><span>IPV6_ADDR_GEN_MODE=&quot;stable-privacy&quot;</span></span>
<span class="line"><span>NAME=&quot;ens33&quot;</span></span>
<span class="line"><span>UUID=&quot;76fce6b9-4249-4b04-86f1-c26a302d1851&quot;</span></span>
<span class="line"><span>DEVICE=&quot;ens33&quot;</span></span>
<span class="line"><span>ONBOOT=&quot;yes&quot;</span></span>
<span class="line"><span>IPADDR=192.168.217.100 #设置静态IP</span></span>
<span class="line"><span>NETMASK=255.255.255.0 #设置子网掩码</span></span>
<span class="line"><span>GATEWAY=192.168.217.2</span></span>
<span class="line"><span>DNS1=8.8.8.8</span></span>
<span class="line"><span>DNS2=144.144.144.144</span></span></code></pre></div>`,3)]))}const _=n(t,[["render",i]]);export{q as __pageData,_ as default};

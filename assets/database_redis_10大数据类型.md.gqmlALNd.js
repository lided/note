import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const r=JSON.parse('{"title":"参考","description":"","frontmatter":{},"headers":[],"relativePath":"database/redis/10大数据类型.md","filePath":"database/redis/10大数据类型.md"}'),i={name:"database/redis/10大数据类型.md"};function e(t,s,c,h,k,g){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h1><p><a href="https://redis.io/commands/" target="_blank" rel="noreferrer">官网命令</a><a href="http://www.redis.cn/commands.html" target="_blank" rel="noreferrer">中文命令</a></p><h1 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String&quot;">​</a></h1><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不存在时创建,存在时修改</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 仅当k1不存在时创建</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#仅当k1存在时修改</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置过期时间(秒|毫秒)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置过期时间/unix时间戳</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1700563342</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#二次修改保留原来超时时间状态</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keepttl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#一次设置多个 不支持设置时间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改 k过期时间(毫秒|秒)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pexpire</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">k</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#一次查询多个</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k2...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#取k1对应v下标 2 - 4(从0开始,前闭后闭)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getrange</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#k1对应v 从下标2开始 替换为msg(长度不变)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setrange</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#get length of k</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strlen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#尾部追加</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询旧的并修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span></span></code></pre></div><p>如果是数字类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 自加1</span></span>
<span class="line"><span>incr k1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#加 n</span></span>
<span class="line"><span>incrby k1 &lt;n&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 减一</span></span>
<span class="line"><span>decr k1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#减 n</span></span>
<span class="line"><span>decrby k1 &lt;n&gt;</span></span></code></pre></div><h1 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h1><p>双端链表/左头右尾</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#左端有序插入</span></span>
<span class="line"><span>lpush list1 1 2 3 4 5</span></span>
<span class="line"><span>#右端有序插入</span></span>
<span class="line"><span>rpush list1 1 2 3 4 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#从左到右遍历list1 下边 n 到 m (0 ,-1 为全部)</span></span>
<span class="line"><span>lrange list1 n m</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 左端弹出一个值</span></span>
<span class="line"><span>lpop list1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 右端弹出一个值</span></span>
<span class="line"><span>rpop list1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#获取list1中下标为index的值</span></span>
<span class="line"><span>lindex list1 &lt;index&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get size</span></span>
<span class="line"><span>llen list1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#删除list1中前n个值为val的元素(左边开始删)</span></span>
<span class="line"><span>lrem list1 &lt;n&gt; &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 保留list1中下标n到m的元素,其他删除</span></span>
<span class="line"><span>ltrim list1 &lt;n&gt; &lt;m&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#list1尾部弹出一个放进list2, 只能从前一个尾部 -&gt; 后一个头部</span></span>
<span class="line"><span>rpoplpush list1 list2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># list1下标n设为val</span></span>
<span class="line"><span>lset list1 &lt;n&gt; &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#在list1 第一个val前面插一个newval</span></span>
<span class="line"><span>#返回插入后的size</span></span>
<span class="line"><span>linsert list1 before &lt;val&gt; &lt;newval&gt;</span></span></code></pre></div><h1 id="hash" tabindex="-1">Hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;Hash&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#键为k1,值为{id:1,name:jack}</span></span>
<span class="line"><span>hset k1 id 1 name jack</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查询 k1 的id属性</span></span>
<span class="line"><span>hget k1 id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#获取k1所有值</span></span>
<span class="line"><span>hgetall k1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#删除k1 id属性</span></span>
<span class="line"><span>hdel k1 id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#get size of k1</span></span>
<span class="line"><span>hlen k1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询k1中是否有某一个属性</span></span>
<span class="line"><span># return (1|0)</span></span>
<span class="line"><span>hexists k1 &lt;filed&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get keys of h1</span></span>
<span class="line"><span>hkeys k1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get vals of h1</span></span>
<span class="line"><span>hvals k1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#must not exist then set</span></span>
<span class="line"><span>hsetnx k1 &lt;filed&gt; &lt;val&gt;</span></span></code></pre></div><p>如果hash中某个属性的值是数字类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># k1中id属性值加n</span></span>
<span class="line"><span># return 加后的值</span></span>
<span class="line"><span>hincrby k1 id &lt;n&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#加小数</span></span>
<span class="line"><span>hincrbyfloat k1 id &lt;float&gt;</span></span></code></pre></div><h1 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#set1中添加值</span></span>
<span class="line"><span>sadd set1 &lt;v1&gt; &lt;v2&gt; ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get all</span></span>
<span class="line"><span>smembers set1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># remove val</span></span>
<span class="line"><span>srem set1 &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># whether exist</span></span>
<span class="line"><span>sismember set1 &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#set1 中随机取n个数据</span></span>
<span class="line"><span>srandmember set1 &lt;n&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#随机从set1中删除n个</span></span>
<span class="line"><span>spop set1 &lt;n&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#set1中val移动到set2</span></span>
<span class="line"><span>smove set1 set2 &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#set1 - set2 </span></span>
<span class="line"><span>sdiff set1 set2 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 并集</span></span>
<span class="line"><span>sunion set1 set2 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 交集</span></span>
<span class="line"><span>sinter set1 set2 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># n个set交集的size</span></span>
<span class="line"><span># limit限制size 最大数,不写为无限制</span></span>
<span class="line"><span>sintercard &lt;n&gt; (&lt;set_key&gt;){&lt;n&gt;} (limit &lt;l&gt;)?</span></span></code></pre></div><h1 id="zset" tabindex="-1">Zset <a class="header-anchor" href="#zset" aria-label="Permalink to &quot;Zset&quot;">​</a></h1><p>有序set,每一个元素都对应一个分数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#add zset and insert</span></span>
<span class="line"><span>zadd &lt;zset_k&gt; (&lt;scope_k&gt; &lt;k&gt;)+</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 遍历下标从m -&gt; n (0 -&gt; -1 is all)</span></span>
<span class="line"><span># withscores 同时查询分数</span></span>
<span class="line"><span>zrange &lt;zset_k&gt; &lt;m&gt; &lt;n&gt; (withscores)?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#反向遍历/查询(分数从大到小)</span></span>
<span class="line"><span>zrevrange &lt;zset_k&gt; 0 -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get where score between 40 and 70</span></span>
<span class="line"><span># 将查询出的结果从offset开始查询n个(类似分页)</span></span>
<span class="line"><span>zrangebyscore &lt;zset_k&gt; 40 70 (withscores)? (limit &lt;offset&gt; &lt;n&gt;)?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查询val的分数</span></span>
<span class="line"><span>zscore &lt;zset_k&gt; &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># size</span></span>
<span class="line"><span>zcard &lt;zset_k&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get count where score between min and max</span></span>
<span class="line"><span>zcount &lt;zset_k&gt; &lt;min&gt; &lt;max&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># remove val</span></span>
<span class="line"><span>zrem &lt;zset_k&gt; &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># val的分数加n</span></span>
<span class="line"><span>zincrby &lt;zset_k&gt; &lt;n&gt; &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get index of val</span></span>
<span class="line"><span>zrank &lt;zset_k&gt; &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#从n个set中的第一个非空set中弹出count个(最小|最大)元素</span></span>
<span class="line"><span>zmpop &lt;n&gt; (&lt;zset_k&gt;){&lt;n&gt;} (min|max) count &lt;count&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 弹出分数最大的count(default 1)个</span></span>
<span class="line"><span>zpopmax &lt;zset_k&gt; &lt;count&gt;?</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 弹出分数最小的count(default 1)个</span></span>
<span class="line"><span>zpopmax &lt;zset_k&gt; &lt;count&gt;?</span></span>
<span class="line"><span></span></span>
<span class="line"><span># val 的反向下标(size - index)</span></span>
<span class="line"><span>zrevrank &lt;zset_k&gt; &lt;val&gt;</span></span></code></pre></div><h1 id="stream" tabindex="-1">Stream <a class="header-anchor" href="#stream" aria-label="Permalink to &quot;Stream&quot;">​</a></h1><p>redis的消息队列</p><h2 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 插入一条数据, (自动生成|指定id)</span></span>
<span class="line"><span># id 由时间戳-序号俩部分组成 eg 1719602008673-0</span></span>
<span class="line"><span># 一般自动生成id,因为新插入的数据id必须最大</span></span>
<span class="line"><span>xadd &lt;key&gt; (*|&lt;id&gt;) (&lt;k&gt; &lt;v&gt;)...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询id指定范围( - 第一个 ; + 最后一个)</span></span>
<span class="line"><span># count限制查询数量</span></span>
<span class="line"><span>xrange &lt;key&gt; (&lt;min&gt;|-) (&lt;max&gt;|+) (count &lt;c&gt;)?</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 反向(desc)</span></span>
<span class="line"><span>xrevrange &lt;key&gt; + -</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除</span></span>
<span class="line"><span>xdel &lt;key&gt; &lt;id&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># length</span></span>
<span class="line"><span>xlen &lt;key&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 按照不同策略裁剪流, = 表示精确裁剪(default);~ 大概裁剪(少裁),不精准,快;</span></span>
<span class="line"><span># 只有使用 ~ 大概裁剪时可以指定limit最大裁剪个数</span></span>
<span class="line"><span># maxlen 裁剪后长度为n, = 必须为n, ~可以大于n</span></span>
<span class="line"><span># minid 裁剪id小于n的元素</span></span>
<span class="line"><span>xtrim &lt;key&gt; (maxlen|minid) (=|~)? &lt;n&gt; (limit &lt;c&gt;)?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#从许多steam中查询消息(不删)</span></span>
<span class="line"><span>#block指定等待时间(毫秒) 0永久阻塞 如果没有可用消息,阻塞等待</span></span>
<span class="line"><span># 只获取从指定id开始的数据 $是指只接受从现在开始的消息</span></span>
<span class="line"><span>xread [count &lt;count&gt;]? [block &lt;b&gt;] streams &lt;key&gt;+ (&lt;id&gt;|$)</span></span></code></pre></div><h2 id="消费者" tabindex="-1">消费者 <a class="header-anchor" href="#消费者" aria-label="Permalink to &quot;消费者&quot;">​</a></h2><p>同一个消费组里的消费者不能读取同一条消息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#为qkey队列新建消费组gkey  $为只接受新消息  0为接受所有消息</span></span>
<span class="line"><span>xgroup create &lt;qkey&gt; &lt;gkey&gt; [$|0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#gkey组中的消费者consumer从qkey中读取</span></span>
<span class="line"><span>xreadgroup group &lt;gkey&gt; &lt;consumer&gt; streams &lt;qkey&gt; &gt; [count &lt;c&gt;]?</span></span></code></pre></div><h1 id="bitmap-位图" tabindex="-1">bitmap(位图) <a class="header-anchor" href="#bitmap-位图" aria-label="Permalink to &quot;bitmap(位图)&quot;">​</a></h1><p>二进制数组 (10010010101)(本质是string,可以进行string操作)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#第n位设为(1|0)</span></span>
<span class="line"><span>setbit &lt;bit_k&gt; &lt;n&gt; (1|0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  get 第n位</span></span>
<span class="line"><span>getbit &lt;bit_k&gt; &lt;n&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get length (字节)</span></span>
<span class="line"><span>strlen &lt;bit_k&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 1的数量</span></span>
<span class="line"><span>bitcount &lt;bit_k&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#k1,k2中都为1的取出到新的newk</span></span>
<span class="line"><span>bitop and &lt;newk&gt; &lt;k1&gt; &lt;k2&gt;</span></span></code></pre></div><h1 id="hyperloglog-基数统计" tabindex="-1">HyperLogLog(基数统计) <a class="header-anchor" href="#hyperloglog-基数统计" aria-label="Permalink to &quot;HyperLogLog(基数统计)&quot;">​</a></h1><p>去重数据集(有误差)</p><p>只记录个数不保存数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#添加</span></span>
<span class="line"><span>pfadd &lt;key&gt; &lt;val&gt;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#基数数量</span></span>
<span class="line"><span>pfcount &lt;key&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#将俩个基数整合</span></span>
<span class="line"><span>pfmerge &lt;newkey&gt; &lt;key1&gt; &lt;key2&gt;</span></span></code></pre></div><h1 id="geo-地理空间" tabindex="-1">GEO(地理空间) <a class="header-anchor" href="#geo-地理空间" aria-label="Permalink to &quot;GEO(地理空间)&quot;">​</a></h1><p>zset类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#添加</span></span>
<span class="line"><span>geoadd &lt;key&gt; [经度 纬度 val]...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#返回指定val经纬度</span></span>
<span class="line"><span>geopos &lt;key&gt; &lt;val&gt;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#指定val经纬度经过geohash算法后的值</span></span>
<span class="line"><span>geohash &lt;key&gt; &lt;val&gt;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#返回指定俩个位置距离</span></span>
<span class="line"><span>geodist &lt;key&gt; &lt;val1&gt; &lt;val2&gt; [m|km|ft|mi]#ft英尺 mi英里</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#返回指定经纬度n个单位半径内的位置</span></span>
<span class="line"><span>#withdist 同时返回距离 </span></span>
<span class="line"><span>#withcoord 返回每一个位置经纬度</span></span>
<span class="line"><span>#withhash 返回内部算法计算的52位值</span></span>
<span class="line"><span>#count 限制个数m</span></span>
<span class="line"><span>georadius &lt;key&gt; &lt;经&gt; &lt;纬&gt; &lt;n&gt; [m|km|ft|mi] [withdist] [withcoord] [withhash] [count &lt;m&gt;] [desc]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#同上,根据指定经纬度变为根据key中指定位置</span></span>
<span class="line"><span>georadiusbymember &lt;key&gt; &lt;val&gt; &lt;n&gt; [m|km|ft|mi] [withdist] [withcoord] [withhash] [count &lt;m&gt;] [desc]</span></span></code></pre></div><h1 id="bitfields-位域" tabindex="-1">bitfields(位域) <a class="header-anchor" href="#bitfields-位域" aria-label="Permalink to &quot;bitfields(位域)&quot;">​</a></h1><p>一般用不上</p><p><a href="https://ascii.org.cn" target="_blank" rel="noreferrer">ascii表</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#先定义一个String</span></span>
<span class="line"><span>set &lt;key&gt; &lt;val&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#返回指定key中的offset偏移量 每8位一组  i有符号  u无符号</span></span>
<span class="line"><span>bitfield &lt;key&gt; get [i|u]8 &lt;offset&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#指定key中的offset偏移量后面设置为val(二进制) 每8位一组 </span></span>
<span class="line"><span>bitfield &lt;key&gt; set i8 &lt;offset&gt; &lt;val&gt;</span></span></code></pre></div>`,39)]))}const o=n(i,[["render",e]]);export{r as __pageData,o as default};

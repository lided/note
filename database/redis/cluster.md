## 介绍

1. redis集群支持多个master
2. 自带sentinel的故障转移机制,无需使用哨兵
3. slots槽位最多16384,服务器节点最大建议1000个左右
4. 客户端要连接cluster集群不会连接其中的每一个redis服务器

## 哈希槽分区算法

在数据和节点之间加入一层,称为哈希槽slot

### 为什么是16384(2^14)?

1. 每秒钟redis都要发送ping消息心跳包,如果是2^16(65536),消息头需要slots/8b也就是8kb的大小,浪费带宽
2. 集群节点数不建议超过1000,如果太多消息体数据太多也会导致网络拥堵。对于1000个节点以内的cluster16384个槽够用了
3. 每一个节点所负责的哈希槽是通过bitmap保存的。如果槽位使用率(slot/Node)很高，即槽位太多节点太少，就会导致bitmap压缩率很低。
4. 总体而言，16384个哈希槽是在平衡分布、简便性和未来扩展性之间做出的妥协的结果。(说人话就是16384最适合redis的性能)

## 开始3主3从搭建

为所有redis节点新建一个cluster配置文件并在之前的基础上新增如下配置

```
cluster-enabled yes
cluster-config-file node-6379.conf
cluster-node-timeout 15000
```

为集群配置主从关系 
--cluster-replicas 1 中的1表示每一台主机有1个slave
后面将需要添加集群的机器加入

```
redis-cli --cluster create --cluster-replicas 1 [ip:port]+
```

查看cluster信息

```sh
redis-cli --cluster check <cluster_ip>
```

连接集群内任意一台redis查看集群节点信息

```
cluster nodes
cluster info
```

## 使用

在登录命令后加`-c` 选项告诉 `redis-cli` 在集群模式下运行。

```
redis-cli -a <pwd> -p 6379 -c
```

查看key属于在那个槽位

```
cluster keyslot <key>
```

查看某一个slot中是否有数据

```
cluster countkeysinslot
```

将slave自己和对应master交换(在slave节点上操作)

```
cluster failover
```

## 新增节点

```
# cluster_ip为集群任意一个
redis-cli -a lide --cluster add-node <new_ip> <cluster_ip>
```

查看槽位分配信息

```
redis-cli -a lide --cluster check <cluster_ip>
```

重新分配槽位

```
redis-cli -a lide --cluster reshard <cluster_ip>
```

然后按照提示输入信息
1. 要为新的node迁移多少个slot
2. 要给哪个节点迁移(id)
3. 从哪些节点迁移(all即可)

为新的master分配从节点

```
redis-cli  -a lide --cluster add-node <new_slave_ip> <new_master_ip> --cluster-slave --cluster-master-id <master_id>
```

从集群中删除某一节点(如果要删除master得先把slots移出去)

```
redis-cli -a lide --cluster del-node <cluster_IP> <del_id>
```


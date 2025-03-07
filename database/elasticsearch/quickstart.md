# \_cat

> 在路径后加 ?v 参数可以查看每一个参数的字段名称
> eg: GET /_cat/indices
> 

```
# 查询所有索引信息
GET /_cat/indices

# 主节点信息
GET /_cat/master

# 节点信息
GET /_cat/nodes

# 健康信息
GET /_cat/health

# 分片分配信息
GET /_cat/allocation

# 线程池信息
GET /_cat/thread_pool

# 获取正在进行的分片恢复操作的信息。
GET /_cat/recovery

# 获取所有索引模板的信息。
GET /_cat/templates

# 获取当前正在进行的任务。
GET /_cat/tasks

# 获取所有索引别名的信息。
GET /_cat/aliases

# 获取每个索引的段信息。
GET /_cat/segments

# 获取集群中当前挂起的任务。
GET /_cat/pending_tasks

# 获取字段数据缓存使用情况。
GET /_cat/fielddata

# 获取搜索请求缓存的使用情况。
GET /_cat/request_cache

# 获取查询缓存的使用情况。
GET /_cat/query_cache

# 获取注册的快照仓库信息。
GET /_cat/repositories

# 获取快照信息
GET /_cat/snapshots
```

# index
## C

```
PUT /<index_name>
```

## R

```
GET /<index_name>
```

## U

```
# 修改映射
PUT /index-a/_mapping
{
  "properties" : {
    "name" : {
      "type" : "text"
    }
  }
}

# 修改设置
PUT /index-a/_settings
{
  "number_of_replicas": 2
}
```

## D

```
DELETE /<index_name>
```

# doc

## C

```
# post请求时,可不提供id,随机生成
(POST|PUT) /<index_name>/_doc/<id>
{
 "name":"jack",
 "age":12
}
```

## R

```
# 详细信息
GET /<index_name>/_doc/<id>

# 文档信息
GET /<index_name>/_source/<id>

# get all
GET /<index_name>/_search
```

[根据条件查询](./query.md)

## U

```
# post 局部修改,如下只修改name属性
# put 全量修改,将指定id文档整体替换
(POST|PUT) /<index_name>/_doc/<id>
{
  "name":"jack2"
}
```


## D

```
DELETE /<index_name>/_doc/<id>
```

## PUT POST 区别

PUT请求是**幂等的**(发送n次请求和发送1次结果相同)

![](images/Pasted%20image%2020240603134121.png)

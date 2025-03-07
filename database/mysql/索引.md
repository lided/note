# 常见索引结构

![](images/Pasted%20image%2020240220211223.png)

![](images/Pasted%20image%2020240220211338.png)

## B Tree

![](images/Pasted%20image%2020240220215046.png)

## B+ Tree

![](images/Pasted%20image%2020240220215144.png)

MySQL索引数据结构对经典的B+Tree进行了优化。在原B+Tree的基础上,增加一个指向相邻叶子节点的链表指针,就形成了带有顺序指针的B+Tree,提高区间访问的性能。

![](images/Pasted%20image%2020240220215215.png)

## Hash

- 只能精确匹配,不能范围查询
- 无法排序
- 查询效率通常比B+高

![](images/Pasted%20image%2020240220214102.png)

## 为什么mysql使用B+

- 二叉树只有俩个分支,在数据量大的情况下层级过多导致效率变慢
- B+ Tree将数据单独放在叶子节点中,相比与B Tree树节点可以存放更多指针
- B+Tree在叶子节点中对所有数据进行排序,有利于排序,范围查询
- hash只能精确查询

# 索引类型

![](images/Pasted%20image%2020240220215951.png)

在InnoDB中,根据存储形式又可区分为

- **聚集索引** 索引中存放的数据为行数据,有且仅有一个
- **二级索引(辅助索引)** 索引中存放的数据为主键

聚集索引选取规则

![](images/Pasted%20image%2020240220220922.png)

# 索引语法

###### 创建索引

```sql
create [unique | fulltext]? index <index_name> on <table_name> (<col_name(n)>+);
```

- unique 唯一索引
- fulltext 全文索引
- 不写为普通索引
- 多个<col_name>用逗号隔开
- <col_name(n)>中的n是指将字段前n为作为索引,不写(n)为全部

###### 查看索引

```sql
show index from <table_name>;
```

###### 删除索引

```sql
drop index <index_name> on <table_name>;
```

# explain

在sql语句前加上explain关键字,查看当前sql执行计划(不会执行sql)

![](images/Pasted%20image%2020240312190927.png)

|      字段名      | 描述                  |
| :-----------: | ------------------- |
|      id       | 执行顺序,id越大先执行        |
|  select_type  | 查询类型                |
|     table     | 表名                  |
|  partitions   | 分区信息                |
|     type      | 访问方法                |
| possible_keys | 可能用到的index          |
|      key      | 实际用到的index          |
|    key_len    | 实际用到的index长度        |
|      ref      |                     |
|     rows      | 预估记录数               |
|   filtered    | 符合条件的记录/查询到的记录(百分比) |
|     extra     | 额外信息                |

# 索引使用注意事项

## 最左前缀法则

假设有一个联合a,b,c三个字段的联合索引 idx_a_b_c

在查询sql中,a,b,c从左到右第一个不存在的字段后面都不会被索引

eg: select * from table where a=? and c = ?;

只有a字段会被索引

## 导致索引失效

- 在索引字段上进行运算
- 字符串类型不用引号''
- 头部(左边)模糊匹配
- or 连接的俩个条件只要有一个没有索引都会失效
- mysql评估认为索引性能不如全表

## 覆盖索引&回表索引

- **覆盖索引** 需要查询的字段在索引中存在,索引完成后可直接返回
- **回表索引** 索引后还需再次查询获得其他字段

## SQL提示

在sql中指定索引

```sql
select * from <table> [ use | ignore | force ] index(<index_name>) where ...;
```

- use 建议使用该索引
- ignore 忽略不使用该索引
- force 强制使用该索引

# 索引设计原则

![](images/Pasted%20image%2020240221171555.png)

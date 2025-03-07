## 分类

### DDL(数据定义语言)

create,alter,drop,rename,truncate清空

### DML(数据操作语言)

insert,delete,update,select

### DCL(数据控制语言)

commit,rollback,savepoint,grant,revoke

## 大小写规范

在**windows**下不区分大小写

在**linux**下**数据库名,表名,表别名,变量名**区分大小写,**关键字,函数名,字段名,字段别名**不区分大小写

是因为windows文件本身不区分大小写,而liunx区分

## 注释


```
单行注释
--- 注释内容
#注释内容(mysql独有)

多行
/*  注释内容  */
```

# 性能分析

## 慢查询日志

###### 查看慢查询日志是否开启(默认关闭)

```sql
show variables like 'slow_query_log';
```

要想开启,在my.cnf中的[mysqld]下配置

```cnf
# 开启慢查询,查询语句超过2秒为慢
slow_query_log=1
long_query_time=2
```

## explain(执行计划)

在sql语句前面加上explain关键字即可查看该sql执行计划

# sql优化

## insert

- **批量插入**(推荐1000条以内)
- **手动开启事务**
- **主键顺序插入**

如果需要大批量(百万)插入数据,使用load指令

```sql
-- mysql连接时,使用--local-infile
mysql --local-infile -u root -p

--开启load功能
set global local_file = 1;

-- 执行load
load data local file '/path/filename' into <table> fields terminated by ',' line terminated by '\n';
```

## 主键

- 满足要求的情况下尽量减少主键长度

## order by

- order by 后的字段尽量为索引,并且遵循最左前缀法则
- 有多个字段时,多个字段排序方式应一致
- 也可以在创建索引时指定索引排序顺序
![](images/Pasted%20image%2020240222131756.png) 

## group by

- group by 后的字段尽量为索引,并且遵循最左前缀法则

## limit

mysql在limit查询时会将前面所有数据查出,然后去掉前面.所以在大数据量下性能极低

![](images/Pasted%20image%2020240222133301.png)

## count

count(\*) > count(1) > count(primary key) > count(field)

## update

innodb 行锁是针对索引,如果update语句where条件没有索引会对该表上锁
- where条件字段应该为索引
# 主从复制

## 原理

![](images/Pasted%20image%2020240224163936.png)

## start

### 主库配置

```
#mysql服务id,集群中唯一即可,1~2^32-1
server-id=1
#是否只读
read-only=0
#忽略的数据， 指不需要同步的数据库
#binlog-ignore-db=mysql
#指定同步的数据库
#binlog-do-db=db01
```

创建远程连接用户并赋予主从复制权限

```
create user 'slave' identified by 'CYslave@123.';
```

```
grant replication slave on *.* to 'slave';
```

查看二进制日志坐标位置

```
show master status;
```
![](images/Pasted%20image%2020240224171031.png)

### 从库配置

```
server-id=2
read-only=1
```

登录从库,执行

```
change replication source to source_host='192.168.5.111',source_user='slave',source_password='CYslave@123.',source_log_file='<binlog.000003>',source_log_pos=693;
```

开启主从复制

```
start replica;
```

查看主从状态

```
show replica status;
```

## 问题

> Replica_IO_Running: connecton

1. 检查slave用户能否正常使用
2. 检查my.cnf配置,server-id不能重复
3. 检查/var/lib/mysql/auto.cnf中的UUID不能重复

# mycat2


# 用户

mysql中用户表主键有俩个user和host,在语句中对用户操作时,格式如下

```sql
'user'@'host'

-- user 用户名称
-- host 允许连接方式 有localhost和%俩个
```

也可以不写host默认host

```sql
'user'
```
### 新建用户

```sql
create user 'user'@'host' identified by 'user_password';
```

### 删除用户

```sql
drop user 'user'@'host';
```

也可以删除多个,用逗号隔开

```sql
drop user 'user'@'host'[,'user'@'host']+;
```

### 修改密码

```sql
alter user user() identified by 'new_password';

-- user() 获取当前用户的函数
```

也可以指定用户修改(修改他人需要权限)

```sql
alter user 'user'%'host' identified by 'new_password';
```

也可以通过delete,update,insert语句操作用户表(不推荐),并且需要刷新

```sql
flush privileges;
```

### 密码过期策略

#### 全局参数

mysql中有一个**default_password_lifetime**参数,表示全局密码过期时间,超过此时间强制过期(默认0,永不过期)

```sql
set persist default_password_lifetime = 180;

-- 设置为180天
```

也可以在my.cnf中指定

```cnf
[mysqld]
default_password_lifetime = 180
```

#### 单独操作

root用户可以手动设置某用户密码过期时间

```sql
alter user 'user'%'host' password expire[interval 90 day|never|default];

-- 通过interval指定时间
-- never 从不过期
-- default 使用全局参数
```

也可以设置某用户立马过期

```sql
alter user 'user'%'host' password expire;
```

设置后,该用户可以正常登录,但是不能sql操作.只能重新设置密码

## 权限

查看有哪些权限

```sql
show privileges;
```

### 授权

```sql
grant 权限1[,权限2]* on database.table to 'user'@'host' [identified by 'new_password']?;

-- 多个权限之间用逗号隔开 all指定所有权限
-- database 指定数据库 *指定所有数据库
-- table  指定表 *指定数据库下所有表
-- 如指定密码可以同时创建用户
```

### 查看权限

```sql
show grants [for 'user'@'host']?;

-- 查看指定用户权限,不指定为当前用户
```

### 收回权限

```sql
revoke 权限1[,权限2]* on database.table from 'user'@'host';
```
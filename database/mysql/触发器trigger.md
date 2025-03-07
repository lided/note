# 基本语法

###### 创建触发器

```sql
create trigger <trigger_name> [ before | after ] [ insert | update | delete ] on <table_name> for each row
begin
--sql
end;
```

-  before | after 在sql执行之前/后触发
- insert | update | delete 指定需要触发的操作
- 在语句中有俩个参数old,new为旧行,新行

###### 查看所有触发器

```sql
show triggers;
```

###### 删除触发器

```sql
drop trigger <trigger_name>;
```


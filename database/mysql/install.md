## 卸载旧版本

```sh
yum -y remove $(yum list installed | grep mysql)
```

```
find /var -name "mysql*" | xargs rm -rf
```
## 安装

[mysql官方下载链接](https://dev.mysql.com/downloads/)

找到对应rpm包

```sh
wget https://dev.mysql.com/get/mysql80-community-release-el7-11.noarch.rpm
```

给yum添加mysql源(模糊查询确保路径下无其他版本)

```sh
sudo yum install -y mysql80-community-release-*.rpm
```

安装mysqlserver

```sh
sudo yum -y install mysql-community-server
```

## 启动

```sh
sudo systemctl start mysqld.service && sudo systemctl enable mysqld.service
```

查看密码

```sh
grep "password" /var/log/mysqld.log
```
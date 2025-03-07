## 介绍

[redis作者个人博客](HTTP://antirez.com)

## 安装

安装gcc
```sh
yum -y install gcc-c++
```

将tar移到/opt下
```sh
tar -zxvf redis-*.tar.gz
```

cd进入redis文件夹进行安装

```sh
make && make install
```

显示 It's a good idea to run 'make test'  安装成功
安装默认路径/usr/local/bin

## 修改配置

```
daemonize yes #后台守护进程
protected-mode no #保护模式  允许别人连接
#bind 127.0.0.1 #将bind注释
requirepass xxxx #设置密码,可以不设置
```

## 启动

在/usr/local/bin目录下

```sh
# 第二个参数为配置文件位置
redis-server /root/redis/redis.conf
```

查看是否成功

```sh
ps -ef|grep redis
```

## 客户端登录

```sh
redis-cli -a [password] -p 6379
# 输入ping 命令  出现 PONG 则成功
quit  #退出客户端 不关闭服务
shutdown # 关闭服务
```

关闭服务

```sh
redis-cli -a [password] shutdown
#指定端口关闭
redis-cli -p 6379  -a [password] shutdown
```

## 卸载

```sh
rm -rf /usr/local/bin/redis-*
```
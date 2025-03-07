systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。

> 通用格式

```sh
sudo systemctl <subcommand> <service_name>
```

subcommand:

- start 启动
- stop 停止
- restart 重启
- status 查看运行状态
- enable 开机启动
- disable 关闭开机启动
- is-enabled 查看开机启动状态


```sh
查看已启动的服务列表：systemctl list-unit-files|grep enabled
查看启动失败的服务列表：systemctl --failed
```
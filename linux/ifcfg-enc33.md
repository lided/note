
### 进入目录

```sh
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```



```
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO= "static" # 设置为静态
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="76fce6b9-4249-4b04-86f1-c26a302d1851"
DEVICE="ens33"
ONBOOT="yes"
IPADDR=192.168.217.100 #设置静态IP
NETMASK=255.255.255.0 #设置子网掩码
GATEWAY=192.168.217.2
DNS1=8.8.8.8
DNS2=144.144.144.144

```
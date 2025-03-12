df 是一个用来查看当前系统下磁盘挂载以及使用情况

```sh
df [option]... [file]...
```

- df会展示所有**file**所属的挂载信息
- 如果不提供**file**参数,将会展示所有已挂载的文件系统
![](images/Pasted%20image%2020250312200823.png)

***options***

- -h,--human-readable # 以人类可读方式展示(1G=1024M)
- -H,--si # 同理,单位不同(1G=1000M)
![](images/Pasted%20image%2020250312201056.png)

- -a #  还显示虚拟,重复,不可访问的文件系统
- -l,--local # 只显示本地文件系统(不显示nfs等远程文件系统)

- -B,--block-size # 修改block快大小(默认1k) , 同样可以提供俩种单位:
	- 1024 单位为K,M,G,T,P,E,Z,Y,R,Q
	- 1000 单位为 KB,MB...
- -k # 等于**-B 1k**
![](images/Pasted%20image%2020250312203046.png)
> block-size 默认值会受到环境变量DF_BLOCK_SIZE,BLOCK_SIZE,BLOCKSIZE影响

- -i,--inodes # 显示inodes数量而不是blocks数量

- -T,--print-type # 显示对应文件系统类型
- -x,--exclude-type # 不显示的文件系统类型
k- -t,--type # 只显示的文件系统类型
- -x,--exclude-type # 不显示的文件系统类型

- --sync # 在执行之前强制调用**sync**命令将内存中的缓存数据写入磁盘
- --no-sync # 默认行为,性能略高

- --output # 自定义输出列,下面是所有支持字段名
![](images/Pasted%20image%2020250312210449.png)

- -P,--protability # 以POSIX格式输出

- --total # 总计行
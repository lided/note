
```Dockerfile
 #基于哪个镜像
FROM centos:7
 #构建者,非必须
MAINTAINER yourname youremail
# build时的环境变量,可以在其他命令中使用
ENV TEST_PATH /etc/xxx
# 需要运行的命令,在build时运行
RUN yum install xxx #
# 容器默认进入目录
WORKDIR /root
# 指定该镜像以什么样的用户去执行，如果不指定，默认是root
USER root
# 容器数据卷
VOLUME /xxx/xxx
# 将文件目录从主机复制到容器中。不处理URL、tar文件,可以利用缓存
COPY <src> <dest>
# 类似COPY，且会自动处理URL和解压tar压缩包。
# 如果不需要`ADD`的附加功能，推荐使用`COPY`来进行文件复制
ADD [from] [to]
# 容器启动后执行,且只会执行最后一条
CMD echo "this is a message"
CMD ["echo","this is a message"]

```


### ENTRYPOINT
用来指定一个容器启动时要运行的命令。

类似于`CMD`命令，但是`ENTRYPOINT`不会被`docker run`后面的命令覆盖，这些命令参数会被当做参数送给`ENTRYPOINT`指令指定的程序。

`ENTRYPOINT`可以和`CMD`一起用，一般是可变参数才会使用`CMD`，这里的`CMD`等于是在给`ENTRYPOINT`传参。

当指定了`ENTRYPOINT`后，`CMD`的含义就发生了变化，不再是直接运行期命令，而是将`CMD`的内容作为参数传递给`ENTRYPOINT`指令，它们两个组合会变成 `<ENTRYPOINT> "<CMD>"`

```Dockerfile
ENTRYPOINT java -jar app.jar
```

### ENTRYPOINT配合CMD

```Dockerfile
#只能通过列表方式
ENTRYPOINT ["java","-jar","app.jar"]
CMD ["--spring.profiles.active=dev"]
```

此文件运行会执行dev环境,如需修改环境可在运行时如下:

```sh
docker run ..... image:tag --spring.profiles.active=prod
```

### 虚悬镜像

###### 列出所有

```sh
docker image ls -f dangling=true
```

###### 删除

```sh
docker image prune
```
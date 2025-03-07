# registry私有库

### 拉取registry镜像

```shell
docker pull registry
```

```shell
docker run -itd -v <your_url>:/var/lib/registry --name registry --restart=always  -p 5000:5000 registry
```

并在 /etc/docker/daemon.json中加入以下配置

```json
{
  "registry-mirrors":["https://v49t3g9l.mirror.aliyuncs.com","https://registry.docker-cn.com"],
  "insecure-registries": ["192.168.217.1:5000"]
}
```


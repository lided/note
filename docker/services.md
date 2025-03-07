## MySQL

```sh
docker run -p 3306:3306 -d --name mysql -e MYSQL_ROOT_PASSWORD=lide -v/etc/mysql:/etc/mysql -v/var/lib/mysql:/var/lib/mysql mysql:8
```

## portainer

```sh
sudo docker rm -f portainer && sudo docker run -d --network=host --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce
```

## jdk8

Dockerfile

```
FROM openjdk:8-alpine
WORKDIR /root
ENTRYPOINT ["java","-jar","app.jar"]
CMD ["--spring.profiles.active=prod"]
```


## nginx

```
docker run -d --name=nginx --network=host -v  /root/nginx/conf.d:/etc/nginx/conf.d -v /root/nginx/html:/usr/share/nginx/html --restart=always nginx
```

## rabbitmq
```
docker run -d -p5672:5672 -p15672:15672 \
-e RABBITMQ_DEFAULT_USER=root \
-e RABBITMQ_DEFAULT_PASS=lide \
--name=rabbitmq rabbitmq:management
```

## redis

[docker-redis](../database/redis/docker-redis.md)


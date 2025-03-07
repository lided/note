```sh
docker run -d \
    -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" \
    -e "discovery.type=single-node" \
    -v ~/es/data:/usr/share/elasticsearch/data \
    -v /es/plugins:/usr/share/elasticsearch/plugins \
    --privileged \
    -p 9200:9200 \
    -p 9300:9300 \
elasticsearch:7.17.18
```

```yml
version: '3'
services:
  es:
    image: elasticsearch:${version}
    container_name: elasticsearch
    ports:
      - 9200:9200
      - 9300:9300
    volumes:
      - ./data:/usr/share/elasticsearch/data
      - ./plugins:/usr/share/elasticsearch/plugins
    environment:
	  ES_JAVA_OPTS: '-Xms256m -Xmx256m'
      discovery.type: single-node
  kibana:
    image: kibana:${version}
    ports:
      - 5601:5601
    environment:
      ELASTICSEARCH_HOSTS: http://es:9200
```

https://github.com/infinilabs/analysis-ik/releases/download/v7.17.18/elasticsearch-analysis-ik-7.17.18.zip
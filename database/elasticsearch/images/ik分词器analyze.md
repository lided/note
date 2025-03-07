# install

```
bin/elasticsearch-plugin install https://github.com/infinilabs/analysis-ik/releases/download/v7.17.18/elasticsearch-analysis-ik-7.17.18.zip
```

ik 有俩中分词方式

```
# ik_smart 最少切分
# @result ["我","是","中国人"]
GET /_analyze
{
  "analyzer": "ik_smart", 
  "text": "我是中国人"
}

# ik_max_word 最细切分
# @result ["我","是","中国人","中国","国人"]
GET /_analyze
{
  "analyzer": "ik_max_word", 
  "text": "我是中国人"
}
```

# 扩展字典

在 config/analysis-ik/ 文件夹下新增一个my.dic文件,内容如下

```dic
是我
```

在IKAnalyzer.cfg.xml文件中添加该文件
```xml
<entry key="ext_dict">my.dic</entry>
```

重启,执行结果如下:

```
# @result ["我","是中","国人"]
GET /_analyze
{
  "analyzer": "ik_smart", 
  "text": "我是中国人"
}

# @result ["我","是中","中国人","中国","国人"]
GET /_analyze
{
  "analyzer": "ik_max_word", 
  "text": "我是中国人"
}
```
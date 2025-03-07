# 基本结构

```json
//GET /index1/_search
{
  "query":{
	// 查询条件
    "match_all": {}
  },
  // 分页
  "from": 1,
  "size": 5,
  // 指定字段
  "_source": ["age","name"],
  // 排序
  "sort": [
    {
      "age": {
        "order": "desc"
      }
    }
  ]
}
```

## query

```json
{
	"query":{
	}
}
```
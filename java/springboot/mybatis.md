# 导入依赖

## mybatis

[版本对应关系](https://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)

## plus

[官方文档依赖](https://baomidou.com/getting-started/install)

# 配置

```java
@Configuration
@MapperScan("scan.your.mapper.package")
public class MybatisPlusConfig {

    /**
     * 添加分页插件
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL)); // 如果配置多个插件, 切记分页最后添加
        // 如果有多数据源可以不配具体类型, 否则都建议配上具体的 DbType
        return interceptor;
    }
}

```

[分页插件](https://baomidou.com/plugins/pagination/#%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95)

# 问题

###### 雪花算法导致前端数据精度丢失问题

雪花算法生成数字大于js最大范围,所以在后端json格式化时将Long格式转成String

```java
@Configuration
public class JacksonConfig {
    @Bean
    public Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder() {
        return new Jackson2ObjectMapperBuilder()
                .serializerByType(Long.class, ToStringSerializer.instance)
                .simpleDateFormat("yyyy-MM-dd HH:mm:ss")
                .timeZone("GMT+8");
    }
}
```

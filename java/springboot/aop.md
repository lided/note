# 1 导入依赖

```yml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

# 2 声明切面类

```java
@Aspect
@Component
public class AopService {
    @Around("execution(* org.example.bean.ServiceA.*(..))")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("AopService.around");
        return joinPoint.proceed();
    }
}
```

# 3 
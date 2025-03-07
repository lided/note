```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> ex(Exception e) {
        return ResponseEntity.status(400).body(e.getMessage());
    }
}

```

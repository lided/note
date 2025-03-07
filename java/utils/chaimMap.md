```
public class ChaimMap<K, V> extends HashMap<K, V> {

    public ChaimMap<K, V> set(K k, V v) {
        put(k, v);
        return this;
    }
}
```
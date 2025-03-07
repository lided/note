# path rename (src -> @)

```sh
npm i path
```

>  vite.config.ts

```ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
```

> tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": { "@/*": ["src/*"] }
}
```
# 安装

```sh
npm i vite-plugin-svg-icons -D
```

# 配置

```ts
// vite.config.ts
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/")],//icon路径
      symbolId: "icon-[dir]-[name]",
    }),
  ],
});
```

```ts
// main.ts
import 'virtual:svg-icons-register'
```

# 封装组件

> SvgIcon.vue

```vue
<template>
    <svg :style="{ width, height }">
        <use :href="'#icon-' + name" :fill="color"></use>
    </svg>
</template>

<script lang="ts" setup>
defineProps({
    name: { type: String },
    color: { type: String },
    width: { type: String },
    height: { type: String }
})
</script>
```

调用组件

```vue
import SvgIcon from '@/assets/SvgIcon.vue';

<template>
    <SvgIcon name="user" color="red" height="100px"></SvgIcon>
</template>
```

也可定义为全局组件

> main.ts

```ts
import SvgIcon from "@/assets/SvgIcon.vue";
app.component("SvgIcon", SvgIcon);
```
## 项目导入

```sh
npm i vue-router
```

> main.ts

```ts
import router from '@/router'
app.use(router)
```

## router配置

```ts
import { createRouter , createWebHistory } from 'vue-router'
// lazy loading
const UserDetails = () => import('path/to/UserDetails.vue')
 const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: xxx },
        { path: '/', component: () => import('path/to/UserDetails.vue') },
    ]
})
export default router
```

# 路由守卫

```ts
router.beforeEach((to, from) => {
    console.log(from.fullPath + "before" + to.fullPath);
  return true;
});
router.afterEach((to, from) => {
  console.log(from.fullPath + "after" + to.fullPath);
});
``` 
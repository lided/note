## create

```sh
npm create vite -- --template vue-ts
```

## vue3

```
<script setup lang="ts">

</script>

<template>
  
</template>

<style scoped>
</style>

```

## pinia

```
import { defineStore } from 'pinia'
export default defineStore('id', {
    state: () => ({
    }),
    getters: {
    },
    actions: {
    },
})
```

```
import {createPinia} from 'pinia'
app.use(createPinia())
```
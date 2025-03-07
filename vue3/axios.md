# npm导入

```sh
npm i axios
```

# 封装axios

```ts
import axios from "axios";

export const request = axios.create({
    baseURL: "http://127.0.0.1:4523/m1/4712835-4365060-default/api",
});
request.interceptors.request.use((config) => {
    return config;
});
request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
```
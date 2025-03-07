[ps破解链接](https://www.123pan.com/s/rha9-JYi63.html%20%20) 提取码：wjA1


```
server {
    listen 80;
    server_name your-domain.com;  # 替换为域名或IP
    charset utf-8;  # 支持中文文件名

    # 文件存储根目录
    root /data/files;

    # 强制所有文件类型下载
    location / {
        # 关键配置：覆盖默认MIME类型，强制浏览器下载
        default_type application/octet-stream;
        add_header Content-Disposition "attachment; filename=$uri";  # 自动携带原文件名

        # 启用目录列表（可选）
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
    }
}
```
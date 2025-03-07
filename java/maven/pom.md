# version

# dependency

## scope

- **compile** (default)在编译和运行是生效
- **runtime** 仅在运行时生效
- **import** 只适用于 \<dependencyManagement> 部分中的依赖项,用于导入由其他 POM 文件中的 \<dependencyManagement> 部分定义的依赖项。
- **provided** 在编译和测试时可用，但在部署运行时由环境提供的依赖项
- **test** 仅在测试代码中生效
- other 基本不用


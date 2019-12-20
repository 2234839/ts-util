# ts_util

一个用 ts 写的工具集，目前主要功能有

1. 提供各种其他语言类型的 type，如 Long byte 之类的。主要是为了对后端返回的数据提供更明确的提醒。[ts-type](./ts-type)

## 使用方法

### git 子模块

通过 git 子模块的方式使用 [Git-工具-子模块](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)

```bash
# 第一次引入
git submodule add git@github.com:2234839/ts-util.git ${你要将这个包放在哪,例如: ./src/ts-util }

# 下载的代码中含有本模块
git submodule update
```

### npm

[@llej/js_util](https://www.npmjs.com/package/@llej/js_util)

和一般的 npm 模块一样的安装使用即可。

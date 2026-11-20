# The World in One Day — Friday 20 November 2026

2026 年 11 月 20 日世界新闻头版图，make.fun 新闻图 2026-11-20 参赛作品。

## 运行方法

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## 说明

程序把仓库里自带的 `entry.png` 复制到输出目录。输出目录由环境变量
`MAKEFUN_OUTPUT_DIR` 指定，默认是 `/output`。复制完成后按字节大小核对一次，
并把复制的字节数打印到 stderr。

## LICENSE

MIT

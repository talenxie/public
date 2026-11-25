# 好佳学长（Haojia Studio）静态页面仓库

用于托管「好佳学长」官网展示页及各项目（小游戏、效率工具、微信小程序等）的静态隐私政策与介绍页。

## 目录结构

```text
.
├── .nojekyll            # 禁用 Jekyll，确保静态文件原样发布
├── index.html           # 官网首页（填入各平台“厂商网址”）
├── assets/
│   └── style.css        # 官网样式文件
└── demo-game/
    └── privacy.html     # 单项目隐私政策页模板（样式内联，单文件独立）
```

## 新增项目流程

1. 在根目录新建一个英文文件夹，例如 `my-tool/`。
2. 复制 `demo-game/privacy.html` 到 `my-tool/privacy.html`，修改标题、项目名和联系邮箱。
3. 在 `index.html` 的「产品列表与隐私政策」区域增加一张卡片并链接到 `./my-tool/privacy.html`。
4. 推送到 GitHub 并在仓库 **Settings → Pages** 中开启 GitHub Pages（选择 `main` 分支根目录）。

<div align="center">
  <img src="./assets/logo.png" alt="好佳学长 Logo" width="96" />
  <h1>好佳学长 · Haojia Studio</h1>
  <p>用轻盈的设计，做有趣又好用的数字产品</p>
  <p>
    <a href="https://talenxie.github.io/public/index.html">官网首页</a>
    &nbsp;·&nbsp;
    <a href="https://talenxie.github.io/public/loveStory/index.html">《总裁恋爱日常》宣传页</a>
    &nbsp;·&nbsp;
    <a href="mailto:596998764@qq.com">反馈邮箱：596998764@qq.com</a>
  </p>
</div>

---

本仓库用于托管 **好佳学长（Haojia Studio）** 个人开发官网首页、各产品宣传页及隐私政策页面，通过 GitHub Pages 自动部署发布。

## 产品方向与作品

| 模块 | 状态 | 简介 |
| --- | --- | --- |
| 🎮 **小游戏** | 已收录 | 聚焦剧情互动与轻量趣味体验；代表作 [**《总裁恋爱日常》**](https://talenxie.github.io/public/loveStory/index.html)（三消闯关 + 20 幕有声剧情 + 24 件可升级礼物与多结局） |
| ⚡ **效率工具** | 筹备中 | 日常助手与免安装 Web 在线工具集，聚焦高频小痛点 |
| 💬 **微信小程序 & 公众号** | 筹备中 | 依托微信生态的即点即用轻量服务与内容交互体验 |

## 目录结构

```text
.
├── .nojekyll                      # 禁用 Jekyll，确保静态资源原样发布
├── index.html                     # 官网首页（首屏展示、三栏产品列表、联系方式）
├── README.md                      # 仓库说明文档
├── assets/
│   ├── logo.png                   # 品牌 Logo
│   ├── style.css                  # 官网与宣传页通用样式（三栏网格、轮播卡片、响应式布局）
│   └── main.js                    # 首页模块内图文轮播交互脚本
└── loveStory/                     # 《总裁恋爱日常》作品目录（新增项目可直接参考）
    ├── index.html                 # 作品宣传页（宣传图、核心玩法介绍、隐私政策入口）
    ├── promo.jpg                  # 作品宣传图
    └── privacy-policy.html        # 《总裁恋爱日常》隐私政策页
```

## 新增作品与维护规范

1. **新增作品页面**：在根目录新建英文目录（如 `my-tool/`），直接参考 `loveStory/` 的结构放置宣传页 `index.html`、宣传图及 `privacy-policy.html`。
2. **更新首页入口**：在 `index.html` 对应分类卡片中新增或更新条目（例如在小游戏 `.mini-carousel-track` 中新增 `.mini-slide` 卡片与对应 `.dot`）。
3. **递增资源版本号**：GitHub Pages 会缓存静态资源；每次修改页面或 `assets/style.css`、`assets/main.js`、图片后，需同步递增引用链接中的版本号参数（例如 `?v=11` → `?v=12`）。
4. **自动部署**：推送至 `main` 分支后，GitHub Actions（`pages build and deployment`）会自动构建并发布到 GitHub Pages。

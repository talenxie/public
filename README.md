# 好佳学长（Haojia Studio）官网与作品展示仓库

用于托管「好佳学长（Haojia Studio）」个人开发官网首页、各产品宣传页及隐私政策页面，通过 GitHub Pages 自动部署发布。

- **线上访问地址**：<https://talenxie.github.io/public/index.html>
- **反馈与商务联系**：<596998764@qq.com>

---

## 目录结构

```text
.
├── .nojekyll                      # 禁用 Jekyll，确保静态资源原样发布
├── index.html                     # 官网首页（首屏展示、三大模块产品列表、联系方式）
├── README.md                      # 仓库说明文档
├── assets/
│   ├── logo.png                   # 品牌 Logo
│   ├── style.css                  # 官网与宣传页通用样式（三栏网格、轮播卡片、响应式布局）
│   └── main.js                    # 首页模块内图文轮播交互脚本
├── loveStory/                     # 《总裁恋爱日常》作品目录
│   ├── index.html                 # 作品宣传页（宣传图、核心玩法介绍、隐私政策入口）
│   ├── promo.jpg                  # 作品宣传图
│   └── privacy-policy.html        # 《总裁恋爱日常》隐私政策页
└── demo-game/
    └── privacy.html               # 单项目隐私政策页模板（样式内联，可独立复用）
```

---

## 当前展示模块与作品

首页「产品列表」采用三栏卡片布局，覆盖以下三个方向：

1. **🎮 小游戏**：内置作品图文轮播卡片，支持左右切换与自动轮播。
   - **《总裁恋爱日常》**（`./loveStory/index.html`）：融合三消闯关与都市职场恋爱的互动休闲游戏，20 幕有声剧情与 24 件可升级礼物、多结局分支。
2. **⚡ 效率工具**（筹备中）：日常助手与免安装 Web 在线工具集。
3. **💬 微信小程序 & 公众号**（筹备中）：即点即用小程序与公众号轻量服务。

---

## 新增作品与维护规范

1. **新增作品页面**
   - 在根目录新建英文目录（例如 `my-tool/`），放置作品宣传页 `index.html`、宣传图及隐私政策页（可参考 `demo-game/privacy.html` 或 `loveStory/`）。
2. **更新首页入口**
   - 在 `index.html` 对应分类卡片中新增或更新作品条目（如在小游戏 `.mini-carousel-track` 中新增 `.mini-slide` 卡片与对应 `.dot`）。
3. **静态资源版本控制（重要）**
   - GitHub Pages 会缓存静态资源；每次修改页面或 `assets/style.css`、`assets/main.js`、图片后，需同步递增引用链接中的版本号参数（例如 `?v=11` → `?v=12`），确保访客刷新即可加载最新版本。
4. **发布部署**
   - 推送至 `main` 分支后，GitHub Actions（`pages build and deployment`）会自动构建并部署到 GitHub Pages。

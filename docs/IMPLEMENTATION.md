# OhMySkills 实施计划

> 详细的开发任务分解和时间安排

---

## 项目信息

| 项目 | 信息 |
|------|------|
| 名称 | OhMySkills |
| 类型 | 静态文档网站 |
| 框架 | VitePress + Tailwind CSS |
| 部署 | GitHub Pages |
| 仓库 | /Users/chenkun/Documents/workspace/OhMySkills |

---

## Phase 1: 项目初始化 (预计 2-3 小时)

### 1.1 初始化 VitePress 项目

```bash
# 任务清单
- [ ] 初始化 npm 项目
- [ ] 安装 VitePress
- [ ] 创建基础目录结构
- [ ] 配置 TypeScript
```

**命令**:
```bash
cd /Users/chenkun/Documents/workspace/OhMySkills
npm init -y
npm install -D vitepress vue
mkdir -p docs/.vitepress/config
mkdir -p docs/.vitepress/theme/components
mkdir -p docs/.vitepress/theme/layouts
mkdir -p docs/zh/guide docs/zh/skills docs/zh/categories
mkdir -p docs/en/guide docs/en/skills docs/en/categories
mkdir -p docs/public
```

### 1.2 配置 Tailwind CSS

```bash
# 任务清单
- [ ] 安装 Tailwind CSS 及依赖
- [ ] 创建 tailwind.config.js
- [ ] 创建 postcss.config.js
- [ ] 配置主题样式文件
```

**命令**:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 1.3 配置多语言

```bash
# 任务清单
- [ ] 创建中文配置 (zh.ts)
- [ ] 创建英文配置 (en.ts)
- [ ] 创建主配置文件 (index.ts)
- [ ] 配置语言切换
```

### 1.4 配置 GitHub Pages 部署

```bash
# 任务清单
- [ ] 创建 .github/workflows/deploy.yml
- [ ] 配置 base URL
- [ ] 测试构建
```

---

## Phase 2: 主题开发 (预计 4-6 小时)

### 2.1 全局样式

```bash
# 任务清单
- [ ] 创建 CSS 变量 (颜色、字体、间距)
- [ ] 配置暗色模式
- [ ] 覆盖 VitePress 默认样式
- [ ] 添加自定义字体
```

**文件**: `docs/.vitepress/theme/style.css`

### 2.2 自定义组件

```bash
# 任务清单
- [ ] SkillCard.vue - 技能卡片组件
- [ ] CategoryBadge.vue - 分类标签组件
- [ ] CategoryGrid.vue - 分类网格组件
- [ ] StatsCard.vue - 统计卡片组件
- [ ] LanguageSwitch.vue - 语言切换组件
- [ ] DownloadButton.vue - 下载按钮组件
- [ ] BatchDownload.vue - 批量下载组件
- [ ] CopyCommand.vue - 复制安装命令组件
- [ ] PlatformSelector.vue - 平台选择器组件
- [ ] DownloadProgress.vue - 下载进度弹窗
```

**文件位置**: `docs/.vitepress/theme/components/`

### 2.3 Composables (组合式函数)

```bash
# 任务清单
- [ ] useSkillDownload.ts - 下载逻辑封装
- [ ] useClipboard.ts - 剪贴板操作
- [ ] useBatchSelect.ts - 批量选择逻辑
```

**文件位置**: `docs/.vitepress/theme/composables/`

### 2.4 首页布局

```bash
# 任务清单
- [ ] Hero 区域
- [ ] 统计数据区域
- [ ] 热门 Skills 展示
- [ ] 分类导航区域
- [ ] Footer
```

**文件**: `docs/zh/index.md`, `docs/en/index.md`

---

## Phase 3: 内容编写 (预计 6-8 小时)

### 3.1 指南文档

| 文档 | 中文路径 | 英文路径 | 预计时间 |
|------|----------|----------|----------|
| 什么是 Agent Skills | /zh/guide/what-is-agent-skills.md | /en/guide/what-is-agent-skills.md | 1h |
| 快速开始 | /zh/guide/getting-started.md | /en/guide/getting-started.md | 1h |
| 安装 Skills | /zh/guide/installation.md | /en/guide/installation.md | 1h |
| 创建 Skills | /zh/guide/creating-skills.md | /en/guide/creating-skills.md | 1.5h |
| SKILL.md 规范 | /zh/guide/skill-md-spec.md | /en/guide/skill-md-spec.md | 1.5h |

### 3.2 FAQ 页面

```bash
# 任务清单
- [ ] 整理 skillsmp.com FAQ 内容
- [ ] 翻译并润色中文版本
- [ ] 创建 FAQ 页面
```

**文件**: `docs/zh/faq.md`, `docs/en/faq.md`

### 3.3 分类页面

| 分类 | 中文名 | 文件名 |
|------|--------|--------|
| tools | 工具 | tools.md |
| development | 开发 | development.md |
| data-ai | 数据与AI | data-ai.md |
| business | 商业 | business.md |
| devops | DevOps | devops.md |
| testing-security | 测试与安全 | testing-security.md |
| documentation | 文档 | documentation.md |
| content-media | 内容与媒体 | content-media.md |

---

## Phase 4: Skills 数据 (预计 4-5 小时)

### 4.1 数据获取脚本

```bash
# 任务清单
- [ ] 创建 scripts/fetch-skills.ts
- [ ] 从 skillsmp.com 获取 Top 100 数据
- [ ] 解析并存储为 JSON
- [ ] 按分类整理数据
```

### 4.2 页面生成脚本

```bash
# 任务清单
- [ ] 创建 scripts/generate-pages.ts
- [ ] 生成 Skills 列表页
- [ ] 生成 Skill 详情页 (100个)
- [ ] 生成分类索引
```

### 4.3 数据结构

```typescript
// data/skills.json
interface Skill {
  id: string;
  name: string;
  description: {
    en: string;
    zh: string;
  };
  stars: number;
  source: {
    owner: string;
    repo: string;
    path: string;
  };
  categories: string[];
  updatedAt: string;
  url: string;
  // 下载相关
  files: string[];           // Skill 包含的文件列表
  hasMarketplaceJson: boolean; // 是否包含 marketplace.json
}

// 支持的平台配置
interface Platform {
  id: string;
  name: string;
  installPath: string;
  description: string;
}

const PLATFORMS: Platform[] = [
  { id: 'claude-code', name: 'Claude Code', installPath: '~/.claude/skills/', description: 'Anthropic 官方 AI 编程助手' },
  { id: 'codex-cli', name: 'Codex CLI', installPath: '~/.codex/skills/', description: 'OpenAI 命令行编程工具' },
  { id: 'chatgpt', name: 'ChatGPT', installPath: '(通过插件)', description: '需要 marketplace.json' },
  { id: 'antigravity', name: 'Antigravity', installPath: '~/.antigravity/skills/', description: '支持 SKILL.md 标准' },
];
```

---

## Phase 5: 下载功能 (预计 3-4 小时)

### 5.1 下载依赖安装

```bash
npm install jszip file-saver
npm install -D @types/file-saver
```

### 5.2 下载功能实现

```bash
# 任务清单
- [ ] 实现 useSkillDownload.ts 组合函数
- [ ] 实现单个 Skill 下载
- [ ] 实现批量 Skill 下载
- [ ] 生成 INSTALL.md 安装指南
- [ ] 实现下载进度显示
- [ ] 实现平台选择器
- [ ] 实现复制安装命令功能
```

### 5.3 下载包生成逻辑

```typescript
// composables/useSkillDownload.ts
export async function downloadSkill(skill: Skill, platform: Platform) {
  // 1. 从 GitHub 获取 Skill 文件
  // 2. 创建 ZIP 包
  // 3. 生成对应平台的 INSTALL.md
  // 4. 触发下载
}

export async function downloadBatch(skills: Skill[], platform: Platform) {
  // 批量下载，合并为单个 ZIP
}
```

---

## Phase 6: 优化与部署 (预计 2-3 小时)

### 6.1 SEO 优化

```bash
# 任务清单
- [ ] 配置 sitemap
- [ ] 添加 meta 标签
- [ ] 配置 Open Graph
- [ ] 添加 robots.txt
```

### 6.2 性能优化

```bash
# 任务清单
- [ ] 图片优化
- [ ] 字体优化 (font-display: swap)
- [ ] 代码分割检查
- [ ] Lighthouse 测试
```

### 6.3 部署测试

```bash
# 任务清单
- [ ] 本地构建测试
- [ ] 推送到 GitHub
- [ ] 验证 GitHub Actions
- [ ] 检查线上页面
- [ ] 测试下载功能
```

---

## 文件清单

### 配置文件

```
OhMySkills/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── .github/
    └── workflows/
        └── deploy.yml
```

### VitePress 配置

```
docs/.vitepress/
├── config.ts                 # 主配置入口
├── config/
│   ├── index.ts              # 共享配置
│   ├── zh.ts                 # 中文配置
│   └── en.ts                 # 英文配置
└── theme/
    ├── index.ts              # 主题入口
    ├── style.css             # 全局样式
    ├── components/
    │   ├── SkillCard.vue
    │   ├── CategoryBadge.vue
    │   ├── CategoryGrid.vue
    │   ├── StatsCard.vue
    │   ├── LanguageSwitch.vue
    │   ├── DownloadButton.vue      # 下载按钮
    │   ├── BatchDownload.vue       # 批量下载
    │   ├── CopyCommand.vue         # 复制命令
    │   ├── PlatformSelector.vue    # 平台选择
    │   └── DownloadProgress.vue    # 下载进度
    └── composables/
        ├── useSkillDownload.ts     # 下载逻辑
        ├── useClipboard.ts         # 剪贴板
        └── useBatchSelect.ts       # 批量选择
```

### 内容文件

```
docs/
├── public/
│   ├── logo.svg
│   └── favicon.ico
├── zh/
│   ├── index.md              # 中文首页
│   ├── faq.md                # FAQ
│   ├── guide/
│   │   ├── index.md
│   │   ├── what-is-agent-skills.md
│   │   ├── getting-started.md
│   │   ├── installation.md
│   │   ├── creating-skills.md
│   │   └── skill-md-spec.md
│   ├── skills/
│   │   ├── index.md          # Skills 列表
│   │   └── [id].md           # Skill 详情 (100个)
│   └── categories/
│       ├── index.md
│       ├── tools.md
│       ├── development.md
│       └── ...
└── en/
    └── ... (结构同上)
```

### 脚本文件

```
scripts/
├── fetch-skills.ts           # 数据获取
└── generate-pages.ts         # 页面生成

data/
└── skills.json               # Skills 数据
```

---

## 开发命令

```bash
# 安装依赖
npm install

# 本地开发
npm run docs:dev

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview

# 获取 Skills 数据
npm run fetch-skills

# 生成 Skills 页面
npm run generate-pages
```

---

## 里程碑

| 阶段 | 预计时间 | 交付物 |
|------|----------|--------|
| Phase 1 | Day 1 | 项目框架、可运行的空项目 |
| Phase 2 | Day 1-2 | 主题和组件、首页雏形 |
| Phase 3 | Day 2-3 | 指南文档、FAQ |
| Phase 4 | Day 3-4 | Top 100 Skills 页面 |
| Phase 5 | Day 4-5 | **下载功能完整实现** |
| Phase 6 | Day 5 | 上线 GitHub Pages |

---

## 支持的平台

| 平台 | Skills 安装目录 | 说明 |
|------|----------------|------|
| Claude Code | `~/.claude/skills/` | Anthropic 官方 AI 编程助手 |
| Codex CLI | `~/.codex/skills/` | OpenAI 命令行编程工具 |
| ChatGPT | 通过插件机制 | 需要 marketplace.json |
| **Antigravity** | `~/.antigravity/skills/` | 支持 SKILL.md 标准 |

---

## 待确认事项

审查完设计文档后，请确认：

1. **整体方向**: 设计文档是否符合您的预期？
2. **优先级调整**: 是否有需要优先实现的功能？
3. **内容调整**: Skills 的筛选标准是否需要调整？
4. **品牌素材**: 是否有现成的 Logo 或需要我设计？
5. **开始实施**: 确认后我将开始 Phase 1

---

*计划版本: v1.0*  
*创建时间: 2026-01-20*

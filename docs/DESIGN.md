# OhMySkills 设计文档

> 中英双语 Agent Skills 文档网站

---

## 1. 项目概述

### 1.1 项目背景

[skillsmp.com](https://skillsmp.com) 是目前最大的 Agent Skills 市场，收录了 74,000+ 个开源技能。但对于中国开发者而言：

- 部分内容翻译生硬，阅读体验差
- 谷歌翻译对技术术语支持不友好
- 缺乏精选和分类导航

### 1.2 项目目标

构建一个面向中国开发者的 Agent Skills 参考文档网站：

- ✅ 精选 Top 100 热门 Skills（按 stars 排序）
- ✅ 提供高质量中英双语对照
- ✅ 清晰的分类导航
- ✅ 干净大气的 UI 设计
- ✅ 支持后续扩展至全部 Skills
- ✅ **一键下载 Skills**（支持多平台使用）

### 1.3 目标用户

- 使用 Claude Code / Codex CLI / ChatGPT / Antigravity 的中国开发者
- 希望学习和使用 Agent Skills 的技术人员
- 想要创建自己 Skills 的开发者

---

## 2. 技术方案

### 2.1 技术栈选型

| 技术 | 选择 | 理由 |
|------|------|------|
| 框架 | **VitePress** | Vue 生态、中文社区活跃、内置 i18n |
| 样式 | **Tailwind CSS** | 原子化 CSS、快速开发、响应式 |
| 部署 | **GitHub Pages** | 免费、CI/CD 集成简单 |
| 图标 | **Lucide Icons** | 轻量、风格统一、Vue 组件支持 |
| 文件下载 | **JSZip + FileSaver** | 客户端打包下载、无需后端 |

### 2.2 核心依赖

```json
{
  "devDependencies": {
    "vitepress": "^1.5.0",
    "vue": "^3.5.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "lucide-vue-next": "^0.460.0"
  },
  "dependencies": {
    "jszip": "^3.10.0",
    "file-saver": "^2.0.5"
  }
}
```

---

## 3. UI/UX 设计规范

> 基于 `ui-ux-pro-max` 技能指南

### 3.1 设计风格

**主风格**: Minimalism + Glassmorphism（轻度）

| 属性 | 规范 |
|------|------|
| 整体感觉 | 干净、大气、专业 |
| 视觉层级 | 清晰的信息层次 |
| 留白 | 充足的呼吸空间 |
| 动效 | 微妙、流畅（150-300ms） |

### 3.2 色彩系统

```css
:root {
  /* 主色调 - 专业蓝 */
  --color-primary: #3B82F6;        /* blue-500 */
  --color-primary-hover: #2563EB;  /* blue-600 */
  --color-primary-light: #DBEAFE;  /* blue-100 */
  
  /* 中性色 */
  --color-text-primary: #0F172A;   /* slate-900 */
  --color-text-secondary: #475569; /* slate-600 */
  --color-text-muted: #94A3B8;     /* slate-400 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8FAFC;   /* slate-50 */
  --color-border: #E2E8F0;         /* slate-200 */
  
  /* 强调色 */
  --color-success: #10B981;        /* emerald-500 */
  --color-warning: #F59E0B;        /* amber-500 */
  --color-error: #EF4444;          /* red-500 */
}

/* Dark Mode */
.dark {
  --color-text-primary: #F1F5F9;   /* slate-100 */
  --color-text-secondary: #CBD5E1; /* slate-300 */
  --color-text-muted: #64748B;     /* slate-500 */
  --color-bg-primary: #0F172A;     /* slate-900 */
  --color-bg-secondary: #1E293B;   /* slate-800 */
  --color-border: #334155;         /* slate-700 */
}
```

### 3.3 字体系统

```css
:root {
  /* 中文优先字体栈 */
  --font-sans: "Inter", "PingFang SC", "Hiragino Sans GB", 
               "Microsoft YaHei", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", 
               "Source Code Pro", monospace;
  
  /* 字号规范 */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
}
```

### 3.4 间距系统

```css
/* 基于 4px 网格 */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### 3.5 组件规范

#### 卡片组件（Skill Card）

```
┌─────────────────────────────────────────┐
│  📦 skill-name                    ⭐ 12k │
│                                         │
│  Skill 简短描述，一到两行文字...         │
│                                         │
│  ┌─────┐ ┌─────────┐ ┌────────┐        │
│  │ Vue │ │ Testing │ │ DevOps │        │
│  └─────┘ └─────────┘ └────────┘        │
│                                         │
│  langgenius/dify          2026-01-19   │
└─────────────────────────────────────────┘

样式规范:
- 圆角: rounded-xl (12px)
- 阴影: shadow-sm, hover:shadow-md
- 边框: border border-slate-200
- 内边距: p-6
- 过渡: transition-all duration-200
- 悬停: cursor-pointer, 轻微上移 hover:-translate-y-1
```

#### 导航栏

```
┌──────────────────────────────────────────────────────────┐
│  🎯 OhMySkills    指南  Skills  分类  FAQ    🌐 中/En  🌙 │
└──────────────────────────────────────────────────────────┘

样式规范:
- 位置: 顶部固定，带毛玻璃效果
- 背景: bg-white/80 backdrop-blur-md (Light)
        bg-slate-900/80 backdrop-blur-md (Dark)
- 高度: h-16 (64px)
- 内边距: px-6
- 边框: border-b border-slate-200/50
```

#### 按钮

```css
/* Primary Button */
.btn-primary {
  @apply px-4 py-2 rounded-lg
         bg-blue-500 text-white font-medium
         hover:bg-blue-600
         transition-colors duration-200
         cursor-pointer;
}

/* Secondary Button */
.btn-secondary {
  @apply px-4 py-2 rounded-lg
         bg-slate-100 text-slate-700
         hover:bg-slate-200
         transition-colors duration-200
         cursor-pointer;
}
```

### 3.6 交互规范

| 元素 | 规范 |
|------|------|
| 可点击元素 | 必须添加 `cursor-pointer` |
| Hover 状态 | 颜色/透明度变化，禁止 scale 导致布局偏移 |
| 过渡动画 | 150-300ms，使用 ease-out |
| 焦点状态 | 可见的 focus ring（无障碍） |

### 3.7 响应式断点

```css
/* Tailwind 默认断点 */
sm: 640px   /* 手机横屏 */
md: 768px   /* 平板 */
lg: 1024px  /* 小桌面 */
xl: 1280px  /* 桌面 */
2xl: 1536px /* 大桌面 */
```

---

## 4. 信息架构

### 4.1 站点地图

```
OhMySkills/
├── 首页 (/)
│   ├── Hero 区域
│   ├── 热门 Skills 预览
│   └── 快速入门引导
│
├── 指南 (/guide/)
│   ├── 什么是 Agent Skills (/guide/what-is-agent-skills)
│   ├── 快速开始 (/guide/getting-started)
│   ├── 安装 Skills (/guide/installation)
│   ├── 创建 Skills (/guide/creating-skills)
│   └── SKILL.md 规范 (/guide/skill-md-spec)
│
├── Skills (/skills/)
│   ├── 全部 Skills (/skills/)
│   └── [skill-detail] (/skills/:id)
│
├── 分类 (/categories/)
│   ├── 工具 (/categories/tools)
│   ├── 开发 (/categories/development)
│   ├── 数据与AI (/categories/data-ai)
│   ├── 商业 (/categories/business)
│   ├── DevOps (/categories/devops)
│   ├── 测试与安全 (/categories/testing-security)
│   ├── 文档 (/categories/documentation)
│   └── 更多...
│
└── FAQ (/faq)
```

### 4.2 多语言路由

```
/zh/                    # 中文首页
/zh/guide/              # 中文指南
/zh/skills/             # 中文 Skills 列表

/en/                    # 英文首页
/en/guide/              # 英文指南
/en/skills/             # 英文 Skills 列表
```

### 4.3 支持的平台

| 平台 | Skills 安装目录 | 说明 |
|------|----------------|------|
| **Claude Code** | `~/.claude/skills/` (个人) <br> `.claude/skills/` (项目) | Anthropic 官方 AI 编程助手 |
| **Codex CLI** | `~/.codex/skills/` | OpenAI 命令行编程工具 |
| **ChatGPT** | 通过插件机制 | 需要 marketplace.json |
| **Antigravity** | `~/.antigravity/skills/` | 支持 SKILL.md 标准的 AI 工具 |

> 所有平台均采用开放的 SKILL.md 标准格式，Skills 可跨平台通用

---

## 5. 内容规划

### 5.1 Top 100 热门 Skills（按 Stars 排序）

基于 skillsmp.com 数据，初期收录以下热门 Skills：

| 排名 | Skill 名称 | Stars | 来源 | 分类 |
|------|-----------|-------|------|------|
| 1 | create-pr | 169.8k | n8n-io/n8n | DevOps |
| 2 | skill-lookup | 142.7k | f/awesome-chatgpt-prompts | 工具 |
| 3 | prompt-lookup | 142.7k | f/awesome-chatgpt-prompts | 工具 |
| 4 | cache-components | 137.2k | vercel/next.js | 开发 |
| 5 | frontend-code-review | 126.4k | langgenius/dify | 开发 |
| 6 | component-refactoring | 126.4k | langgenius/dify | 开发 |
| 7 | orpc-contract-first | 126.4k | langgenius/dify | 开发 |
| 8 | skill-creator | 126.4k | langgenius/dify | 工具 |
| 9 | frontend-testing | 126.4k | langgenius/dify | 测试与安全 |
| 10 | vercel-react-best-practices | 126.4k | langgenius/dify | 开发 |
| 11 | electron-chromium-upgrade | 119.8k | electron/electron | 开发 |
| 12 | at-dispatch-v2 | 96.7k | pytorch/pytorch | 数据与AI |
| ... | ... | ... | ... | ... |

> 完整 Top 100 列表将在实施阶段从 skillsmp.com API 获取

### 5.2 分类统计

| 分类 | 英文 | 技能数量 |
|------|------|----------|
| 工具 | Tools | 25,462 |
| 开发 | Development | 21,994 |
| 数据与AI | Data & AI | 14,616 |
| 商业 | Business | 13,211 |
| DevOps | DevOps | 12,248 |
| 测试与安全 | Testing & Security | 9,078 |
| 文档 | Documentation | 6,383 |
| 内容与媒体 | Content & Media | 6,290 |
| 研究 | Research | 2,912 |
| 数据库 | Databases | 1,695 |
| 生活方式 | Lifestyle | 1,432 |
| 区块链 | Blockchain | 739 |

### 5.3 Skill 详情页内容结构

```markdown
# Skill 名称

> 一句话描述

## 基本信息

- **来源**: GitHub 仓库链接
- **Stars**: ⭐ 数量
- **分类**: 所属分类
- **兼容**: Claude Code / Codex CLI / ChatGPT / Antigravity
- **更新**: 最后更新时间

## 功能介绍

详细描述 Skill 的功能和使用场景...

## 安装方法

### Claude Code

\`\`\`bash
# 个人安装
cp -r skill-name ~/.claude/skills/

# 项目安装
cp -r skill-name .claude/skills/
\`\`\`

### Codex CLI

\`\`\`bash
cp -r skill-name ~/.codex/skills/
\`\`\`

### Antigravity

\`\`\`bash
cp -r skill-name ~/.antigravity/skills/
\`\`\`

## 下载

[⬇️ 下载此 Skill] 按钮 → 自动打包为 ZIP 文件

## 使用示例

具体的使用示例和触发方式...

## 原始文档

链接到原始 SKILL.md...
```

---

## 6. 下载功能设计

### 6.1 功能概述

为方便用户快速使用 Skills，提供一键下载功能，将 Skill 打包为 ZIP 文件，用户解压后即可直接使用。

### 6.2 下载方式

#### 方式一：单个 Skill 下载

在 Skill 详情页提供下载按钮：

```
┌─────────────────────────────────────────────────────────────┐
│  # create-pr                                                │
│                                                             │
│  > Creates GitHub pull requests...                          │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │  ⬇️ 下载 Skill       │  │  📋 复制安装命令     │          │
│  └─────────────────────┘  └─────────────────────┘          │
│         Primary Button          Secondary Button            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### 方式二：批量下载

在 Skills 列表页支持多选下载：

```
┌─────────────────────────────────────────────────────────────┐
│  Skills 目录                          已选择: 3 个          │
│                                                             │
│  ┌─────────────────────────────┐  ┌──────────────────────┐ │
│  │ ☑️ create-pr        ⭐ 169k  │  │ ⬇️ 下载已选 (3)      │ │
│  └─────────────────────────────┘  └──────────────────────┘ │
│  ┌─────────────────────────────┐                           │
│  │ ☑️ skill-lookup     ⭐ 142k  │                           │
│  └─────────────────────────────┘                           │
│  ┌─────────────────────────────┐                           │
│  │ ☑️ cache-components ⭐ 137k  │                           │
│  └─────────────────────────────┘                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 下载包结构

```
skill-name.zip
├── skill-name/
│   ├── SKILL.md              # 核心指令文件
│   ├── README.md             # 使用说明（如有）
│   ├── scripts/              # 脚本文件（如有）
│   ├── templates/            # 模板文件（如有）
│   └── marketplace.json      # 市场元数据（如有）
└── INSTALL.md                # 安装指南（自动生成）
```

**INSTALL.md 内容示例**：

```markdown
# 安装指南

## Skill 信息
- 名称: create-pr
- 来源: n8n-io/n8n
- 下载时间: 2026-01-20

## 安装步骤

### Claude Code
\`\`\`bash
# 解压后执行
unzip create-pr.zip
cp -r create-pr ~/.claude/skills/
\`\`\`

### Codex CLI
\`\`\`bash
cp -r create-pr ~/.codex/skills/
\`\`\`

### Antigravity
\`\`\`bash
cp -r create-pr ~/.antigravity/skills/
\`\`\`

## 验证安装
安装完成后，重启您的 AI 编程助手，Skill 将自动加载。
```

### 6.4 技术实现

#### 前端下载逻辑

```typescript
// composables/useSkillDownload.ts
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface SkillFile {
  path: string;
  content: string;
}

export async function downloadSkill(skillId: string, skillName: string) {
  // 1. 从 GitHub 获取 Skill 文件
  const files = await fetchSkillFiles(skillId);
  
  // 2. 创建 ZIP 包
  const zip = new JSZip();
  const folder = zip.folder(skillName);
  
  // 3. 添加 Skill 文件
  files.forEach(file => {
    folder.file(file.path, file.content);
  });
  
  // 4. 生成安装指南
  const installGuide = generateInstallGuide(skillName);
  zip.file('INSTALL.md', installGuide);
  
  // 5. 下载
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, `${skillName}.zip`);
}

export async function downloadMultipleSkills(skills: Skill[]) {
  const zip = new JSZip();
  
  for (const skill of skills) {
    const files = await fetchSkillFiles(skill.id);
    const folder = zip.folder(skill.name);
    files.forEach(file => folder.file(file.path, file.content));
  }
  
  // 生成批量安装指南
  zip.file('INSTALL.md', generateBatchInstallGuide(skills));
  
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, `ohmyskills-batch-${Date.now()}.zip`);
}
```

#### 数据源

Skills 文件从 GitHub Raw 内容获取：

```typescript
async function fetchSkillFiles(skillId: string): Promise<SkillFile[]> {
  const skill = skillsData[skillId];
  const baseUrl = `https://raw.githubusercontent.com/${skill.source.owner}/${skill.source.repo}/main/${skill.source.path}`;
  
  // 获取 SKILL.md（必需）
  const skillMd = await fetch(`${baseUrl}/SKILL.md`).then(r => r.text());
  
  const files: SkillFile[] = [
    { path: 'SKILL.md', content: skillMd }
  ];
  
  // 尝试获取其他可选文件
  // README.md, scripts/, templates/, marketplace.json
  // ...
  
  return files;
}
```

### 6.5 下载按钮组件

```vue
<!-- components/DownloadButton.vue -->
<template>
  <button
    @click="handleDownload"
    :disabled="loading"
    class="inline-flex items-center gap-2 px-4 py-2 
           bg-blue-500 text-white rounded-lg
           hover:bg-blue-600 transition-colors
           disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <LoaderIcon v-if="loading" class="w-4 h-4 animate-spin" />
    <DownloadIcon v-else class="w-4 h-4" />
    <span>{{ loading ? '打包中...' : '下载 Skill' }}</span>
  </button>
</template>
```

### 6.6 复制安装命令

除下载外，还提供一键复制安装命令功能：

```
┌────────────────────────────────────────────────────────────────┐
│  选择平台:  ○ Claude Code  ○ Codex CLI  ● Antigravity         │
├────────────────────────────────────────────────────────────────┤
│  git clone https://github.com/n8n-io/n8n.git --sparse         │
│  cd n8n && git sparse-checkout set claude/skills/create-pr    │
│  cp -r claude/skills/create-pr ~/.antigravity/skills/     📋  │
└────────────────────────────────────────────────────────────────┘
                                                        ↑ 点击复制
```

---

## 7. 项目结构

```
OhMySkills/
├── .github/
│   ├── chatmodes/              # Claude chatmode 配置
│   │   └── planning.chatmode.md
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自动部署
│
├── .skills/                    # 本地 skills
│   └── ui-ux-pro-max/
│
├── docs/                       # VitePress 文档源码
│   ├── .vitepress/
│   │   ├── config/
│   │   │   ├── index.ts        # 主配置
│   │   │   ├── zh.ts           # 中文配置
│   │   │   └── en.ts           # 英文配置
│   │   ├── theme/
│   │   │   ├── index.ts        # 主题入口
│   │   │   ├── style.css       # 全局样式
│   │   │   ├── components/     # 自定义组件
│   │   │   │   ├── SkillCard.vue
│   │   │   │   ├── CategoryGrid.vue
│   │   │   │   ├── LanguageSwitch.vue
│   │   │   │   ├── DownloadButton.vue      # 下载按钮
│   │   │   │   ├── BatchDownload.vue       # 批量下载
│   │   │   │   ├── CopyCommand.vue         # 复制安装命令
│   │   │   │   └── PlatformSelector.vue    # 平台选择器
│   │   │   ├── composables/
│   │   │   │   ├── useSkillDownload.ts     # 下载逻辑
│   │   │   │   └── useClipboard.ts         # 剪贴板操作
│   │   │   └── layouts/
│   │   │       └── SkillLayout.vue
│   │   └── config.ts
│   │
│   ├── public/
│   │   ├── logo.svg
│   │   └── favicon.ico
│   │
│   ├── zh/                     # 中文内容
│   │   ├── index.md            # 首页
│   │   ├── guide/
│   │   │   ├── index.md
│   │   │   ├── what-is-agent-skills.md
│   │   │   ├── getting-started.md
│   │   │   ├── installation.md
│   │   │   ├── creating-skills.md
│   │   │   └── skill-md-spec.md
│   │   ├── skills/
│   │   │   ├── index.md        # Skills 列表
│   │   │   └── [skill-id].md   # Skill 详情
│   │   ├── categories/
│   │   │   ├── index.md
│   │   │   ├── tools.md
│   │   │   ├── development.md
│   │   │   └── ...
│   │   └── faq.md
│   │
│   └── en/                     # 英文内容（结构同上）
│       ├── index.md
│       ├── guide/
│       ├── skills/
│       ├── categories/
│       └── faq.md
│
├── scripts/
│   ├── fetch-skills.ts         # 从 skillsmp 获取数据
│   └── generate-pages.ts       # 自动生成页面
│
├── data/
│   └── skills.json             # Skills 数据缓存
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 7. 部署方案

### 7.1 GitHub Actions 工作流

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - run: npm ci
      - run: npm run docs:build
      
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### 7.2 自定义域名（可选）

如需自定义域名，在 `docs/public/` 添加 `CNAME` 文件：

```
ohmyskills.dev
```

---

## 8. 开发计划

### Phase 1: 基础框架（1-2天）

- [ ] 初始化 VitePress 项目
- [ ] 配置 Tailwind CSS
- [ ] 配置中英双语 i18n
- [ ] 设计基础主题和组件
- [ ] 配置 GitHub Pages 部署

### Phase 2: 核心内容（3-5天）

- [ ] 编写首页
- [ ] 编写指南文档（5篇）
- [ ] 编写 FAQ 页面
- [ ] 实现 SkillCard 组件
- [ ] 实现分类导航

### Phase 3: Skills 数据（2-3天）

- [ ] 编写数据获取脚本
- [ ] 获取 Top 100 Skills 数据
- [ ] 翻译 Skills 描述
- [ ] 生成 Skills 详情页

### Phase 4: 优化上线（1-2天）

- [ ] UI 细节打磨
- [ ] SEO 优化
- [ ] 性能优化
- [ ] 测试部署

---

## 9. 待确认事项

请您审查并确认以下内容：

### 9.1 设计方向

- [ ] 色彩方案是否满意？（专业蓝为主色）
- [ ] 整体风格是否符合预期？（简洁大气）

### 9.2 内容范围

- [ ] Top 100 的筛选标准是否合适？（按 stars 排序）
- [ ] 分类是否需要调整？

### 9.3 功能优先级

- [ ] 是否需要搜索功能？（VitePress 内置支持）
- [ ] 是否需要评论/反馈功能？

### 9.4 其他

- [ ] 项目名称 "OhMySkills" 是否确定？
- [ ] 是否有品牌 Logo？
- [ ] 是否需要自定义域名？

---

## 10. 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [skillsmp.com](https://skillsmp.com/zh)
- [Agent Skills 官方规范](https://agentskills.io/)
- [Anthropic Skills 文档](https://github.com/anthropics/skills)
- [Tailwind CSS](https://tailwindcss.com/)

---

*文档版本: v1.0*  
*创建时间: 2026-01-20*  
*作者: AI Assistant*

// docs/.vitepress/theme/composables/useSkillDownload.ts
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { ref } from 'vue';

const { saveAs } = FileSaver;

import type { Skill } from '../data/skills';

export { type Skill } from '../data/skills';

export interface Platform {
  id: string;
  name: string;
  installPath: string;
  description: string;
  installCmdTemplate?: string;
}

export const PLATFORMS: Platform[] = [
  { 
    id: 'claude-code', 
    name: 'Claude Code', 
    installPath: '~/.claude/skills/', 
    description: 'Anthropic 官方 AI 编程助手',
    installCmdTemplate: 'cp -r {skillName} ~/.claude/skills/'
  },
  { 
    id: 'codex-cli', 
    name: 'Codex CLI', 
    installPath: '~/.codex/skills/', 
    description: 'OpenAI 命令行编程工具',
    installCmdTemplate: 'cp -r {skillName} ~/.codex/skills/'
  },
  { 
    id: 'chatgpt', 
    name: 'ChatGPT', 
    installPath: '(通过插件)', 
    description: '需要 marketplace.json' 
  },
  { 
    id: 'antigravity', 
    name: 'Antigravity', 
    installPath: '~/.antigravity/skills/', 
    description: '支持 SKILL.md 标准',
    installCmdTemplate: 'cp -r {skillName} ~/.antigravity/skills/'
  },
];

export function useSkillDownload() {
  const loading = ref(false);
  const progress = ref(0);
  const status = ref('');

  const fetchSkillFiles = async (skill: Skill) => {
    // 模拟获取文件列表，实际应从 GitHub API 或 Raw 获取
    // 这里简化处理，只获取 SKILL.md
    const baseUrl = `https://raw.githubusercontent.com/${skill.source.owner}/${skill.source.repo}/main/${skill.source.path}`;
    
    try {
      const response = await fetch(`${baseUrl}/SKILL.md`);
      if (!response.ok) throw new Error('Failed to fetch SKILL.md');
      const content = await response.text();
      return [{ path: 'SKILL.md', content }];
    } catch (error) {
      console.error(`Error fetching skill ${skill.name}:`, error);
      return [];
    }
  };

  const generateInstallGuide = (skillName: string) => {
    return `# 安装指南

## Skill: ${skillName}
下载时间: ${new Date().toLocaleString()}

## 安装步骤

### Claude Code
\`\`\`bash
# 解压后执行
cp -r ${skillName} ~/.claude/skills/
\`\`\`

### Codex CLI
\`\`\`bash
cp -r ${skillName} ~/.codex/skills/
\`\`\`

### Antigravity
\`\`\`bash
cp -r ${skillName} ~/.antigravity/skills/
\`\`\`

## 验证安装
安装完成后，重启您的 AI 编程助手，Skill 将自动加载。
`;
  };

  const downloadSkill = async (skill: Skill) => {
    loading.value = true;
    progress.value = 10;
    status.value = `正在获取 ${skill.name} 文件...`;

    try {
      const files = await fetchSkillFiles(skill);
      progress.value = 50;
      status.value = '正在打包...';

      const zip = new JSZip();
      const folder = zip.folder(skill.name);
      
      if (folder) {
        files.forEach(file => {
          folder.file(file.path, file.content);
        });
        
        folder.file('INSTALL.md', generateInstallGuide(skill.name));
      }

      // We already have content in the mock data, so we don't need to fetch from GitHub for now.
      // In a real app, we would fetch from the URL or API.
      const content = skill.content;
      const filename = `${skill.id}.md`; // Or .json/yaml based on format

      // const baseUrl = `https://raw.githubusercontent.com/${skill.source.owner}/${skill.source.repo}/main/${skill.source.path}`;
      
      // const filesToDownload = skill.files || ['README.md', 'skill.yaml', 'prompt.md'];
      
      // for (const file of filesToDownload) {
      //   // Mock fetch for now
      //   // const content = await fetch(`${baseUrl}/${file}`).then(res => res.text());
      //   zip.file(file, `# Mock content for ${file}\n\nThis is a downloaded skill.`);
      // }

      // Add the main content file
      zip.file(filename, content);
      
      // Add metadata file
      zip.file('metadata.json', JSON.stringify(skill, null, 2));

      // Generate specific install instructions based on platform
      PLATFORMS.forEach(platform => {
        if (platform.installCmdTemplate) {
          const cmd = platform.installCmdTemplate.replace('{skillName}', skill.name);
          zip.file(`${platform.id}_INSTALL.md`, `# ${platform.name} 安装指南\n\n${cmd}`);
        }
      });

      progress.value = 80;
      const zipContent = await zip.generateAsync({ type: 'blob' });
      saveAs(zipContent, `${skill.name}.zip`);
      
      progress.value = 100;
      status.value = '下载完成';
    } catch (error) {
      status.value = '下载失败';
      console.error(error);
    } finally {
      setTimeout(() => {
        loading.value = false;
        progress.value = 0;
        status.value = '';
      }, 2000);
    }
  };

  return {
    downloadSkill,
    loading,
    progress,
    status
  };
}

// docs/.vitepress/theme/components/BatchDownload.vue
<script setup lang="ts">
import { ref } from 'vue';
import { Download, Loader2, X } from 'lucide-vue-next';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import type { Skill } from '../composables/useSkillDownload';
const { saveAs } = FileSaver;

const props = defineProps<{
  selectedSkills: Skill[]
}>();

const emit = defineEmits(['clear']);

const loading = ref(false);
const progress = ref(0);
const status = ref('');

const fetchSkillFiles = async (skill: Skill) => {
  // Use mock content instead of fetching
  return { path: `${skill.id}.md`, content: skill.content };
};

const generateBatchInstallGuide = (skills: Skill[]) => {
  return `# 批量安装指南

下载时间: ${new Date().toLocaleString()}
包含 Skills:
${skills.map(s => `- ${s.name} (${s.author})`).join('\n')}

## 安装步骤

### 1. 解压文件
解压下载的压缩包到单独的目录。

### 2. 复制 Skills
将每个 Skill 文件夹复制到您的 AI 助手配置目录：

#### Claude Code (Mac/Linux)
\`\`\`bash
cp -r * ~/.claude/skills/
rm ~/.claude/skills/INSTALL.md
\`\`\`

#### Codex CLI
\`\`\`bash
cp -r * ~/.codex/skills/
rm ~/.codex/skills/INSTALL.md
\`\`\`

#### Antigravity
\`\`\`bash
cp -r * ~/.antigravity/skills/
rm ~/.antigravity/skills/INSTALL.md
\`\`\`
`;
};

const handleBatchDownload = async () => {
  if (props.selectedSkills.length === 0) return;
  
  loading.value = true;
  progress.value = 0;
  
  const zip = new JSZip();
  let completed = 0;
  const total = props.selectedSkills.length;
  
  try {
    for (const skill of props.selectedSkills) {
      status.value = `正在处理: ${skill.name} (${completed + 1}/${total})`;
      const folder = zip.folder(skill.name);
      
      if (folder) {
        const file = await fetchSkillFiles(skill);
        if (file) {
          folder.file(file.path, file.content);
        }
      }
      
      completed++;
      progress.value = (completed / total) * 80;
    }
    
    zip.file('INSTALL.md', generateBatchInstallGuide(props.selectedSkills));
    
    status.value = '正在打包...';
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `ohmyskills-batch-${Date.now()}.zip`);
    
    status.value = '下载完成';
    progress.value = 100;
    
    setTimeout(() => {
      emit('clear');
    }, 1000);
    
  } catch (error) {
    console.error('Batch download failed:', error);
    status.value = '下载失败';
  } finally {
    setTimeout(() => {
      loading.value = false;
      progress.value = 0;
      status.value = '';
    }, 2000);
  }
};
</script>

<template>
  <div v-if="selectedSkills.length > 0" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
    <div class="bg-slate-900 text-white rounded-xl shadow-lg border border-slate-700 p-4 flex items-center gap-4 min-w-[320px]">
      <div class="flex-1">
        <div class="flex justify-between items-center mb-1">
          <span class="font-medium text-sm">已选择 {{ selectedSkills.length }} 个 Skills</span>
          <button @click="$emit('clear')" class="text-slate-400 hover:text-white">
            <X class="w-4 h-4" />
          </button>
        </div>
        <div v-if="loading" class="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div class="h-full bg-blue-500 transition-all duration-300" :style="{ width: `${progress}%` }"></div>
        </div>
        <div v-if="loading" class="text-xs text-slate-400 mt-1 truncate max-w-[200px]">{{ status }}</div>
      </div>
      
      <button
        @click="handleBatchDownload"
        :disabled="loading"
        class="btn-primary py-1.5 px-3 text-sm whitespace-nowrap"
      >
        <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
        <Download v-else class="w-4 h-4" />
        <span>下载全部</span>
      </button>
    </div>
  </div>
</template>

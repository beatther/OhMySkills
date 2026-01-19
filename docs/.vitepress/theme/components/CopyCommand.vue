// docs/.vitepress/theme/components/CopyCommand.vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { Copy, Check } from 'lucide-vue-next';
import { useClipboard } from '../composables/useClipboard';
import { PLATFORMS, type Platform, type Skill } from '../composables/useSkillDownload';

const props = defineProps<{
  skill: Skill
}>();

const selectedPlatform = ref<Platform>(PLATFORMS.find(p => p.id === 'antigravity') || PLATFORMS[0]);
const { copy, copied } = useClipboard();

const installCommand = computed(() => {
  const template = selectedPlatform.value.installCmdTemplate || '';
  if (!template) return '';
  
  // 基础命令构建
  const cloneCmd = `git clone https://github.com/${props.skill.source.owner}/${props.skill.source.repo}.git --sparse`;
  const cdCmd = `cd ${props.skill.source.repo}`;
  const sparseCmd = `git sparse-checkout set ${props.skill.source.path}`;
  const cpCmd = template.replace('{skillName}', props.skill.name);
  
  return `${cloneCmd}\n${cdCmd} && ${sparseCmd}\n${cpCmd}`;
});

const handleCopy = () => {
  copy(installCommand.value);
};
</script>

<template>
  <div class="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
    <div class="px-4 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-2">
      <button
        v-for="platform in PLATFORMS"
        :key="platform.id"
        @click="selectedPlatform = platform"
        class="text-xs px-2 py-1 rounded-md transition-colors"
        :class="selectedPlatform.id === platform.id 
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium' 
          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'"
      >
        {{ platform.name }}
      </button>
    </div>
    
    <div class="relative bg-slate-900 text-slate-200 p-4 font-mono text-sm overflow-x-auto">
      <pre class="whitespace-pre-wrap break-all">{{ installCommand }}</pre>
      
      <button
        @click="handleCopy"
        class="absolute top-2 right-2 p-2 rounded hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
        :title="copied ? '已复制' : '复制命令'"
      >
        <Check v-if="copied" class="w-4 h-4 text-green-400" />
        <Copy v-else class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

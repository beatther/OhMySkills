<script setup lang="ts">
import { computed } from 'vue';
import { Download, Monitor, Brain, Calendar, ArrowLeft } from 'lucide-vue-next';
import { type Skill } from '../data/skills';
import { useData } from 'vitepress';
import DownloadButton from './DownloadButton.vue';

const props = defineProps<{
  skill: Skill
}>();

const { lang } = useData();

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(lang.value === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const texts = computed(() => {
  const isZh = lang.value === 'zh';
  return {
    back: isZh ? '返回技能列表' : 'Back to Skills',
    updated: isZh ? '更新于' : 'Updated',
    downloads: isZh ? '下载量' : 'downloads',
    prompt: isZh ? '技能 Prompt' : 'Skill Prompt',
    installation: isZh ? '安装说明' : 'Installation',
    installGuide: isZh ? '点击上方下载按钮获取技能包。解压后将文件夹放入您的平台技能目录：' : 'Click the download button above to get the skill package. Unzip it and place the folder in your platform\'s skills directory:'
  };
});
</script>

<template>
  <div class="max-w-4xl mx-auto pb-20">
    <a :href="lang === 'zh' ? '/OhMySkills/zh/skills/' : '/OhMySkills/skills/'" class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors no-underline">
      <ArrowLeft class="w-4 h-4" />
      {{ texts.back }}
    </a>

    <!-- Header -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
      <div class="flex flex-col md:flex-row justify-between gap-6 mb-6">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {{ skill.category }}
            </span>
            <span class="text-slate-400 text-sm">v{{ skill.version }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 !mt-0">
            {{ skill.name }}
          </h1>
          <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-1.5">
              <span class="font-medium text-slate-900 dark:text-slate-200">{{ skill.author }}</span>
            </div>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
            <div class="flex items-center gap-1.5">
              <Calendar class="w-4 h-4" />
              <span>{{ texts.updated }} {{ formatDate(skill.updatedAt) }}</span>
            </div>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
             <div class="flex items-center gap-1.5">
              <Download class="w-4 h-4" />
              <span>{{ skill.downloads.toLocaleString() }} {{ texts.downloads }}</span>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col items-start md:items-end gap-3 min-w-[200px]">
          <DownloadButton :skill="skill" class="w-full md:w-auto !py-3 !px-6 !text-base" />
        </div>
      </div>

      <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        {{ skill.description }}
      </p>

      <div class="flex flex-wrap gap-2">
         <span 
          v-for="platform in skill.platform" 
          :key="platform"
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 capitalize"
        >
          <Monitor class="w-3.5 h-3.5" />
          {{ platform }}
        </span>
      </div>
    </div>

    <!-- Content / Prompt -->
    <div class="prose dark:prose-invert max-w-none">
      <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
        <Brain class="w-5 h-5 text-blue-500" />
        {{ texts.prompt }}
      </h2>
      <div class="relative group">
        <div class="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
           <!-- Copy button could go here, usually handled by markdown renderer but this is raw text -->
        </div>
        <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-[#1e1e1e]">
          <pre class="!m-0 !p-6 overflow-x-auto text-sm leading-relaxed text-gray-300 font-mono scrollbar-thin"><code>{{ skill.content }}</code></pre>
        </div>
      </div>

      <!-- Installation Guide (Mock) -->
      <h2 class="text-xl font-bold mt-12 mb-4">{{ texts.installation }}</h2>
      <p>
        {{ texts.installGuide }}
      </p>
      <div class="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm border border-slate-200 dark:border-slate-800 mt-2">
        ~/.claude/skills/{{ skill.id }}/
      </div>
    </div>
  </div>
</template>

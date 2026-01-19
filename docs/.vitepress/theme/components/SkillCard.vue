// docs/.vitepress/theme/components/SkillCard.vue
<script setup lang="ts">
import { Star, Download } from 'lucide-vue-next';
import { type Skill } from '../data/skills';

const props = defineProps<{
  skill: Skill
}>();

const formatDownloads = (downloads: number) => {
  return downloads >= 1000 ? `${(downloads / 1000).toFixed(1)}k` : downloads;
};
</script>

<template>
  <a :href="`/skills/${skill.id}`" class="block no-underline">
    <div class="group h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
          📦 {{ skill.name }}
        </h3>
        <div class="flex items-center gap-1 text-slate-400 text-sm font-medium">
          <Download class="w-4 h-4" />
          <span>{{ formatDownloads(skill.downloads) }}</span>
        </div>
      </div>
      
      <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 min-h-[40px]">
        {{ skill.description }}
      </p>

      <div class="flex flex-wrap gap-2 mb-4">
        <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
          {{ skill.category }}
        </span>
      </div>

      <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-700">
        <span>{{ skill.author }}</span>
        <span>v{{ skill.version }}</span>
      </div>
    </div>
  </a>
</template>

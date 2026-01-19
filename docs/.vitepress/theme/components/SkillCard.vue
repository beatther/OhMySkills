// docs/.vitepress/theme/components/SkillCard.vue
<script setup lang="ts">
import { Star, Download } from 'lucide-vue-next';
import { type Skill } from '../data/skills';
import DownloadButton from './DownloadButton.vue';

const props = defineProps<{
  skill: Skill,
  selected?: boolean
}>();

const emit = defineEmits<{
  (e: 'toggle-select'): void
}>();

const formatDownloads = (downloads: number) => {
  return downloads >= 1000 ? `${(downloads / 1000).toFixed(1)}k` : downloads;
};
</script>

<template>
  <a :href="`/skills/${skill.id}`" class="block no-underline relative group/card">
    <div 
      class="group h-full bg-white dark:bg-slate-800 rounded-xl border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
      :class="selected ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50/10 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-700'"
    >
      <!-- Selection Checkbox (Visible on hover or selected) -->
      <div 
        @click.stop.prevent="emit('toggle-select')"
        class="absolute top-4 right-4 z-20 w-5 h-5 rounded border cursor-pointer flex items-center justify-center transition-all duration-200"
        :class="[
          selected 
            ? 'bg-blue-500 border-blue-500 opacity-100' 
            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 opacity-0 group-hover/card:opacity-100'
        ]"
      >
        <svg v-if="selected" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

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
        <div class="flex items-center gap-2">
            <span>v{{ skill.version }}</span>
            <div @click.stop.prevent>
              <DownloadButton :skill="skill" class="!px-3 !py-1 !text-xs !h-7 min-w-[80px]" />
            </div>
        </div>
      </div>
    </div>
  </a>
</template>

// docs/.vitepress/theme/components/LanguageSwitch.vue
<script setup lang="ts">
import { useData } from 'vitepress';
import { Languages } from 'lucide-vue-next';

const { site, lang } = useData();
</script>

<template>
  <a 
    :href="lang === 'zh' ? '/en/' : '/zh/'"
    class="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
  >
    <Languages class="w-4 h-4" />
    <span>{{ lang === 'zh' ? 'EN' : '中文' }}</span>
  </a>
</template>

// docs/.vitepress/theme/components/CategoryBadge.vue
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: string
}>();

const CATEGORY_MAP: Record<string, string> = {
  'tools': '工具',
  'development': '开发',
  'data-ai': '数据与AI',
  'business': '商业',
  'devops': 'DevOps',
  'testing-security': '测试与安全',
  'documentation': '文档',
  'content-media': '内容与媒体',
  'research': '研究',
  'databases': '数据库',
  'lifestyle': '生活方式',
  'blockchain': '区块链'
};

const displayName = computed(() => CATEGORY_MAP[props.name] || props.name);
</script>

<template>
  <span 
    class="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
  >
    {{ displayName }}
  </span>
</template>

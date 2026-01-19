// docs/.vitepress/theme/components/CategoryGrid.vue
<script setup lang="ts">
import { 
  Wrench, Code2, BrainCircuit, Briefcase, 
  Container, ShieldCheck, FileText, MonitorPlay,
  Microscope, Database, Coffee, Bitcoin
} from 'lucide-vue-next';

const categories = [
  { id: 'tools', name: '工具', count: 25462, icon: Wrench },
  { id: 'development', name: '开发', count: 21994, icon: Code2 },
  { id: 'data-ai', name: '数据与AI', count: 14616, icon: BrainCircuit },
  { id: 'business', name: '商业', count: 13211, icon: Briefcase },
  { id: 'devops', name: 'DevOps', count: 12248, icon: Container },
  { id: 'testing-security', name: '测试与安全', count: 9078, icon: ShieldCheck },
  { id: 'documentation', name: '文档', count: 6383, icon: FileText },
  { id: 'content-media', name: '内容与媒体', count: 6290, icon: MonitorPlay },
  { id: 'research', name: '研究', count: 2912, icon: Microscope },
  { id: 'databases', name: '数据库', count: 1695, icon: Database },
  { id: 'lifestyle', name: '生活方式', count: 1432, icon: Coffee },
  { id: 'blockchain', name: '区块链', count: 739, icon: Bitcoin },
];
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <a 
      v-for="cat in categories" 
      :key="cat.id"
      :href="`/zh/categories/${cat.id}.html`"
      class="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all no-underline"
    >
      <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
        <component :is="cat.icon" class="w-5 h-5" />
      </div>
      <div>
        <div class="font-medium text-slate-900 dark:text-slate-100">{{ cat.name }}</div>
        <div class="text-xs text-slate-500">{{ cat.count.toLocaleString() }} Skills</div>
      </div>
    </a>
  </div>
</template>

// docs/.vitepress/theme/components/CategoryGrid.vue
<script setup lang="ts">
import { 
  Wrench, Code2, BrainCircuit, Briefcase, 
  Container, ShieldCheck, FileText, MonitorPlay,
  Microscope, Database, Coffee, Bitcoin
} from 'lucide-vue-next';
import { useData } from 'vitepress';
import { computed } from 'vue';

const { lang } = useData();

const categoriesDisplay = computed(() => {
  const isZh = lang.value === 'zh';
  return [
    { id: 'tools', name: isZh ? '工具' : 'Tools', count: 25462, icon: Wrench },
    { id: 'development', name: isZh ? '开发' : 'Development', count: 21994, icon: Code2 },
    { id: 'data-ai', name: isZh ? '数据与AI' : 'Data & AI', count: 14616, icon: BrainCircuit },
    { id: 'business', name: isZh ? '商业' : 'Business', count: 13211, icon: Briefcase },
    { id: 'devops', name: 'DevOps', count: 12248, icon: Container },
    { id: 'testing-security', name: isZh ? '测试与安全' : 'Testing & Security', count: 9078, icon: ShieldCheck },
    { id: 'documentation', name: isZh ? '文档' : 'Documentation', count: 6383, icon: FileText },
    { id: 'content-media', name: isZh ? '内容与媒体' : 'Content & Media', count: 6290, icon: MonitorPlay },
    { id: 'research', name: isZh ? '研究' : 'Research', count: 2912, icon: Microscope },
    { id: 'databases', name: isZh ? '数据库' : 'Databases', count: 1695, icon: Database },
    { id: 'lifestyle', name: isZh ? '生活方式' : 'Lifestyle', count: 1432, icon: Coffee },
    { id: 'blockchain', name: isZh ? '区块链' : 'Blockchain', count: 739, icon: Bitcoin },
  ];
});
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <a 
      v-for="cat in categoriesDisplay" 
      :key="cat.id"
      :href="`/${lang === 'zh' ? 'zh/' : ''}categories/${cat.id}.html`"
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

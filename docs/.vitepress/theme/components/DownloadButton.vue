// docs/.vitepress/theme/components/DownloadButton.vue
<script setup lang="ts">
import { Download, Loader2 } from 'lucide-vue-next';
import { useSkillDownload, type Skill } from '../composables/useSkillDownload';

const props = defineProps<{
  skill: Skill
}>();

const { downloadSkill, loading, status } = useSkillDownload();

const handleDownload = (event: Event) => {
  event.preventDefault(); // Prevent navigation if button is inside a link
  event.stopPropagation();
  downloadSkill(props.skill);
};
</script>

<template>
  <button
    @click.stop="handleDownload"
    :disabled="loading"
    class="btn-primary"
    :title="status || '下载此 Skill'"
  >
    <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
    <Download v-else class="w-4 h-4" />
    <span>{{ loading ? '打包中...' : '下载 Skill' }}</span>
  </button>
</template>

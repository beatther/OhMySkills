// docs/.vitepress/theme/components/DownloadProgress.vue
<script setup lang="ts">
import { Loader2, X, CheckCircle2, AlertCircle } from 'lucide-vue-next';

defineProps<{
  loading: boolean;
  progress: number;
  status: string;
  error?: string;
}>();

defineEmits(['close']);
</script>

<template>
  <div v-if="loading || status || error" class="fixed bottom-6 right-6 z-50 animate-fade-in-up">
    <div class="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 w-[320px]">
      <div class="flex items-start justify-between mb-3">
        <h4 class="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Loader2 v-if="loading" class="w-4 h-4 animate-spin text-blue-500" />
          <CheckCircle2 v-else-if="!error" class="w-4 h-4 text-green-500" />
          <AlertCircle v-else class="w-4 h-4 text-red-500" />
          <span>{{ error ? '下载失败' : (loading ? '下载中' : '下载完成') }}</span>
        </h4>
        <button v-if="!loading" @click="$emit('close')" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <X class="w-4 h-4" />
        </button>
      </div>

      <div class="space-y-2">
        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div 
            class="h-full bg-blue-500 transition-all duration-300"
            :class="{ '!bg-red-500': error, '!bg-green-500': !loading && !error }" 
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 truncate">
          {{ error || status }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out;
}
</style>

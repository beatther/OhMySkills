// docs/.vitepress/theme/components/PlatformSelector.vue
<script setup lang="ts">
import { ref } from 'vue';
import { PLATFORMS, type Platform } from '../composables/useSkillDownload';

const selectedPlatformId = ref(PLATFORMS.find(p => p.id === 'antigravity')?.id || PLATFORMS[0].id);

const selectPlatform = (platform: Platform) => {
  selectedPlatformId.value = platform.id;
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
    <div
      v-for="platform in PLATFORMS"
      :key="platform.id"
      @click="selectPlatform(platform)"
      class="cursor-pointer border rounded-lg p-3 transition-all"
      :class="selectedPlatformId === platform.id
        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-500'
        : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'"
    >
      <div class="flex items-center justify-between mb-1">
        <span class="font-medium text-slate-900 dark:text-slate-100">{{ platform.name }}</span>
        <div 
          class="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center bg-white dark:bg-slate-800"
          :class="{ '!border-blue-500 !bg-blue-500': selectedPlatformId === platform.id }"
        >
          <div v-if="selectedPlatformId === platform.id" class="w-1.5 h-1.5 rounded-full bg-white"></div>
        </div>
      </div>
      <div class="text-xs text-slate-500 dark:text-slate-400 mb-2">{{ platform.description }}</div>
      <div class="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-1.5 rounded text-slate-600 dark:text-slate-300 truncate">
        {{ platform.installPath }}
      </div>
    </div>
  </div>
</template>

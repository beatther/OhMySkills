// docs/.vitepress/theme/components/SkillsLayout.vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { skills, type Skill } from '../data/skills';
import SkillCard from './SkillCard.vue';
import BatchDownload from './BatchDownload.vue';
import { Search } from 'lucide-vue-next';

// Filters
const searchQuery = ref('');
const activeCategory = ref('All');

const categories = ['All', ...new Set(skills.map(s => s.category))];

const filteredSkills = computed(() => {
  return skills.filter(skill => {
    // Search Filter
    const query = searchQuery.value.toLowerCase();
    const searchMatch = !query || 
      skill.name.toLowerCase().includes(query) || 
      skill.description.toLowerCase().includes(query) ||
      skill.tags.some(t => t.toLowerCase().includes(query));

    // Category Filter
    const catMatch = activeCategory.value === 'All' || skill.category === activeCategory.value;

    return searchMatch && catMatch;
  });
});

// Selection Logic
const selectedSkills = ref<Skill[]>([]);

const toggleSelection = (skill: Skill) => {
  const index = selectedSkills.value.findIndex(s => s.id === skill.id);
  if (index === -1) {
    selectedSkills.value.push(skill);
  } else {
    selectedSkills.value.splice(index, 1);
  }
};

const clearSelection = () => {
  selectedSkills.value = [];
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-10 text-center">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Explore Skills</h1>
      <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Browse our collection of high-quality agent skills suitable for various platforms including Antigravity.
      </p>
    </div>

    <!-- Toolbar -->
    <div class="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sticky top-[64px] z-10 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 dark:border-slate-800">
      
      <!-- Search -->
      <div class="relative w-full md:w-96">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search skills, tags, descriptions..." 
          class="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <!-- Categories -->
      <div class="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border"
          :class="[
             activeCategory === cat 
               ? 'bg-blue-600 text-white border-blue-600' 
               : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Grid -->
    <div v-if="filteredSkills.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <SkillCard 
        v-for="skill in filteredSkills" 
        :key="skill.id" 
        :skill="skill"
        :selected="selectedSkills.some(s => s.id === skill.id)"
        @toggle-select="toggleSelection(skill)"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20">
      <p class="text-slate-500 dark:text-slate-400 text-lg">No skills found matching your criteria.</p>
      <button 
        @click="searchQuery = ''; activeCategory = 'All'" 
        class="mt-4 text-blue-600 hover:text-blue-500 font-medium"
      >
        Clear filters
      </button>
    </div>
  </div>
  
  <Teleport to="body">
    <div v-if="selectedSkills.length > 0" class="fixed bottom-6 right-6 z-50">
       <BatchDownload :selected-skills="selectedSkills" @clear="clearSelection" />
    </div>
  </Teleport>
</template>

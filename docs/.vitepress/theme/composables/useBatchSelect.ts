// docs/.vitepress/theme/composables/useBatchSelect.ts
import { ref, computed } from 'vue';
import type { Skill } from '../data/skills';

export function useBatchSelect(allSkills: Skill[]) {
  const selectedIds = ref<Set<string>>(new Set());

  const selectedSkills = computed(() => {
    return allSkills.filter(skill => selectedIds.value.has(skill.id));
  });

  const isSelected = (id: string) => selectedIds.value.has(id);

  const toggleSelect = (id: string) => {
    if (selectedIds.value.has(id)) {
      selectedIds.value.delete(id);
    } else {
      selectedIds.value.add(id);
    }
  };

  const selectAll = () => {
    // 仅全选当前页或前 50 个，避免过多
    const idsToAdd = allSkills.slice(0, 50).map(s => s.id);
    idsToAdd.forEach(id => selectedIds.value.add(id));
  };

  const clearSelection = () => {
    selectedIds.value.clear();
  };

  return {
    selectedIds,
    selectedSkills,
    isSelected,
    toggleSelect,
    selectAll,
    clearSelection
  };
}

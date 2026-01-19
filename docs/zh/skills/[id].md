---
layout: page
---

<script setup>
import { useData } from 'vitepress'
import { skills } from '../../../.vitepress/theme/data/skills'
import SkillDetail from '../../../.vitepress/theme/components/SkillDetail.vue'

const { params } = useData()

// Find the skill data based on the ID parameter
const skill = skills.find(s => s.id === params.value.id)
</script>

<SkillDetail v-if="skill" :skill="skill" />
<div v-else>未找到该技能</div>

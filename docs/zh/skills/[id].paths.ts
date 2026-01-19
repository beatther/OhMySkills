import { skills } from '../../.vitepress/theme/data/skills'

export default {
  paths() {
    return skills.map((skill) => {
      return {
        params: { id: skill.id, name: skill.name, description: skill.description, author: skill.author, category: skill.category, version: skill.version }
      }
    })
  }
}

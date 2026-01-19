// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

// Components
import SkillCard from './components/SkillCard.vue'
import DownloadButton from './components/DownloadButton.vue'
import BatchDownload from './components/BatchDownload.vue'
import PlatformSelector from './components/PlatformSelector.vue'
import CopyCommand from './components/CopyCommand.vue'
import CategoryGrid from './components/CategoryGrid.vue'
import StatsCard from './components/StatsCard.vue'
import LanguageSwitch from './components/LanguageSwitch.vue'
import DownloadProgress from './components/DownloadProgress.vue'
import SkillsLayout from './components/SkillsLayout.vue'

// Logic
import { useBatchSelect } from './composables/useBatchSelect'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Slots if needed
      // Remove BatchDownload from here to avoid prop issues or pass initial props if needed.
      // BatchDownload expects 'selectedSkills' prop which is required.
      // It's better to use it inside SkillsLayout or provide state globally.
    })
  },
  enhanceApp({ app }) {
    app.component('SkillCard', SkillCard)
    app.component('DownloadButton', DownloadButton)
    app.component('BatchDownload', BatchDownload)
    app.component('PlatformSelector', PlatformSelector)
    app.component('CopyCommand', CopyCommand)
    app.component('CategoryGrid', CategoryGrid)
    app.component('StatsCard', StatsCard)
    app.component('LanguageSwitch', LanguageSwitch)
    app.component('DownloadProgress', DownloadProgress)
    app.component('SkillsLayout', SkillsLayout)
    
    // Make batch select globally available if needed, or just import in components
    // app.provide('batchSelect', useBatchSelect())
  }
}

// docs/.vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OhMySkills",
  description: "Top 100 Agent Skills & Prompts Collection",
  
  // Design: Blue primary color is handled in CSS, but check standard config
  appearance: 'dark', // Default to dark mode or auto? Design docs imply clean look. Let's stick to default/auto.

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Font setup
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'OhMySkills',

    nav: [
      { text: 'Skills', link: '/skills/' },
      { text: 'Categories', link: '/categories/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Submit', link: 'https://github.com/your-repo/submit' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo' },
      { icon: 'twitter', link: 'https://twitter.com/your-handle' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 OhMySkills. Built for the AI Community.'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search skills...',
            buttonAriaLabel: 'Search skills'
          },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Reset search',
            backButtonTitle: 'Close search',
            noResultsText: 'No results for',
            footer: {
              selectText: 'to select',
              selectKeyAriaLabel: 'Enter key',
              navigateText: 'to navigate',
              navigateUpKeyAriaLabel: 'Up arrow',
              navigateDownKeyAriaLabel: 'Down arrow',
              closeText: 'to close',
              closeKeyAriaLabel: 'Escape key'
            }
          }
        }
      }
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '技能广场', link: '/zh/skills/' },
          { text: '分类', link: '/zh/categories/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '提交', link: 'https://github.com/your-repo/submit' }
        ],
        footer: {
          message: '基于 MIT 许可发布',
          copyright: '版权所有 © 2024 OhMySkills'
        }
      }
    }
  }
})

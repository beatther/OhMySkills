export default {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          light: '#DBEAFE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}

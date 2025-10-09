import type { Config } from 'tailwindcss'

import { heroui } from '@heroui/react'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/*.html', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: { sm: '768px', md: '1024px', lg: '1360px' },
  },
  darkMode: 'class',
  plugins: [heroui()],
}

export default config

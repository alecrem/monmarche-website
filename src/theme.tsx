import { createSystem, defaultConfig } from '@chakra-ui/react'

const fonts = { mono: { value: `'Menlo', monospace` } }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        text: { value: '#16161D' },
        heroGradientStart: { value: '#7928CA' },
        heroGradientEnd: { value: '#FF0080' },
        black: { value: '#16161D' },
      },
      radii: {
        button: { value: '12px' },
      },
      fonts,
    },
    breakpoints,
  },
})

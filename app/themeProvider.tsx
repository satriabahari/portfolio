'use client'

import { ThemeProvider } from 'next-themes'
import {ReactNode} from 'react'

export function ThemeProviderContext({children}: {children: ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}


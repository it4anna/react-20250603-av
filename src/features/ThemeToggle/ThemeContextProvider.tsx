import { useCallback, useState } from 'react'
import { type providerProps } from '../../types'
import { ThemeContext } from './ThemeContext'

export const ThemeContextProvider = ({ children }: providerProps) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [setTheme, theme],
  )

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}

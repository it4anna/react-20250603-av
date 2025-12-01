import {createContext, useState} from 'react'
import { type providerProps } from '../../types'

export const ThemeContext = createContext('light')

export const ThemeContextProvider= ({ children }: providerProps) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
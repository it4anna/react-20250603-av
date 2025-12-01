import { Button } from '../Button/Button'
import { useTheme } from './useTheme'

export const ThemeToggleButton = () => {
  const {toggleTheme} = useTheme()

  return <Button onClick={toggleTheme}>Toggle Theme</Button>
}

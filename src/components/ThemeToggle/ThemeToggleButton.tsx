import { Button } from '../Button/Button'
import { useTheme } from './useTheme'
import styles from './ThemeToggleButton.module.scss'

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme()

  return (
    <Button className={styles.themeToggleButton} onClick={toggleTheme}>
      Toggle Theme
    </Button>
  )
}

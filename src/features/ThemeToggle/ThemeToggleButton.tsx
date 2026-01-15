import { Button } from '../../components'
import { useTheme } from '../../app/hooks'
import styles from './ThemeToggleButton.module.scss'

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme()

  return (
    <Button className={styles.themeToggleButton} onClick={toggleTheme}>
      Toggle Theme
    </Button>
  )
}

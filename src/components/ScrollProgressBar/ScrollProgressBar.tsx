import { useProgress } from './useProgress'
import styles from './ScrollProgressBar.module.css'

export const ScrollProgressBar = () => {
  const width = useProgress()

  return <div style={{ width }} className={styles.scrollProgressBar} />
}

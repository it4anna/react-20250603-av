import { Header } from './Header'
import { Footer } from './Footer'
import { useTheme } from '../../app/hooks'
import styles from './Layout.module.scss'
import classNames from 'classnames'

export const Layout = ({ children }: any) => {
  const { theme } = useTheme()
  return (
    <div
      className={classNames(styles.restaurantsContainer, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
    >
      <Header />
      <div>{children}</div>
      <Footer>Vostrykova©</Footer>
    </div>
  )
}

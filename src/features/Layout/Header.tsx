import { useAuthorization } from '../../app/hooks'
import { CartModal } from '../Cart/CartModal'
import { LoginButton } from '../LoginButton/LoginButton'
import { ThemeToggleButton } from '../ThemeToggle/ThemeToggleButton'
import styles from './Header.module.css'

export const Header = () => {
  const {isAuthorized} = useAuthorization()
  return (
  <header className={styles.header}>
    <LoginButton />
    <ThemeToggleButton />
    {isAuthorized ? <CartModal /> : null}
  </header>
)}

import { LoginButton } from '../LoginButton/LoginButton'
import { ThemeToggleButton } from '../ThemeToggle/ThemeToggleButton'

export const Header = () => (
  <header>
    <LoginButton />
    <ThemeToggleButton />
    <h1>Restaurants:</h1>
  </header>
)

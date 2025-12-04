import { Button } from '../Button/Button'
import { useUser } from './useUser'
import styles from './LoginButton.module.scss'
import { useLoginLabel } from './useLoginLabel'

export const LoginButton = () => {
  const { userName, toggleUserName } = useUser()
  const label = useLoginLabel('Login')

  return (
    <div className={styles.LogginButton}>
      <h4>{userName}</h4>
      <Button onClick={toggleUserName}>{label}</Button>
    </div>
  )
}

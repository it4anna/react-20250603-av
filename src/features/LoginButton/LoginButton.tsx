import { Button } from '../../components'
import { useAuthorization } from '../../app/hooks'
import styles from './LoginButton.module.scss'

export const LoginButton = () => {
  const { userName, isAuthorized, toggleUserName } = useAuthorization()
  const label = !isAuthorized ? 'Login' : 'Loout'

  return (
    <div className={styles.LogginButton}>
      <h4>{userName}</h4>
      <Button onClick={toggleUserName}>{label}</Button>
    </div>
  )
}

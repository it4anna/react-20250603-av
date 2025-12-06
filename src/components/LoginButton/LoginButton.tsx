import { Button } from '../Button/Button'
import { useUser } from './useUser'
import styles from './LoginButton.module.scss'
import { useMemo } from 'react'

export const LoginButton = () => {
  const { userName, toggleUserName } = useUser()
  // Question: for case with heawy calculation, but for this example is it oveengeneering?
  // const label = useMemo(()=> !userName ? 'Login' : 'Loout', [userName])

  const label = !userName ? 'Login' : 'Loout'

  return (
    <div className={styles.LogginButton}>
      <h4>{userName}</h4>
      <Button onClick={toggleUserName}>{label}</Button>
    </div>
  )
}

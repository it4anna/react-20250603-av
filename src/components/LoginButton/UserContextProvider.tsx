import { useCallback, useState } from 'react'
import { type providerProps } from '../../types'
import { UserContext } from './UserContext'

export const UserContextProvider = ({ children }: providerProps) => {
  const [userName, setUserName] = useState()
  const toggleUserName = useCallback(
    () => setUserName(userName === 'Anna' ? '' : 'Anna'),
    [userName, setUserName],
  )

  return (
    <UserContext value={{ userName, toggleUserName }}>{children}</UserContext>
  )
}

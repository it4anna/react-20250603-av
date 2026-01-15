import { useCallback, useEffect, useState } from 'react'
import { type providerProps } from '../../types'
import { UserContext } from './UserContext'

export const UserContextProvider = ({ children }: providerProps) => {
  const [userName, setUserName] = useState('Anna')
  const [isAuthorized, setIsAuthorized] = useState(true)
  const toggleUserName = useCallback(
    () => setUserName((prev) => (prev === 'Anna' ? '' : 'Anna')),
    [],
  )

  useEffect(() => {
    setIsAuthorized(!!userName)
  }, [userName])
  
  return (
    <UserContext.Provider value={{ userName, isAuthorized, toggleUserName }}>
      {children}
    </UserContext.Provider>
  )
}

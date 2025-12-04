import { useEffect, useState } from 'react'
import { useUser } from './useUser'

export const useLoginLabel = (initialState: string) => {
  const [label, setLabel] = useState(initialState)
  const { user } = useUser()

  useEffect(() => {
    setLabel(user ? 'Logout' : 'Login')
  }, [user, setLabel])

  return label
}

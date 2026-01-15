import { createContext } from 'react'

export type UserContextShape = {
  userName: string
  isAuthorized: boolean
  toggleUserName: () => void
}

export const UserContext = createContext<UserContextShape>({
  userName: '',
  isAuthorized: false,
  toggleUserName: () => {},
})

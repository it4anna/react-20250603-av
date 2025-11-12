import { useState } from 'react'

export const useCount = (initialState: number) => {
  const [count, setCount] = useState(initialState)
  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)

  return { count, increase, decrease }
}

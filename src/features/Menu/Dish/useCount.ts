import { useCallback, useState } from 'react'

export const useCount = (initialState: number) => {
  const [count, setCount] = useState(initialState)
  const increase = useCallback(() => setCount(count + 1), [setCount, count])
  const decrease = useCallback(() => setCount(count - 1), [setCount, count])

  return { count, increase, decrease }
}

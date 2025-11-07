import { useState } from 'react'
import { MAX_QUANITITY, MIN_QUANITITY } from '../utils/constants'

export const useCount = (initialState: number) => {
  const [count, setCount] = useState(initialState)
  const increase = () => count < MAX_QUANITITY && setCount(count + 1)
  const decrease = () => count > MIN_QUANITITY && setCount(count - 1)
  const onReset = () => setCount(0)
  
  return { count, increase, decrease, onReset }
}

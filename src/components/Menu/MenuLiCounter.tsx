import { type MenuLiCounterProps } from '../../types'
import { useCount } from './useCount'
import { Counter } from '../'

export const MenuLiCounter = ({ value = 0 }: MenuLiCounterProps) => {
  const { count, increase, decrease } = useCount(value)

  return <Counter count={count} decrease={decrease} increase={increase} />
}

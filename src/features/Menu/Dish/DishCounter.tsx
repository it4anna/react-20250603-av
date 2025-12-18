import { type DishCounterProps } from '../../../types'
import { Counter } from '../../../components/Counter/Counter'
import { useCount } from './useCount'

export const DishCounter = ({ value = 0 }: DishCounterProps) => {
  const { count, increase, decrease } = useCount(value)

  return <Counter count={count} decrease={decrease} increase={increase} />
}

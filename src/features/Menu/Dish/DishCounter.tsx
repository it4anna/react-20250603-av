import { type DishCounterProps } from '../../../types'
import { Counter } from '../../../components/Counter/Counter'
import { useCount } from './useCount'

export const DishCounter = ({ id }: DishCounterProps) => {
  const { count = 0, increase, decrease } = useCount(id)

  return <Counter count={count} decrease={decrease} increase={increase} />
}

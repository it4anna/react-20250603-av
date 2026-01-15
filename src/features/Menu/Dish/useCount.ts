import { useCallback } from 'react'
import { useCart } from '../../../app/hooks'

export const useCount = (id: string) => {
  const { upsertItem, getCartItemCountByID } = useCart()
  const count = getCartItemCountByID(id)

  const increase = useCallback(
    () => upsertItem({ id, count: count + 1 || 2 }),
    [count],
  )
  const decrease = useCallback(
    () => upsertItem({ id, count: count - 1 || 0 }),
    [count],
  )

  return { count, increase, decrease }
}

import { useDishes, useCart } from '../../app/hooks'

export const useTotalPrice = (id: string) => {
  const { getDishById } = useDishes()
  const { getCartItemCountByID } = useCart()
  const count = getCartItemCountByID(id)
  const { price } = getDishById(id)
  console.log(price, count)

  return price * count
}

import { useCart, useDishes, useAuthorization } from '../../app/hooks'
import { Dish } from '../Menu/Dish/Dish'
import { useTotalPrice } from './useTotalPrice'
import type { CartItemProps } from '../../types'

const CartItem = ({ id, name }: CartItemProps) => {
  const totalPrice = useTotalPrice(id)

  return <Dish id={id} name={name} price={totalPrice} />
}

export const Cart = () => {
  const { isAuthorized } = useAuthorization()
  const { cartIds, cartTotal } = useCart()
  const { getDishesByIds } = useDishes()
  const dishes = getDishesByIds(cartIds)

  if (!isAuthorized) return null

  return (
    <>
      <h2>Cart</h2>
      {dishes.map((dish) => (
        <CartItem {...dish} key={dish.id} />
      ))}
      <hr />
      Total: ${cartTotal.toFixed(2)}
    </>
  )
}

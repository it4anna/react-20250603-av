import { useQuantity } from '../../hooks/useQuantity'
import {Button} from '..'

export const MenuLiQuantityBar = () => {
  const {quantity, increaseQuantity, decreaseQuantity} = useQuantity(0)

  return (
    <div className='dish-buttons'>
      <Button value='Remove' onClick={decreaseQuantity} />
      <span>{quantity}</span>
      <Button value='Add' onClick={increaseQuantity} />
    </div>
  )
}
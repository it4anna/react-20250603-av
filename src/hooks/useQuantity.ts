import {useState} from 'react'
import {MAX_QUANITITY, MIN_QUANITITY} from '../utils/constants'

export const useQuantity = (initialState: number) => {
  const [quantity, setQuantity] = useState(initialState);
  const increaseQuantity = () => quantity < MAX_QUANITITY && setQuantity(quantity + 1)
  const decreaseQuantity = () => quantity > MIN_QUANITITY && setQuantity(quantity - 1)

  return {quantity, increaseQuantity, decreaseQuantity}
}

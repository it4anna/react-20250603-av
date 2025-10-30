import {type DishProps} from '../types'
import { toCapitalize } from '../utils/helpers'
import { useQuontity } from '../hooks/useQuontity'
import {Button} from './'

const MenuLi = ({name, price, ingredients}: DishProps) => (
  <li>
    <div className='header'>
      <h4>{name}</h4>
      <h4>{price}</h4>
    </div>
    <p>{toCapitalize(ingredients)}</p>
  </li>
)
// TODO: Fix -1 dish quontity 
export const Dish = (props: DishProps) => {
  const {quontity, increaseQuontity, decreaseQuontity} = useQuontity(0)
  return (
    <>
      <MenuLi {...props}/>
      <div className='dish-buttons'>
        <Button value='Remove' onClick={decreaseQuontity} />
        <span>{quontity}</span>
        <Button value='Add' onClick={increaseQuontity} />
      </div>
    </>
  )
}
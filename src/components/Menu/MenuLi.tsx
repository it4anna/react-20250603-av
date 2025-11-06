import {type MenuLiProps} from '../../types'
import { toCapitalize } from '../../utils/helpers'
import {Counter} from '../'

export const MenuLi = ({name, price, ingredients}: MenuLiProps) => (
  <li>
    <div className='header'>
      <h4>{name}</h4>
      <h4>{price}</h4>
    </div>
    <p>{toCapitalize(ingredients)}</p>
    <Counter />
  </li>
)

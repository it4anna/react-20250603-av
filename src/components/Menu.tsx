import {type MenuProps, type DishProps} from '../types'
import {Dish} from './'

export const Menu = ({menu}: MenuProps) => (
  <>
    <h3>Menu:</h3>
    <ul>
      {menu.map((menuItem: DishProps) => <Dish {...menuItem} key={menuItem.id} />)}
    </ul>
  </>
)
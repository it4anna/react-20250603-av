import { type MenuProps, type MenuLiProps } from '../../types'
import { Dish } from './Dish/Dish'

export const Menu = ({ menu }: MenuProps) => (
  <>
    <h3>Menu:</h3>
    <ul>
      {menu.map((menuItem: MenuLiProps) => (
        <Dish {...menuItem} key={menuItem.id} />
      ))}
    </ul>
  </>
)

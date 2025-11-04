import {type MenuProps, type MenuLiProps} from '../../types'
import {MenuLi} from '..'

export const Menu = ({menu}: MenuProps) => (
  <>
    <h3>Menu:</h3>
    <ul>
      {menu.map((menuItem: MenuLiProps) => <MenuLi {...menuItem} key={menuItem.id} />)}
    </ul>
  </>
)
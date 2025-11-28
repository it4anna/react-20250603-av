import { type MenuLiProps } from '../../types'
import { toCapitalize } from '../../utils/helpers'
import { MenuLiCounter } from './MenuLiCounter'
import styles from './MenuLi.module.css'

export const MenuLi = ({ name, price, ingredients }: MenuLiProps) => (
  <li>
    <div className={styles.header}>
      <h4>{name}</h4>
      <h4>{price}</h4>
    </div>
    <p>{toCapitalize(ingredients)}</p>
    <MenuLiCounter />
  </li>
)

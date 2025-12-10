import { type MenuLiProps } from '../../types'
import { toCapitalize } from '../../utils/helpers'
import { MenuLiCounter } from './MenuLiCounter'
import styles from './MenuLi.module.css'
import { useUser } from '../LoginButton/useUser'

export const MenuLi = ({ name, price, ingredients }: MenuLiProps) => {
  const { userName } = useUser()

  return (
    <li>
      <div className={styles.header}>
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      <p>{toCapitalize(ingredients)}</p>
      {userName ? <MenuLiCounter /> : ''}
    </li>
  )
}

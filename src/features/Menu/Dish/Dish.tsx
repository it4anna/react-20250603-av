import { type MenuLiProps } from '../../../types'
import { toCapitalize } from '../../../utils/helpers'
import { DishCounter } from './DishCounter'
import styles from './Dish.module.css'
import { useAuthorization } from '../../../app/hooks'

export const Dish = ({ name, price, ingredients }: MenuLiProps) => {
  const { userName } = useAuthorization()

  return (
    <li>
      <div className={styles.header}>
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      <p>{toCapitalize(ingredients)}</p>
      {userName ? <DishCounter /> : ''}
    </li>
  )
}

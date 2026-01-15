import { type DishProps } from '../../../types'
import { toCapitalize } from '../../../utils/helpers'
import { useAuthorization } from '../../../app/hooks'
import { DishCounter } from './DishCounter'
import styles from './Dish.module.css'

export const Dish = ({ id, name, price, ingredients }: DishProps) => {
  const { isAuthorized } = useAuthorization()

  return (
    <li>
      <div className={styles.header}>
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      {ingredients ? <p>{toCapitalize(ingredients)}</p> : null}
      {isAuthorized ? <DishCounter id={id} /> : null}
    </li>
  )
}

import classnames from 'classnames'
import {
  type RestaurantTabsProps,
  type NormalizedRestaurantProps,
} from '../../types'
import styles from './RestaurantButtons.module.css'

export const RestaurantButtons = ({
  activeId,
  onClick,
  restaurants,
}: RestaurantTabsProps) =>
  restaurants.map(({ id, name }: NormalizedRestaurantProps) => (
    <button
      className={classnames(styles.restarantButtons, {
        [styles.active]: activeId === id,
      })}
      onClick={() => onClick(id)}
      key={id}
    >
      {name}
    </button>
  ))

import classnames from 'classnames'
import { type RestaurantTabsProps, type RestaurantProps } from '../../types'
import { RESTAURANTS } from '../../utils/constants'
import styles from './RestaurantButtons.module.css'

export const RestaurantButtons = ({ activeId, onClick }: RestaurantTabsProps) =>
  RESTAURANTS.map(({ id, name }: RestaurantProps) => (
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

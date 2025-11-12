import { type RestaurantTabsProps, type RestaurantProps } from '../../types'
import { RESTAURANTS } from '../../utils/constants'

export const RestaurantButtons = ({ activeId, onClick }: RestaurantTabsProps) =>
  RESTAURANTS.map(({ id, name }: RestaurantProps) => (
    <button
      className={`${id === activeId ? 'active-' : ''}resarant-tab`}
      onClick={() => onClick(id)}
      key={id}
    >
      {name}
    </button>
  ))

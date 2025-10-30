import {type RestaurantTabsProps, type RestaurantProps} from '../types'
import {RESTAURANTS} from '../utils/constants'

export const RestaurantTabs = ({activeId, onClick}: RestaurantTabsProps) => {
  return RESTAURANTS.map(({id, name}: RestaurantProps) => (
    <h2 
      className={`${id === activeId ? 'active-' : ''}resarant-tab`}
      onClick={() => onClick(id)}
      key={id}
    >
      {name}
    </h2>
  ))
}
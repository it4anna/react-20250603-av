import {useState} from 'react'
import {FIRST_REST_ID, RESTAURANTS} from '../utils/constants'
import {getItemById} from '../utils/helpers'
import {RestaurantButtons, Restaurant} from './'

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(FIRST_REST_ID)

  return <>
    <RestaurantButtons activeId={activeRestaurantId} onClick={setActiveRestaurantId} />
    <Restaurant {...getItemById(activeRestaurantId, RESTAURANTS)} key={activeRestaurantId} />
  </>
}

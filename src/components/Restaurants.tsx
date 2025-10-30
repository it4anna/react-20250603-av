import {useState} from 'react'
import {FIRST_REST_ID, RESTAURANTS} from '../utils/constants'
import {getItemById} from '../utils/helpers'
import {RestaurantTabs, Restaurant} from './'

export const Restaurants = () => {
  const [id, setId] = useState(FIRST_REST_ID);
  return (
  <>
    <RestaurantTabs activeId={id} onClick={setId} />
    <Restaurant {...getItemById(id, RESTAURANTS)} key={id} />
  </>
)}
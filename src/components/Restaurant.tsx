import {type RestaurantProps} from '../types'
import {Menu, Reviews, ReviewForm} from './'

export const Restaurant = ({name, menu, reviews}: RestaurantProps) => {
if(!name) return null
  return <>
    <h3>{name}</h3>
    <Menu menu={menu} />
    <Reviews reviews={reviews} />
    <ReviewForm />
  </>
}

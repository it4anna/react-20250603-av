import {type RestaurantProps} from '../types'
import {Reviews, Menu} from './'

// TODO: Optimize the code duplication for these wto components: Reviews and Menu
// Question: Abot "Simmple/Stupid": When decombine components when to stop? Is this file as example ... is it not too much?
export const Restaurant = ({name, menu, reviews}: RestaurantProps) => (
  <>
    <h3>{name}</h3>
    <Menu menu={menu} />
    <Reviews reviews={reviews} />
  </>
)
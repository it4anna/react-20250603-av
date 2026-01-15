import { Menu, Reviews, ReviewForm } from '..'
import type { RestaurantProps } from '../../types'

export const Restaurant = ({ name, menu, reviews, id }: RestaurantProps) => {
  if (!name) return null
  return (
    <>
      <h3>{name}</h3>
      <Menu dishesIds={menu} />
      <Reviews reviewsIds={reviews} />
      <ReviewForm key={id} />
    </>
  )
}

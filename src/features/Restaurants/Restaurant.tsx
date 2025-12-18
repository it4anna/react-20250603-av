import { Menu, Reviews, ReviewForm } from '..'
import { useDishes, useReviews } from '../../app/hooks'
import type { RestaurantProps } from '../../types'

export const Restaurant = ({
  id,
  name,
  menu: menuIds,
  reviews: reviewsIds,
}: RestaurantProps) => {
  const { getDishByIds } = useDishes()
  const { getReviewsByIds } = useReviews()
  const menu = getDishByIds(menuIds)
  const reviews = getReviewsByIds(reviewsIds)

  if (!name) return null
  return (
    <>
      <h3>{name}</h3>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <ReviewForm key={id} />
    </>
  )
}

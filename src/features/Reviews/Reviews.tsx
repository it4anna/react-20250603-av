import { useReviews } from '../../app/hooks'
import type { ReviewProps, ReviewsProps } from '../../types'
import { Review } from './Review'

export const Reviews = ({ reviewsIds }: ReviewsProps) => {
  const { getReviewsByIds } = useReviews()
  const reviews = getReviewsByIds(reviewsIds)

  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review: ReviewProps) => (
          <Review {...review} key={review.id} />
        ))}
      </ul>
    </>
  )
}

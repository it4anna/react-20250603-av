import type { ReviewProps, ReviewsProps } from '../../types'
import { Review } from './Review'

export const Reviews = ({ reviews }: ReviewsProps) => (
  <>
    <h3>Reviews:</h3>
    <ul>
      {reviews.map((review: ReviewProps) => (
        <Review {...review} key={review.id} />
      ))}
    </ul>
  </>
)

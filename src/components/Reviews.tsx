import {type ReviewsProps, type DishProps} from '../types'
import {Review} from './'

export const Reviews = ({reviews}: ReviewsProps) => (
  <>
    <h3>Reviews:</h3>
    <ul>
      {reviews.map((menuItem: DishProps) => <Review {...menuItem} key={menuItem.id} />)}
    </ul>
  </>
)
// TODO: Figurout why line 9 shows error
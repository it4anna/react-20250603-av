import { Counter } from '..'
import { REVIEW_PLACEHOLDER } from '../../utils/constants'
import { useReviewForm } from './useReviewForm'

export const ReviewForm = () => {
  const {
    review,
    onUserUpdate,
    decreaseRating,
    increaseRating,
    onTextUpdate,
    onReset,
  } = useReviewForm()
  const { user, text, rating } = review

  return (
    <div className="review-form">
      <h3>Create review:</h3>
      <label>Name:</label>
      <input value={user} onChange={(e) => onUserUpdate(e.target.value)} />
      <Counter
        count={rating}
        decrease={decreaseRating}
        increase={increaseRating}
      />
      <textarea
        rows={5}
        cols={30}
        placeholder={REVIEW_PLACEHOLDER}
        value={text}
        onChange={(e) => onTextUpdate(e.target.value)}
      />
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

import { Counter } from '../../components'
import { Button } from '../../components'
import { useReviewForm } from './useReviewForm'
import styles from './ReviewForm.module.scss'
import { useAuthorization } from '../../app/hooks'

const REVIEW_PLACEHOLDER = 'Share details of your own experience at this place'
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
  const { userName } = useAuthorization()

  if (!userName) return ''

  return (
    <div className="review-form">
      <h3>Create review:</h3>
      <label>Name:</label>
      <input value={user} onChange={(e) => onUserUpdate(e.target.value)} />
      <Counter
        customeStyle={styles.counter}
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
      <Button onClick={onReset} className={styles.button}>
        Reset
      </Button>
    </div>
  )
}

import { Button } from '../index'
import {Counter} from '..'
import { REVIEW_PLACEHOLDER } from '../../utils/constants'
import { useReviewForm } from '../../hooks/useReviewForm'
import { useCount } from '../../hooks/useCount'
import { useEffect } from 'react'

export const ReviewForm = () => {
  const { review, handleUpdate, handleClear } = useReviewForm()
  const { count, increase, decrease, onReset } = useCount(review.rating)
  const { user, text, rating } = review
  const onClear = () => {
    handleClear()
    onReset()
  }

  useEffect(() => {//I’m not sure it was a good idea
    if (count !== rating) handleUpdate({rating: count})
  }, [count])

  return (
    <form className="review-form">
      <h3>Create review:</h3>
      <label>Name:</label>
      <input
        value={user}
        onChange={(e) => handleUpdate({ user: e.target.value })}
      />
      <Counter
        count={count}
        decrease={decrease}
        increase={increase}
      />
      <textarea
        name="text"
        rows={5}
        cols={30}
        placeholder={REVIEW_PLACEHOLDER}
        value={text}
        onChange={(e) => handleUpdate({ text: e.target.value })}
      />
      <Button value="Reset" onClick={onClear} />
    </form>
  )
}

import {Counter, Button} from './index'
import {REVIEW_PLACEHOLDER} from '../utils/constants'
import {useReviewForm} from '../hooks/useReviewForm'

export const ReviewForm = () => {
    const {review, handleUpdate, handleClear} = useReviewForm()
    const {user, text, rating} = review;

    return <form className='review-form'>
        <label>Name:</label>
        <input value={user} onChange={(e) => handleUpdate({user: e.target.value})} />
        <Counter value={rating} onChange={handleUpdate} key={rating} />
        <textarea 
            name='text'
            rows={5}
            cols={30}
            placeholder={REVIEW_PLACEHOLDER}
            value={text}
            onChange={(e) => handleUpdate({text: e.target.value})}
        />
        <Button value='Reset' onClick={handleClear} />
    </form>
}

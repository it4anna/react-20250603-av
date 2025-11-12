import { useReducer } from 'react'
import { type actionProps } from '../../types'

const defauldReview = { user: '', text: '', rating: 0 }
const SET_USER_UPDATE_ACTION = 'SET_USER_UPDATE_ACTION'
const SET_TEXT_UPDATE_ACTION = 'SET_TEXT_UPDATE_ACTION'
const SET_DECREASE_RATING_ACTION = 'SET_DECREASE_RATING_ACTION'
const SET_INCREASE_RATING_ACTION = 'SET_INCREASE_RATING_ACTION'
const SET_RESET_ACTION = 'SET_RESET_ACTION'

const reducer = (state: any, { type, payload }: actionProps) => {
  switch (type) {
    case SET_USER_UPDATE_ACTION:
      return { ...state, user: payload }
    case SET_DECREASE_RATING_ACTION:
      return { ...state, rating: --state.rating }
    case SET_INCREASE_RATING_ACTION:
      return { ...state, rating: ++state.rating }
    case SET_TEXT_UPDATE_ACTION:
      return { ...state, text: payload }
    case SET_RESET_ACTION:
      return { ...defauldReview }
    default:
      return state
  }
}

export const useReviewForm = () => {
  const [review, dispatch] = useReducer(reducer, defauldReview)

  const onUserUpdate = (payload?: string) =>
    dispatch({ type: SET_USER_UPDATE_ACTION, payload })
  const decreaseRating = () => dispatch({ type: SET_DECREASE_RATING_ACTION })
  const increaseRating = () => dispatch({ type: SET_INCREASE_RATING_ACTION })
  const onTextUpdate = (payload?: string) =>
    dispatch({ type: SET_TEXT_UPDATE_ACTION, payload })
  const onReset = () => dispatch({ type: SET_RESET_ACTION })

  return {
    review,
    onUserUpdate,
    decreaseRating,
    increaseRating,
    onTextUpdate,
    onReset,
  }
}

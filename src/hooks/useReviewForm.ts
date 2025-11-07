import { useReducer } from 'react'
import { type actionProps } from '../types'

const defauldReview = {
  user: '',
  text: '',
  rating: 0,
}
const SET_UPDATE_ACTION = 'SET_UPDATE_ACTION'
const SET_RESET_ACTION = 'SET_RESET_ACTION'
const reducer = (state: any, { type, payload }: actionProps) => {
  switch (type) {
    case SET_UPDATE_ACTION:
      return { ...state, ...payload }
    case SET_RESET_ACTION:
      return payload
    default:
      return state
  }
}

export const useReviewForm = () => {
  const [review, dispatch] = useReducer(reducer, defauldReview)
  const handleUpdate = (payload: any) =>
    dispatch({
      type: SET_UPDATE_ACTION,
      payload: { ...payload },
    })
  const handleClear = () =>
    dispatch({ type: SET_RESET_ACTION, payload: defauldReview })

  return { review, handleUpdate, handleClear }
}

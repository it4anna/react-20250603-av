import {useState} from 'react'
import {MAXQUONITITY, MINQUONITITY} from '../utils/constants'

export const useQuontity = (initialState: number) => {
  const [quontity, setQuontity] = useState(initialState);
  const increaseQuontity = () => quontity < MAXQUONITITY && setQuontity(quontity + 1)
  const decreaseQuontity = () => quontity > MINQUONITITY && setQuontity(quontity - 2)

  return {quontity, increaseQuontity, decreaseQuontity}
}
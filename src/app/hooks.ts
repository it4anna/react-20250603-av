import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../features/ThemeToggle/ThemeContext'
import { UserContext } from '../features/LoginButton/UserContext'
import {
  setActiveRestaurantId,
  selectAll,
  selectActiveRestaurantId,
  selectActiveRestaurant,
  restaurantsSetAll,
} from '../features/Restaurants/restaurantsSlice'
import {
  dishesSetAll,
  selectDishByIds,
} from '../features/Menu/Dish/dishesSlice'
import {
  selectReviewByIds,
  reviewsSetAll,
} from '../features/Reviews/reviewsSlice'
import { userSetAll, selectUserById } from '../features/LoginButton/usersSlice'
import { selectCart, updateCartItem } from '../features/Cart/cartSlice'
import type {
  NormalizedMenuProps,
  NormalizedRestaurantProps,
  NormalizedReviewsProps,
  NormalizedUsersProps,
  CartItemProps,
} from '../types'

export const useTheme = () => useContext(ThemeContext)
export const useAuthorization = () => useContext(UserContext)
export const useRestaurants = () => {
  const dispatch = useDispatch()
  const setActiveId = (id: String) => dispatch(setActiveRestaurantId(id))
  const addRestaurants = (payload: NormalizedRestaurantProps[]) =>
    dispatch(restaurantsSetAll(payload))
  const restaurants = useSelector(selectAll)
  const activeRestaurantId = useSelector(selectActiveRestaurantId)
  const activeRestaurant = useSelector(selectActiveRestaurant)

  return {
    restaurants,
    activeRestaurantId,
    activeRestaurant,
    setActiveId,
    addRestaurants,
  }
}
export const useDishes = () => {
  const dispatch = useDispatch()
  const addAllDishes = (payload: NormalizedMenuProps[]) =>
    dispatch(dishesSetAll(payload))
  const getDishByIds = (ids: string) =>
    useSelector((state) => selectDishByIds(state, ids))
  return { addAllDishes, getDishByIds }
}

export const useReviews = () => {
  const dispatch = useDispatch()
  const addAllReviews = (payload: NormalizedReviewsProps[]) =>
    dispatch(reviewsSetAll(payload))
  const getReviewsByIds = (ids: string) =>
    useSelector((state) => selectReviewByIds(state, ids))
  return { addAllReviews, getReviewsByIds }
}

export const useUsers = () => {
  const dispatch = useDispatch()
  const addAllUsers = (payload: NormalizedUsersProps[]) =>
    dispatch(userSetAll(payload))
  const getUserById = (ids: string) =>
    useSelector((state) => selectUserById(state, ids))

  return { addAllUsers, getUserById }
}

export const useCart = () => {
  const dispatch = useDispatch()
  const updateItem = (payload: CartItemProps) =>
    dispatch(updateCartItem(payload))
  const getCart = useSelector(selectCart)

  return { getCart, updateItem }
}

import { useContext, useMemo, useCallback } from 'react'
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
  makeSelectDishesByIds,
  makeSelectDishById,
} from '../features/Menu/Dish/dishesSlice'
import {
  reviewsSetAll,
  makeSelectReviewsByIds,
} from '../features/Reviews/reviewsSlice'
import { userSetAll, selectUserById } from '../features/LoginButton/usersSlice'
import {
  selectIds,
  upsertOrRemoveCartItem,
  selectCartItemCountById,
  selectCartItemById,
  selectCartTotal,
} from '../features/Cart/cartSlice'
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
  const addRestaurants = (payload: NormalizedRestaurantProps[]) =>
    dispatch(restaurantsSetAll(payload))
  const restaurants = useSelector(selectAll)
  const activeRestaurantId = useSelector(selectActiveRestaurantId)
  const activeRestaurant = useSelector(selectActiveRestaurant)

  const setActiveId = useCallback(
    (id: string | null) => {
      if (id === activeRestaurantId) return
      dispatch(setActiveRestaurantId(id))
    },
    [dispatch, activeRestaurantId],
  )

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
  const getDishesByIds = (ids: (string | number)[]) => {
    const selectDishes = useMemo(() => makeSelectDishesByIds(ids), [ids])
    return useSelector(selectDishes)
  }
  const getDishById = (id: string) => {
    const selectDish = useMemo(() => makeSelectDishById(id), [id])
    return useSelector(selectDish)
  }

  return { addAllDishes, getDishesByIds, getDishById }
}

export const useReviews = () => {
  const dispatch = useDispatch()
  const addAllReviews = (payload: NormalizedReviewsProps[]) =>
    dispatch(reviewsSetAll(payload))
  const getReviewsByIds = (ids: string[]) => {
    const selectReviews = useMemo(() => makeSelectReviewsByIds(ids), [ids])
    return useSelector(selectReviews)
  }
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
  const upsertItem = (payload: CartItemProps) =>
    dispatch(upsertOrRemoveCartItem(payload))
  const getCartItemByID = (id: string) =>
    useSelector((state) => selectCartItemById(state, id))
  const getCartItemCountByID = (id: string) =>
    useSelector((state) => selectCartItemCountById(state, id))
  const cartIds = useSelector(selectIds)
  const cartTotal = useSelector(selectCartTotal)

  return {
    upsertItem,
    getCartItemCountByID,
    getCartItemByID,
    cartIds,
    cartTotal,
  }
}

import { RestaurantButtons } from './RestaurantButtons'
import {
  useRestaurants,
  useDishes,
  useReviews,
  useUsers,
} from '../../app/hooks'
import { Restaurant } from './Restaurant'
import { useEffect } from 'react'
import {
  normalizedRestaurants,
  normalizedReviews,
  normalizedDishes,
  normalizedUsers,
} from '../../materials/normalized-mock'

export const Restaurants = () => {
  const {
    restaurants,
    activeRestaurantId,
    activeRestaurant,
    addRestaurants,
    setActiveId,
  } = useRestaurants()
  const { addAllDishes } = useDishes()
  const { addAllReviews } = useReviews()
  const { addAllUsers } = useUsers()

  useEffect(() => {
    addRestaurants(normalizedRestaurants)
    addAllReviews(normalizedReviews)
    addAllDishes(normalizedDishes)
    addAllUsers(normalizedUsers)
    setActiveId(normalizedRestaurants[0].id)
  }, [])
  return (
    <>
      <RestaurantButtons
        activeId={activeRestaurantId}
        restaurants={restaurants}
        onClick={setActiveId}
      />
      {activeRestaurant && <Restaurant {...activeRestaurant} />}
    </>
  )
}

import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from '../features/Restaurants/restaurantsSlice'
import dishesReducer from '../features/Menu/Dish/dishesSlice'
import reviewsReducer from '../features/Reviews/reviewsSlice'
import usersReducer from '../features/LoginButton/usersSlice'
import cartReducer from '../features/Cart/cartSlice'

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    reviews: reviewsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>

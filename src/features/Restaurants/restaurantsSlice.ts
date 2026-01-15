import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import type { RestaurantProps } from '../../types'

const restaurantsAdapter = createEntityAdapter<RestaurantProps>({
  selectId: (restaurant) => restaurant.id,
})

const initialState = {
  ...restaurantsAdapter.getInitialState(),
  activeRestaurantId: null,
}

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setActiveRestaurantId: (state, { payload }) => {
      state.activeRestaurantId = payload
    },
    restaurantsSetAll: restaurantsAdapter.addMany,
  },
})

export const { setActiveRestaurantId, restaurantsSetAll } = restaurantsSlice.actions

export const { selectAll, selectById: selectRestaurantById } =
  restaurantsAdapter.getSelectors((state: RootState) => state.restaurants)

export const selectActiveRestaurantId = (state: RootState) =>
  state.restaurants.activeRestaurantId

export const selectActiveRestaurant = (state: RootState) => {
  const selectedId = selectActiveRestaurantId(state)
  return selectedId ? selectRestaurantById(state, selectedId) : null
}

export default restaurantsSlice.reducer

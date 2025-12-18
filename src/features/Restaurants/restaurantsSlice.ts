import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import type { RestaurantProps } from '../../types'

const restaurantsAdapter = createEntityAdapter<RestaurantProps>({
  // Optional: Define how to get the ID if it's not 'id'
  selectId: (restaurant) => restaurant.id,
})

const initialState = {
  ...restaurantsAdapter.getInitialState(), // { ids: [], entities: {} }
  activeRestaurantId: null, // Add your selected ID state
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

export const { setActiveRestaurantId, restaurantsSetAll } =
  restaurantsSlice.actions
// Get selectors from the adapter
export const { selectAll, selectById: selectRestaurantById } =
  restaurantsAdapter.getSelectors((state: RootState) => state.restaurants) // Adjust RootState
// Select the selected ID from the slice state
export const selectActiveRestaurantId = (state: RootState) =>
  state.restaurants.activeRestaurantId
// Selector to get the full selected restaurant object
export const selectActiveRestaurant = (state: RootState) => {
  const selectedId = selectActiveRestaurantId(state)
  return selectedId ? selectRestaurantById(state, selectedId) : null
}

export default restaurantsSlice.reducer

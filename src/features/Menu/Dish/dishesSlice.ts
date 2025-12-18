import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { NormalizedMenuProps } from '../../../types'
import type { RootState } from '../../../app/store'

const dishesAdapter = createEntityAdapter<NormalizedMenuProps>({
  // Optional: Define how to get the ID if it's not 'id'
  selectId: (restaurant) => restaurant.id,
})

const initialState = {
  ...dishesAdapter.getInitialState(), // { ids: [], entities: {} }
}

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    dishesSetAll: dishesAdapter.addMany,
  },
})

export const { dishesSetAll } = dishesSlice.actions
// Get selectors from the adapter
export const { selectById } = dishesAdapter.getSelectors(
  (state: RootState) => state.dishes,
)
export const selectDishByIds = (state: RootState, ids: string[]) =>
  ids.map((id: string) => selectById(state, id))

export default dishesSlice.reducer

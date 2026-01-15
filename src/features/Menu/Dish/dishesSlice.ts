import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit'
import type { DishProps, NormalizedMenuProps } from '../../../types'
import type { RootState } from '../../../app/store'

const dishesAdapter = createEntityAdapter<NormalizedMenuProps>({
  selectId: (dish: DishProps) => dish.id,
})

const initialState = {
  ...dishesAdapter.getInitialState(),
}

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    dishesSetAll: dishesAdapter.addMany,
  },
})

export const { dishesSetAll } = dishesSlice.actions

export const { selectById } = dishesAdapter.getSelectors(
  (state: RootState) => state.dishes,
)

export const makeSelectDishById = (id: string) => (
  createSelector(
    (state: RootState) => state.dishes?.entities || {},
    (entities) => entities[id] || null,
  )
)

export const makeSelectDishesByIds = (ids: (string | number)[]) =>
  createSelector(
    (state: RootState) => state.dishes.entities,
    (entities) =>
      ids.map((id) => entities[id]).filter(Boolean) as NormalizedMenuProps[],
  )

export default dishesSlice.reducer

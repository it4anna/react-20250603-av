import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { NormalizedReviewsProps } from '../../types'
import type { RootState } from '../../app/store'

const ReviewsAdapter = createEntityAdapter<NormalizedReviewsProps>({
  // Optional: Define how to get the ID if it's not 'id'
  selectId: (restaurant) => restaurant.id,
})

const initialState = {
  ...ReviewsAdapter.getInitialState(),
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    reviewsSetAll: ReviewsAdapter.addMany,
  },
})

export const { reviewsSetAll } = reviewsSlice.actions
// Get selectors from the adapter
export const { selectById } = ReviewsAdapter.getSelectors(
  (state: RootState) => state.reviews,
)

export const selectReviewByIds = (state: RootState, ids: string[]) =>
  ids.map((id: string) => selectById(state, id))
export default reviewsSlice.reducer

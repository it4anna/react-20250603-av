import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit'
import type { NormalizedReviewsProps, RestaurantProps } from '../../types'
import type { RootState } from '../../app/store'

const ReviewsAdapter = createEntityAdapter<NormalizedReviewsProps>({
  selectId: (restaurant: RestaurantProps) => restaurant.id,
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

export const { selectById } = ReviewsAdapter.getSelectors((state: RootState) => state.reviews,)

export const makeSelectReviewsByIds = (ids: string[]) =>
  createSelector(
    (state: RootState) => state.reviews.entities,
    (entities) =>
      ids.map((id) => entities[id]).filter(Boolean) as NormalizedReviewsProps[],
  )

export default reviewsSlice.reducer

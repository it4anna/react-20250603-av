import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import type { CartItemProps } from '../../types'

const CartAdapter = createEntityAdapter<CartItemProps>({
  selectId: (dish: CartItemProps) => dish.id,
})

const initialState = {
  ...CartAdapter.getInitialState(),
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    upsertOrRemoveCartItem: (state, { payload }) => {
      if (payload.count === 0) {
        CartAdapter.removeOne(state, payload.id)
      } else {
        CartAdapter.upsertOne(state, payload)
      }
    },
  },
})
export const { upsertOrRemoveCartItem } = CartSlice.actions

export const {
  selectAll: selectCart,
  selectById: selectCartItemById,
  selectIds,
} = CartAdapter.getSelectors((state: RootState) => state.cart)

export const selectCartItemCountById = (state: RootState, payload) => {
  const cartItem = selectCartItemById(state, payload)
  return cartItem?.count || 0
}

export const selectCartTotal = createSelector(
  (state: RootState) => state.cart?.entities || {},
  (state: RootState) => state.dishes?.entities || {},
  (cartEntities, dishEntities) => {
    return Object.values(cartEntities).reduce((total, cartItem: any) => {
      const dish = dishEntities[cartItem.id]
      return total + (dish?.price || 0) * (cartItem.count || 0)
    }, 0)
  },
)

export default CartSlice.reducer

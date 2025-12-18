import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import type { CartItemProps } from '../../types'

const CartAdapter = createEntityAdapter<CartItemProps>({
  // Optional: Define how to get the ID if it's not 'id'
  selectId: (dish) => dish.id,
})

const initialState = {
  ...CartAdapter.getInitialState(), // { ids: [], entities: {} }
}

export const CartSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    updateCartItem: CartAdapter.updateOne,
  },
})
export const { updateCartItem } = CartSlice.actions
// Get selectors from the adapter
export const { selectAll: selectCart } = CartAdapter.getSelectors(
  (state: RootState) => state.cart,
)

export default CartSlice.reducer

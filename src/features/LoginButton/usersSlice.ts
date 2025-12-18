import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { NormalizedUsersProps } from '../../types'
import type { RootState } from '../../app/store'

const userAdapter = createEntityAdapter<NormalizedUsersProps>({
  // Optional: Define how to get the ID if it's not 'id'
  selectId: (user) => user.id,
})

const initialState = {
  ...userAdapter.getInitialState(), // { ids: [], entities: {} }
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userSetAll: userAdapter.addMany,
  },
})

export const { userSetAll } = userSlice.actions
// Get selectors from the adapter
export const { selectById: selectUserById } = userAdapter.getSelectors(
  (state: RootState) => state.users,
)

export default userSlice.reducer

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { NormalizedUsersProps } from '../../types'
import type { RootState } from '../../app/store'

const userAdapter = createEntityAdapter<NormalizedUsersProps>({
  selectId: (user) => user.id,
})

const initialState = {
  ...userAdapter.getInitialState(),
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userSetAll: userAdapter.addMany,
  },
})

export const { userSetAll } = userSlice.actions

export const { selectById: selectUserById } = userAdapter.getSelectors(
  (state: RootState) => state.users,
)

export default userSlice.reducer

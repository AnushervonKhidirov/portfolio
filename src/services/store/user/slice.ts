import type { IUserData } from '../../../utils/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getUser } from './actions'

interface IUserState {
    user: IUserData | null
    isLoading: boolean
    rejected: boolean
}

const initialState: IUserState = {
    user: null,
    isLoading: false,
    rejected: false,
}

const userSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, state => {
                state.isLoading = true
                state.rejected = false
            })
            .addCase(getUser.fulfilled, (state, { payload }: PayloadAction<IUserData>) => {
                state.isLoading = false
                state.user = payload
            })
            .addCase(getUser.rejected, state => {
                state.isLoading = false
                state.rejected = true
            })
    },
})

export default userSlice.reducer

import { UserConfig, type IRepo } from '../../../utils/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getRepos } from './actions'

interface IProjectState {
    repos: IRepo[]
    isLoading: boolean
    rejected: boolean
}

const initialState: IProjectState = {
    repos: [],
    isLoading: false,
    rejected: false,
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getRepos.pending, state => {
                state.isLoading = true
                state.rejected = false
            })
            .addCase(getRepos.fulfilled, (state, { payload }: PayloadAction<IRepo[]>) => {
                state.isLoading = false
                state.repos = payload.filter(repo => repo.name !== UserConfig.USER_NAME + UserConfig.USER_SURNAME)
            })
            .addCase(getRepos.rejected, state => {
                state.isLoading = false
                state.rejected = true
            })
    },
})

export default projectSlice.reducer

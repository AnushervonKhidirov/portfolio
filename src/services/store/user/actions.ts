import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserConfig } from '../../../utils/types'

export const getUser = createAsyncThunk('get_user', async () => {
    const response = await fetch(UserConfig.USER_URL)
    return await response.json()
})

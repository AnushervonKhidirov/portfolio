import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserConfig } from '../../../utils/types'

export const getRepos = createAsyncThunk('get_repos', async () => {
    const response = await fetch(UserConfig.REPO_URL)
    return await response.json()
})

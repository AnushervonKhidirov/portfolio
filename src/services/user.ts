import type { TUser } from '@type/user.type'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class User {
    async getUserInfo(): Promise<TUser | null> {
        try {
            const response = await axios.get<TUser>(Endpoint.UserInfo)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get user info')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }
}

import type { TSocialLink } from '@type/social-links.type'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class SocialLinks {
    async findAll(): Promise<TSocialLink[]> {
        try {
            const response = await axios.get<TSocialLink[]>(Endpoint.SocialLinks)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get social links')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return []
    }
}

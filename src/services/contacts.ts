import type { TContact } from '@type/contacts.type'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class Contacts {
    async getContacts(): Promise<TContact[] | null> {
        try {
            const response = await axios.get<TContact[]>(Endpoint.Contacts)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get contacts')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }
}

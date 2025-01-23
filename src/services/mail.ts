import type { TMail } from '@type/mail'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class Mail {
    async send(data: TMail) {
        try {
            console.log(data)

            const response = await axios.post(Endpoint.Mail, data)
            console.log(response)

            if (response.status !== 200) throw new Error('Unable to send, try again later')

            return response
        } catch (err) {
            console.log(err)
        }

        return null
    }
}

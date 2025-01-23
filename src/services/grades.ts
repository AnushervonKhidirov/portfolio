import type { TPosition } from '@type/position.type'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class Grades {
    async findAll(): Promise<TPosition[] | null> {
        try {
            const response = await axios.get<TPosition[]>(Endpoint.Grades)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get grades')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }

    async findOne(id: string): Promise<TPosition | null> {
        try {
            const response = await axios.get<TPosition>(Endpoint.Grade.replace('[id]', id))

            if (response.status !== 200 || !response.data) throw new Error('Unable to get grade')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }
}

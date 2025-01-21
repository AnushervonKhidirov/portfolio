import type { TPosition } from '@type/position.type'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class Positions {
    async getPositions() {
        try {
            const response = await axios.get<TPosition[]>(Endpoint.Positions)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get positions')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }

    async getPosition(id: string) {
        try {
            const response = await axios.get<TPosition>(Endpoint.Position.replace('[id]', id))

            if (response.status !== 200 || !response.data) throw new Error('Unable to get position')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }
}

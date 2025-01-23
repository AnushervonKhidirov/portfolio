import type { TQuery } from '@type/common.type'
import type { TCompany } from '@type/companies.type'

import axios from 'axios'

import { Query } from './query'

import { Endpoint } from '@constant/endpoints'

export class Companies {
    query: Query

    constructor() {
        this.query = new Query()
    }

    async findAll(query?: TQuery) {
        const queryString = query ? this.query.getString(query) : ''

        try {
            const companies = await axios.get<TCompany[]>(`${Endpoint.Companies}${queryString}`)
            if (companies.status !== 200 || !companies.data) throw new Error('Unable to get companies')

            return companies.data
        } catch (err) {
            console.log(err)
        }

        return null
    }

    async findOne(id: string) {
        try {
            const companies = await axios.get<TCompany>(Endpoint.Companies.replace('[id]', id))
            if (companies.status !== 200 || !companies.data) throw new Error('Unable to get companies')

            return companies.data
        } catch (err) {
            console.log(err)
        }

        return null
    }
}

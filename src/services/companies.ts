import type { AxiosError } from 'axios'
import type { TQuery } from '@type/common.type'
import type { TCompany } from '@type/companies.type'
import type { TResponseError } from '@type/errors.type'

import axios from 'axios'

import { ResponseError } from './errors'
import { Query } from './query'

import { Endpoint } from '@constant/endpoints'

export class Companies {
    query = new Query()

    async findAll(query?: TQuery) {
        const queryString = query ? this.query.getString(query) : ''

        try {
            const companies = await axios.get<TCompany[]>(`${Endpoint.Companies}${queryString}`)
            if (companies.status !== 200 || !companies.data) throw new Error()
            return companies.data
        } catch (err) {
            const error = err as AxiosError<TResponseError>
            return new ResponseError(error?.response?.data)
        }
    }

    async findOne(id: string) {
        try {
            const companies = await axios.get<TCompany>(Endpoint.Companies.replace('[id]', id))
            if (companies.status !== 200 || !companies.data) throw new Error()
            return companies.data
        } catch (err) {
            const error = err as AxiosError<TResponseError>
            return new ResponseError(error?.response?.data)
        }
    }
}

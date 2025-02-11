import type { AxiosError } from 'axios'
import type { TProject } from '@type/projects.type'
import type { TResponseError } from '@type/errors.type'

import axios from 'axios'

import { ResponseError } from './errors'
import { Endpoint, Host } from '@constant/endpoints'

export class Projects {
    async findAll() {
        try {
            const response = await axios.get<TProject[]>(Endpoint.Projects)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get projects')

            const updatedData: TProject[] = response.data.map(project => ({
                ...project,
                image: `${Host}${project.image}`,
            }))

            return updatedData
        } catch (err) {
            const error = err as AxiosError<TResponseError>
            return new ResponseError(error?.response?.data)
        }
    }

    async findOne(id: string) {
        try {
            const response = await axios.get<TProject>(Endpoint.Project.replace('[id]', id))

            if (response.status !== 200 || !response.data) throw new Error('Unable to get project')

            const updatedData: TProject = { ...response.data, image: `${Host}${response.data.image}` }
            return updatedData
        } catch (err) {
            const error = err as AxiosError<TResponseError>
            return new ResponseError(error?.response?.data)
        }
    }
}

import { TProject } from '@type/projects.type'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class Projects {
    async findAll() {
        try {
            const response = await axios.get<TProject[]>(Endpoint.Projects)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get projects')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }

    async findOne(id: string) {
        try {
            const response = await axios.get<TProject>(Endpoint.Project.replace('[id]', id))

            if (response.status !== 200 || !response.data) throw new Error('Unable to get project')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }
}

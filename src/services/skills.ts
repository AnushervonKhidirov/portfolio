import type { AxiosError } from 'axios'
import type { TAcquiredSkill, TSkillGroup } from '@type/skill.type'
import type { TResponseError } from '@type/errors'

import axios from 'axios'

import { ResponseError } from './errors'
import { Endpoint } from '@constant/endpoints'

export class Skills {
    async findAll() {
        try {
            const response = await axios.get<TAcquiredSkill[]>(Endpoint.Skills)

            if (response.status !== 200) throw new Error()
            return response.data.sort((a, b) => b.progress - a.progress)
        } catch (err) {
            const error = err as AxiosError<TResponseError>
            return new ResponseError(error?.response?.data)
        }
    }

    async findOne(id: string) {
        try {
            const response = await axios.get<TAcquiredSkill>(Endpoint.Skill.replace('[id]', id))

            if (response.status !== 200) throw new Error()
            return response.data
        } catch (err) {
            const error = err as AxiosError<TResponseError>
            return new ResponseError(error?.response?.data)
        }
    }

    groupSkills(skills: TAcquiredSkill[]) {
        const skillGroups: { [key: string]: TAcquiredSkill[] } = {}

        skills.forEach(skill => {
            if (!skillGroups[skill.skillType]) skillGroups[skill.skillType] = []
            skillGroups[skill.skillType].push(skill)
        })

        const groupKeys = Object.keys(skillGroups)

        const result: TSkillGroup[] = groupKeys.map(groupKey => {
            return {
                headline: groupKey,
                skills: skillGroups[groupKey],
            }
        })

        return result
    }
}

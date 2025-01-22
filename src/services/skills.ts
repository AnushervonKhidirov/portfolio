import type { TSkill, TSkillGroup } from '@type/skill.type'

import axios from 'axios'

import { Endpoint } from '@constant/endpoints'

export class Skills {
    async getSkills(): Promise<TSkill[] | null> {
        try {
            const response = await axios.get<TSkill[]>(Endpoint.Skills)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get skills')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }

    async getAvailableSkills(): Promise<TSkill[] | null> {
        try {
            const response = await axios.get<TSkill[]>(Endpoint.SkillsAvailable)

            if (response.status !== 200 || !response.data) throw new Error('Unable to get available skills')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }

    async getSkill(id: string): Promise<TSkill | null> {
        try {
            const response = await axios.get<TSkill>(Endpoint.Skill.replace('[id]', id))

            if (response.status !== 200 || !response.data) throw new Error('Unable to get skill')

            return response.data
        } catch (err) {
            console.log(err)
        }

        return null
    }

    groupSkills(skills: TSkill[]) {
        const skillGroups: { [key: string]: TSkill[] } = {}

        skills.forEach(skill => {
            if (!skillGroups[skill.type]) skillGroups[skill.type] = []
            skillGroups[skill.type].push(skill)
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

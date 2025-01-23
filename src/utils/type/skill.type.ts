export type TSkill = {
    id: string
    name: string
    progress: number
    type: string
}

export type TSkillGroup = {
    headline: string
    skills: TSkill[]
}

export type TAvailableSkill = {
    id: string
    value: string
}

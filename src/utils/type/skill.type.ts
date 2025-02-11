export type TSkill = {
    id: string
    name: string
    createdAt: Date
}

export type TAcquiredSkill = {
    id: string
    progress: number
    skillType: string
    skill: TSkill
    createdAt: string
}

export type TSkillGroup = {
    headline: string
    skills: TAcquiredSkill[]
}

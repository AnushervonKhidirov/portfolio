import type { TSkill } from './skill.type'

export type TTask = {
    id: string
    name: string
    createdAt: Date
}

export type TAchievement = {
    id: string
    name: string
    createdAt: Date
}

export type TPosition = {
    id: string
    name: string
    createdAt: Date
}

export type TGrade = {
    id: string
    name: string
    createdAt: Date
}

export type TCompany = {
    id: string
    name: string
    country?: string
    grade: TGrade
    position: TPosition
    startAt: string
    endAt?: string
    about?: string
    tasks: TTask[]
    achievements: TAchievement[]
    stack: TSkill[]
    activity: string
}

export type TCompanyHeadline = Pick<TCompany, 'name' | 'position' | 'country' | 'startAt' | 'endAt'>

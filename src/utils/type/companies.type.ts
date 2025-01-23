import { TIdValueObject } from './common.type'

export type TCompany = {
    id: string
    name: string
    link?: string
    country?: string
    position: string
    startDate: number
    endDate?: number
    about?: string
    tasks: TIdValueObject<string>[]
    achievements?: TIdValueObject<string>[]
    stacks: TIdValueObject<string>[]
    type: string
}

export type TCompanyHeadline = Omit<TCompany, 'about' | 'tasks' | 'achievements' | 'stacks' | 'type' | 'id'>

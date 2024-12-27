import type { TDateRange } from './common'

export type TOrganizationList = {
    list: TOrganization[]
}

export type TOrganization = {
    name: string
    link?: string
    country?: string
    position: string
    dates: TDateRange
    about?: string
    tasks: string[]
    achievement?: string[]
    stack: string[]
}

export type THeadline = Omit<TOrganization, 'about' | 'tasks' | 'achievement' | 'stack'>
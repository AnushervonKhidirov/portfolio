import type { TDateRange } from './common'

export type TExperience = {
    name: string
    link?: string
    country?: string
    position: string
    dates: TDateRange
    about?: string
    tasks: string[]
    stack: string[]
}

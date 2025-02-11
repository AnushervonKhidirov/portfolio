import type { TSkill } from './skill.type'
import type { TLink } from './common.type'

export type TProject = {
    id: string
    title: string
    image: string
    stack: TSkill[]
    links: TLink[]
    createdAt: string
}

export type TProjectList = {
    list: TProject[]
}

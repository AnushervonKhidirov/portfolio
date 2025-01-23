import type { TSocialLink } from './social-links.type'
import type { TIdValueObject } from './common.type'

export type TProject = {
    id: string
    title: string
    imageUrl: string
    stacks: TIdValueObject<string>[]
    links?: TSocialLink[]
}

export type TProjectList = {
    list: TProject[]
}

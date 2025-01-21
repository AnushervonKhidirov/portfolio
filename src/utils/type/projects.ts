import type { StaticImageData } from 'next/image'
import type { TSocialLink } from './social-links.type'

export type TProjectList = {
    list: TProject[]
}

export type TProject = {
    name: string
    image: StaticImageData
    stack: string[]
    links?: TSocialLink[]
}

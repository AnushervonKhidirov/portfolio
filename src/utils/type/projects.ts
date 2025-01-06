import type { StaticImageData } from 'next/image'
import { TSocialLink } from './social-links'

export type TProjectList = {
    list: TProject[]
}

export type TProject = {
    name: string
    image: StaticImageData
    stack: string[]
    links?: TSocialLink[]
}

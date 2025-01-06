import type { StaticImageData } from 'next/image'

export type TProjectList = {
    list: TProject[]
}

export type TProject = {
    name: string
    image: StaticImageData
    stack: string[]
    links?: {
        name: string
        href: string
    }[]
}

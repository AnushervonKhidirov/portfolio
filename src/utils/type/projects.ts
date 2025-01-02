import type { StaticImageData } from 'next/image'

export type TProject = {
    name: string
    image: StaticImageData
    stack: string[]
    link?: string
}

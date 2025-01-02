import type { StaticImageData } from 'next/image'

export type TProjects = {
    name: string
    image: StaticImageData
    stack: string[]
    link?: string
}

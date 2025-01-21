import type { TSocialLink } from './social-links.type'

export type TIntroduction = {
    name: string
    grade?: string
    position: string
    about: string
    socialLinks: TSocialLink[]
}

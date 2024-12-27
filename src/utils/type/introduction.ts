import { TSocialLinkList } from './social-links'

export type TIntroduction = {
    name: string
    grade?: string
    position: string
    about: string
    socialLinks: TSocialLinkList['socialLinks']
}

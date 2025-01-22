'use client'
import type { TUser } from '@type/user.type'
import type { TSocialLink } from '@type/social-links.type'

import { useEffect, useState } from 'react'

import { User } from '@services/user'
import { SocialLinks } from '@services/social-links'

import Section from '@common/section/section'
import Introduction from '@component/introduction/introduction'
import { LaptopImage } from '@component/svg'

import classes from './introduction-section.module.css'

const IntroductionSection = () => {
    const user = new User()
    const socialLinks = new SocialLinks()

    const [userInfo, setUserInfo] = useState<TUser | null>(null)
    const [socialLinksList, setSocialLinksList] = useState<TSocialLink[]>([])

    async function getUserInfo() {
        const userInfo = await user.getUserInfo()
        if (!userInfo) return
        setUserInfo(userInfo)

        const socialLinkList = await socialLinks.getSocialLinks()
        setSocialLinksList(socialLinkList)
    }

    useEffect(() => {
        getUserInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        userInfo && (
            <Section title="About" className={classes.introduction_section}>
                <Introduction
                    className={classes.introduction}
                    name={userInfo.name}
                    about={userInfo.about}
                    position={userInfo.position}
                    grade={userInfo.grade}
                    socialLinks={socialLinksList}
                />
                <LaptopImage className={classes.image} />
            </Section>
        )
    )
}

export default IntroductionSection

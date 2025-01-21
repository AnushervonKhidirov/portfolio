'use client'
import type { TUser } from '@type/user.type'
import type { TSocialLink } from '@type/social-links.type'

import { useEffect, useState } from 'react'

import { User } from '@services/user'
import { Positions } from '@services/positions'
import { Grades } from '@services/grades'
import { SocialLinks } from '@services/social-links'

import Section from '@common/section/section'
import Introduction from '@component/introduction/introduction'
import { LaptopImage } from '@component/svg'

import classes from './introduction-section.module.css'

const IntroductionSection = () => {
    const user = new User()
    const positions = new Positions()
    const grades = new Grades()
    const socialLinks = new SocialLinks()

    const [userInfo, setUserInfo] = useState<TUser | null>(null)
    const [position, setPosition] = useState<string>('')
    const [grade, setGrade] = useState<string>('')
    const [socialLinksList, setSocialLinksList] = useState<TSocialLink[]>([])

    async function collectData() {
        const userInfo = await user.getUserInfo()
        if (!userInfo) return
        setUserInfo(userInfo)

        const position = await positions.getPosition(userInfo.positionId)
        if (!position) return
        setPosition(position.value)

        const grade = userInfo.gradeId ? await grades.getGrade(userInfo.gradeId) : null
        if (!grade) return
        setGrade(grade.value)

        const socialLinkList = await socialLinks.getSocialLinks()
        setSocialLinksList(socialLinkList)
    }

    useEffect(() => {
        collectData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        userInfo && (
            <Section title="About" className={classes.introduction_section}>
                <Introduction
                    className={classes.introduction}
                    name={userInfo.name}
                    about={userInfo.about}
                    position={position}
                    grade={grade}
                    socialLinks={socialLinksList}
                />
                <LaptopImage className={classes.image} />
            </Section>
        )
    )
}

export default IntroductionSection

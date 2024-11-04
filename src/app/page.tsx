'use client'
import SimpleBar from 'simplebar-react'

import IntroductionSection from '@component/sections/introduction/introduction-section'
import ExperienceSection from '@component/sections/experience/experience-section'
import CoursesSection from '@component/sections/courses/courses-section'
import SkillsSection from '@component/sections/skills/skills-section'

import 'simplebar-react/dist/simplebar.min.css'

const Page = () => {
    return (
        <SimpleBar forceVisible="y" style={{ height: '100vh' }}>
            <IntroductionSection />
            <ExperienceSection />
            <CoursesSection />
            <SkillsSection />
        </SimpleBar>
    )
}

export default Page

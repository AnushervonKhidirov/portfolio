'use client'
import Scroller from '@common/scroller/scroller'

import IntroductionSection from '@component/sections/introduction/introduction-section'
import ExperienceSection from '@component/sections/experience/experience-section'
import CoursesSection from '@component/sections/courses/courses-section'
import SkillsSection from '@component/sections/skills/skills-section'

import 'simplebar-react/dist/simplebar.min.css'

const Page = () => {
    return (
        <Scroller pageScroller>
            <IntroductionSection />
            <ExperienceSection />
            <CoursesSection />
            <SkillsSection />
        </Scroller>
    )
}

export default Page

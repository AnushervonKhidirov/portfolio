import Scroller from '@common/scroller/scroller'
import IntroductionSection from '@component/sections/introduction/introduction-section'
import ExperienceSection from '@component/sections/experience/experience-section'
import TrainingSection from '@component/sections/training/training-section'
import SkillsSection from '@component/sections/skills/skills-section'
import ProjectSection from '@component/sections/projects/project-section'
import ContactsSection from '@component/sections/contacts/contacts-section'

import { projects } from '@constant/data'

const Page = () => {
    return (
        <Scroller pageScroller handleMenu>
            <IntroductionSection />
            <ExperienceSection />
            <TrainingSection />
            <SkillsSection />
            <ProjectSection data={projects} />
            <ContactsSection />
        </Scroller>
    )
}

export default Page

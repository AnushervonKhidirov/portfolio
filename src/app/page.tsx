import Scroller from '@common/scroller/scroller'
import IntroductionSection from '@component/sections/introduction/introduction-section'
import OrganizationSection from '@component/sections/organization/organization-section'
import SkillsSection from '@component/sections/skills/skills-section'
import ProjectSection from '@component/sections/projects/project-section'
import ContactsSection from '@component/sections/contacts/contacts-section'

import { experiences, trainings, skillList, projects } from '@constant/data'

const Page = () => {
    return (
        <Scroller pageScroller handleMenu>
            <IntroductionSection />
            <OrganizationSection title="Experience" data={experiences} />
            <OrganizationSection title="Trainings" data={trainings} />
            <SkillsSection data={skillList} />
            <ProjectSection data={projects} />
            <ContactsSection />
        </Scroller>
    )
}

export default Page

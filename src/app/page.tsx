import Scroller from '@common/scroller/scroller'
import IntroductionSection from '@component/sections/introduction/introduction-section'
import OrganizationSection from '@component/sections/organization-section/organization-section'
import SkillsSection from '@component/sections/skills/skills-section'
import ProjectSection from '@component/sections/projects/project-section'
import ContactsSection from '@component/sections/contacts/contacts-section'

import { introduction, experiences, trainings, skillList, projects, contacts } from '@constant/data'

const Page = () => {
    return (
        <Scroller pageScroller>
            <IntroductionSection data={introduction} />
            <OrganizationSection title="Experience" data={experiences} />
            <OrganizationSection title="Trainings" data={trainings} />
            <SkillsSection data={skillList} />
            <ProjectSection data={projects} />
            <ContactsSection data={contacts} />
        </Scroller>
    )
}

export default Page

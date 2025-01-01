import type { TOrganization } from '@type/organization'
import type { TIntroduction } from '@type/introduction'
import type { TSkillList } from '@type/skill'
import { Grade, Position } from '@type/common'

import Scroller from '@common/scroller/scroller'
import IntroductionSection from '@component/sections/introduction/introduction-section'
import OrganizationSection from '@component/sections/organization-section/organization-section'
import SkillsSection from '@component/sections/skills/skills-section'

import { socialLinks } from '@constant/social-links'
import { frontEndSkills, backEndSkills } from '@constant/skills'

const introduction: TIntroduction = {
    name: 'Anushervon',
    grade: Grade.Middle,
    position: Position.FrontEnd,
    about: 'I am a punctual and sociable front-end developer who likes working in a team, learning new technologies and improving skills. While working with the code, I am trying to write readable code and keeping it up to date.',
    socialLinks: socialLinks,
}

const experiences: TOrganization[] = [
    {
        name: 'Contobox',
        link: 'https://www.advertisers.contobox.com/',
        country: 'Canada',
        position: Position.FrontEnd,
        dates: { from: new Date('01/01/2020') },
        about: 'About this company',
        tasks: [
            'Bug fixing',
            'Adding new features',
            'Overwriting old class components to functional components',
            'Decomposing code',
            'Optimizing reports page',
            'Writing filters',
        ],
        achievement: ['Teamwork', 'Reading old and monolithic code', 'Mentoring'],
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    },
]

const courses: TOrganization[] = [
    {
        name: 'Yandex Practicum',
        link: 'https://practicum.yandex.ru',
        position: Position.FrontEnd,
        dates: { from: new Date('06/01/2023'), to: new Date('08/01/2023') },
        tasks: [
            'Creating burger constructor',
            'User registration',
            'Creating a personal user account with the ability to track your orders',
            'Adding an order to the cart',
            'Track the status of all orders in real time',
            'Writing tests',
        ],
        stack: ['TypeScript', 'React', 'Redux', 'Redux thunk', 'Jest', 'Cypress', 'Websocket'],
    },
]

const skillList: TSkillList[] = [
    {
        headline: Position.FrontEnd,
        skills: frontEndSkills,
    },
    {
        headline: Position.BackEnd,
        skills: backEndSkills,
    },
]

const Page = () => {
    return (
        <Scroller pageScroller>
            <IntroductionSection data={introduction} />
            <OrganizationSection title="Experience" data={experiences} />
            <OrganizationSection title="Trainings" data={courses} />
            <SkillsSection data={skillList} />
        </Scroller>
    )
}

export default Page

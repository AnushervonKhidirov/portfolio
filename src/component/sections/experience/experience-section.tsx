import type { TOrganization } from '@type/organization'

import Section from '@common/section/section'
import OrganizationBlock from '@common/organization-block/organization-block'
import { Position } from '@type/common'

const ExperienceSection = () => {
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
            achievement: [
                'Teamwork',
                'Reading old and monolithic code',
                'Mentoring',
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        },
    ]

    return (
        <Section title="Experience" headline>
            {experiences.map(experience => (
                <OrganizationBlock {...experience} key={experience.name} />
            ))}
        </Section>
    )
}

export default ExperienceSection

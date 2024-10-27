import type { TExperience } from '@type/experience'

import Section from '@common/section/section'
import ExperienceBar from '@common/experience-bar/experience-bar'
import { Position } from '@type/common'

const ExperienceSection = () => {
    const experiences: TExperience[] = [
        {
            name: 'Contobox',
            link: 'https://www.advertisers.contobox.com/',
            country: 'Canada',
            position: Position.FrontEnd,
            dates: { from: new Date('01/01/2020') },
            about: 'About this company',
            tasks: [
                'Overwriting old class components to functional components',
                'Decomposing code',
                'Optimizing reports page',
                'Writing filters',
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        },
    ]

    return (
        <Section title="Experience" headline>
            {experiences.map(experience => (
                <ExperienceBar {...experience} key={experience.name} />
            ))}
        </Section>
    )
}

export default ExperienceSection

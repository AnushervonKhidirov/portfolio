import type { TOrganization } from '@type/organization'

import Section from '@common/section/section'
import OrganizationBlock from '@common/organization-block/organization-block'
import { Position } from '@type/common'

const CoursesSection = () => {
    const experiences: TOrganization[] = [
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

    return (
        <Section title="Trainings" headline>
            {experiences.map(experience => (
                <OrganizationBlock {...experience} key={experience.name} />
            ))}
        </Section>
    )
}

export default CoursesSection

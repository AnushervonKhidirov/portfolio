import type { TOrganization } from '@type/organization'
import type { TProject } from '@type/projects'

import { Position, Skill } from '@type/common'

// images
import stellarBurgerImage from '@images/projects/stellar-burger.png'
import izziRideImage from '@images/projects/izzi-ride.png'
import chargeMotionImage from '@images/projects/charge-motion.png'

export const experiences: TOrganization[] = [
    {
        name: 'Contobox',
        link: 'https://www.advertisers.contobox.com/',
        country: 'Canada',
        position: Position.FrontEnd,
        dates: { from: new Date('01/01/2020') },
        about: 'Company which provides brands with scalable, interactive, high impact, cross-device advertising technologies.',
        tasks: [
            'Bug fixing',
            'Adding new features',
            'Overwriting old class components to functional components',
            'Decomposing code',
            'Optimizing reports page',
            'Writing filters',
            'Working with Media and Video',
        ],
        achievement: ['Teamwork', 'Reading old and monolithic code', 'Mentoring'],
        stack: [Skill.HTML, Skill.CSS, Skill.JavaScript, Skill.Next, Skill.Redux],
    },
    {
        name: 'Freelance',
        position: Position.FrontEnd,
        dates: { from: new Date('05/01/2019'), to: new Date('01/01/2020') },
        tasks: ['Creating admin panels', 'Building websites (SPA/SSR)', 'Adding new features', 'Bug fixing'],
        stack: [
            Skill.HTML,
            Skill.CSS,
            Skill.JavaScript,
            Skill.TypeScript,
            Skill.Next,
            Skill.React,
            Skill.Redux,
            Skill.ReduxToolkit,
            Skill.Zustand,
            Skill.WebSocket,
        ],
    },
]

export const trainings: TOrganization[] = [
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
        stack: [
            Skill.TypeScript,
            Skill.React,
            Skill.Redux,
            Skill.ReduxThunk,
            Skill.ReduxToolkit,
            Skill.Jest,
            Skill.Cypress,
            Skill.WebSocket,
        ],
    },
]

export const projects: TProject[] = [
    {
        name: 'Stellar Burger',
        image: stellarBurgerImage,
        stack: [
            Skill.TypeScript,
            Skill.React,
            Skill.Redux,
            Skill.ReduxThunk,
            Skill.ReduxToolkit,
            Skill.Jest,
            Skill.Cypress,
            Skill.WebSocket,
        ],
        links: [
            {
                id: 'https://github.com/AnushervonKhidirov/stellar-burger',
                title: 'GitHub',
                href: 'https://github.com/AnushervonKhidirov/stellar-burger',
            },
        ],
    },
    {
        name: 'iZZi Ride',
        image: izziRideImage,
        stack: [Skill.TypeScript, Skill.Next, Skill.Redux, Skill.ReduxToolkit],
        links: [
            {
                id: 'https://github.com/dwnGnL/izzi-ride',
                title: 'GitHub',
                href: 'https://github.com/dwnGnL/izzi-ride',
            },
            {
                id: 'https://izziride.com/',
                title: 'Website',
                href: 'https://izziride.com/',
            },
        ],
    },
    {
        name: 'Charge Motion',
        image: chargeMotionImage,
        stack: [Skill.HTML, Skill.CSS, Skill.JavaScript],
        links: [
            {
                id: 'https://github.com/AnushervonKhidirov/charge-motion',
                title: 'GitHub',
                href: 'https://github.com/AnushervonKhidirov/charge-motion',
            },
            {
                id: 'https://anushervonkhidirov.github.io/charge-motion/',
                title: 'Website',
                href: 'https://anushervonkhidirov.github.io/charge-motion/',
            },
        ],
    },
]

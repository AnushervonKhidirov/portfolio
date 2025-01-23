import type { TProject } from '@type/projects'
import { Skill } from './skills'

// images
import stellarBurgerImage from '@images/projects/stellar-burger.png'
import izziRideImage from '@images/projects/izzi-ride.png'
import chargeMotionImage from '@images/projects/charge-motion.png'

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

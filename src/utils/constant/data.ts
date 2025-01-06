import type { TOrganization } from '@type/organization'
import type { TIntroduction } from '@type/introduction'
import type { TSkillList } from '@type/skill'
import type { TContact } from '@type/contacts'
import type { TProject } from '@type/projects'

import { Grade, Position, Skill } from '@type/common'

import { socialLinks } from '@constant/social-links'
import { frontEndSkills, backEndSkills } from '@constant/skills'
import { GitHubIcon, WebsiteIcon } from '@component/svg'
// images
import stellarBurgerImage from '@images/projects/stellar-burger.png'
import izziRideImage from '@images/projects/izzi-ride.png'
import chargeMotionImage from '@images/projects/charge-motion.png'

export const introduction: TIntroduction = {
    name: 'Anushervon',
    grade: Grade.Middle,
    position: Position.FrontEnd,
    about: 'I am a punctual and sociable front-end developer who likes working in a team, learning new technologies and improving skills. While working with the code, I am trying to write readable code and keeping it up to date.',
    socialLinks: socialLinks,
}

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

export const skillList: TSkillList[] = [
    {
        headline: Position.FrontEnd,
        skills: frontEndSkills,
    },
    {
        headline: Position.BackEnd,
        skills: backEndSkills,
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
                title: 'GitHub',
                href: 'https://github.com/AnushervonKhidirov/stellar-burger',
                Icon: GitHubIcon,
            },
        ],
    },
    {
        name: 'iZZi Ride',
        image: izziRideImage,
        stack: [Skill.TypeScript, Skill.Next, Skill.Redux, Skill.ReduxToolkit],
        links: [
            {
                title: 'GitHub',
                href: 'https://github.com/dwnGnL/izzi-ride',
                Icon: GitHubIcon,
            },
            {
                title: 'Website',
                href: 'https://izziride.com/',
                Icon: WebsiteIcon,
            },
        ],
    },
    {
        name: 'Charge Motion',
        image: chargeMotionImage,
        stack: [Skill.HTML, Skill.CSS, Skill.JavaScript],
        links: [
            {
                title: 'GitHub',
                href: 'https://github.com/AnushervonKhidirov/charge-motion',
                Icon: GitHubIcon,
            },
            {
                title: 'Website',
                href: 'https://anushervonkhidirov.github.io/charge-motion/',
                Icon: WebsiteIcon,
            },
        ],
    },
]

export const contacts: TContact[] = [
    {
        title: 'Phone',
        value: '+992 77 100 7676',
        link: 'tel:+992 77 100 7676',
    },
    {
        title: 'Email',
        value: 'ankhid98@gmail.com',
        link: 'mailto:ankhid98@gmail.com',
    },
    {
        title: 'Telegram',
        value: '@akhid',
        link: 'https://t.me/akhid',
    },
]

import type { TOrganization } from '@type/organization'
import type { TIntroduction } from '@type/introduction'
import type { TSkillList } from '@type/skill'
import type { TContacts } from '@type/contacts'
import type { TProjects } from '@type/projects'

import { Grade, Position, Skill } from '@type/common'

import { socialLinks } from '@constant/social-links'
import { frontEndSkills, backEndSkills } from '@constant/skills'

// images
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
        stack: [Skill.HTML, Skill.CSS, Skill.JavaScript, Skill.Next, Skill.Redux],
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

export const projects: TProjects[] = [
    {
        name: 'Charge Motion',
        image: chargeMotionImage,
        stack: [Skill.HTML, Skill.CSS, Skill.JavaScript],
    },
]

export const contacts: TContacts = {
    phone: '+992 12 413 31 41',
    email: 'myemail@gmail.com',
}

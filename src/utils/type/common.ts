import { PropsWithChildren } from 'react'

export type AdditionalProps<T> = T &
    PropsWithChildren & {
        className?: string
    }

export type TDateRange = {
    from: Date
    to?: Date
}

export enum Position {
    FrontEnd = 'Front-End',
    BackEnd = 'Back-End',
}

export enum Grade {
    Junior = 'Junior',
    Middle = 'Middle',
    Senior = 'Senior',
}

export enum Skill {
    HTML = 'HTML',
    CSS = 'CSS',
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    React = 'React',
    Next = 'Next',
    Vue = 'Vue',
    Angular = 'Angular',
    Node = 'NodeJS',
    Nest = 'NestJS',
    Go = 'Golang',
    Redux = 'Redux',
    ReduxThunk = 'Redux thunk',
    ReduxToolkit = 'Redux toolkit',
    Zustand = 'Zustand',
    MobX = 'MobX',
    Jest = 'Jest',
    Cypress = 'Cypress',
    WebSocket = 'WebSocket',
    MySql = 'MySql',
    SQLite = 'SQLite',
    PostgreSQL = 'PostgreSQL',
    MongoDB = 'MongoDB',
    Oracle = 'Oracle',
    Redis = 'Redis',
    Apache = 'Apache',
    Prisma = 'Prisma',
    GORM = 'GORM',
    Sequelize = 'Sequelize',
    TypeORM = 'TypeORM',
    Mongoose = 'Mongoose',
}

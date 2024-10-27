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

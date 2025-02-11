import { PropsWithChildren } from 'react'

export type AdditionalProps<T = object> = T &
    PropsWithChildren & {
        className?: string
    }

export type TDateRange = {
    from: number | string
    to?: number | string | null
}

export type TLink = {
    id: string
    title: string
    href: string
    createdAt: string
}

export type TIdValueObject<T = unknown> = {
    id: string
    name: T
}

export type TQuery = { [key: string]: string | number }

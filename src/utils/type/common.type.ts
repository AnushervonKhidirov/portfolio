import { PropsWithChildren } from 'react'

export type AdditionalProps<T = object> = T &
    PropsWithChildren & {
        className?: string
    }

export type TDateRange = {
    from: number
    to?: number | null
}

export type TIdValueObject<T = unknown> = {
    id: string
    value: T
}

export type TQuery = { [key: string]: string | number }

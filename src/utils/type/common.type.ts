/* eslint-disable no-unused-vars */
import { PropsWithChildren } from 'react'

export type AdditionalProps<T = object> = T &
    PropsWithChildren & {
        className?: string
    }

export type TDateRange = {
    from: Date
    to?: Date
}

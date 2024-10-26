import { HTMLAttributes } from 'react'

export type TypeWithHTMLAttr<T> = T & HTMLAttributes<HTMLElement>

export enum Position {
    FrontEnd = 'Front-End',
    BackEnd = 'Back-End',
}

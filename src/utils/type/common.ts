import { HTMLAttributes } from 'react'

export type TypeWithHTMLAttr<T> = T & HTMLAttributes<HTMLElement>

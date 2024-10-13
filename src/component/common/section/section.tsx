import { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'
import classes from './section.module.css'

type TSection = PropsWithChildren & {
    title: string
    className?: string
    fullHeight?: boolean
}

const Section: FC<TSection> = ({ title, className, children, fullHeight = false }) => {
    return (
        <section
            data-title={title}
            className={classNames(classes.section, { [classes.fullHeight]: fullHeight }, className)}
        >
            {children}
        </section>
    )
}

export default Section

import { FC } from 'react'
import type { AdditionalProps } from '@type/common'

import classNames from 'classnames'
import classes from './section.module.css'

type TSection = AdditionalProps<{
    title: string
    headline?: boolean
    fullHeight?: boolean
}>

const Section: FC<TSection> = ({ title, headline = false, fullHeight = false, className, children }) => {
    return (
        <section data-title={title} className={classNames(classes.section, { [classes.fullHeight]: fullHeight })}>
            <div className={classes.section_inner}>
                {headline && <h2 className={classes.headline}>{title}</h2>}
                <div className={classNames(classes.content, className)}>{children}</div>
            </div>
        </section>
    )
}

export default Section

import type { FC } from 'react'
import type { TExperience } from '@type/experience'
import type { TDateRange } from '@type/common'

import Link from 'next/link'
import Tooltip from '@common/tooltip/tooltip'
import DateRange from '@common/date-range/date-range'
import About from '@common/about/about'
import Tasks from '@common/tasks/tasks'
import Stack from '@common/stack/stack'

import classes from './experience-bar.module.css'
import classNames from 'classnames'

type THeadline = {
    name: string
    link?: string
    position: string
    dates: TDateRange
    country?: string
}

const ExperienceBar: FC<TExperience> = ({ name, link, country, position, dates, about, tasks, stack }) => {
    return (
        <div className={classes.experience}>
            <Headline name={name} link={link} position={position} dates={dates} country={country} />
            {about && <About about={about} />}
            <Tasks list={tasks} />
            <Stack list={stack} />
        </div>
    )
}

const Headline: FC<THeadline> = ({ name, link, country, position, dates }) => {
    return (
        <div className={classes.headline}>
            <h4>
                {link ? (
                    <Tooltip title={`Visit ${name}`}>
                        <Link href={link} className={classNames(classes.name, classes.link)}>
                            {name}
                        </Link>
                    </Tooltip>
                ) : (
                    <span className={classes.name}>{name}</span>
                )}
                {country && <span className={classes.country}>, {country}</span>}
                <i className={classes.position}> - {position}</i>
            </h4>
            <DateRange dates={dates} />
        </div>
    )
}

export default ExperienceBar

import type { FC } from 'react'
import type { TOrganization, THeadline } from '@type/organization'

import Link from 'next/link'
import Tooltip from '@common/tooltip/tooltip'
import DateRange from '@common/date-range/date-range'
import About from '@common/about/about'
import List from '@common/list/list'
import Stack from '@common/stack/stack'

import classes from './organization-block.module.css'
import classNames from 'classnames'

const OrganizationBlock: FC<TOrganization> = organization => {
    return (
        <div className={classes.organization}>
            <Headline
                name={organization.name}
                link={organization.link}
                position={organization.position}
                dates={organization.dates}
                country={organization.country}
            />

            {organization.about && <About about={organization.about} />}
            <List title="Tasks" list={organization.tasks} />
            {organization.achievement && <List title="Achievements" list={organization.achievement} />}
            <Stack list={organization.stack} />
        </div>
    )
}

const Headline: FC<THeadline> = ({ name, link, country, position, dates }) => {
    return (
        <div className={classes.headline}>
            <h4>
                {link ? (
                    <Tooltip title={`Visit ${name}`}>
                        <Link href={link} target="_blank" className={classNames(classes.name, classes.link)}>
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

export default OrganizationBlock

import type { FC } from 'react'
import type { TCompany, TCompanyHeadline } from '@type/companies.type'

import Link from 'next/link'
import Tooltip from '@common/tooltip/tooltip'
import DateRange from '@common/date-range/date-range'
import About from '@common/about/about'
import { ColumnList, RowList } from '@common/list/list'

import classNames from 'classnames'
import classes from './company.module.css'
import { TDateRange } from '@type/common.type'

const Company: FC<TCompany> = company => {
    return (
        <div className={classes.company}>
            <Headline
                name={company.name}
                link={company.link}
                position={company.position}
                country={company.country}
                startDate={company.startDate}
                endDate={company.endDate}
            />

            {company.about && <About about={company.about} />}
            <ColumnList title="Tasks" list={company.tasks} />
            {company.achievements && <ColumnList title="Achievements" list={company.achievements} />}
            <RowList title="Stack" list={company.stacks} highlight />
        </div>
    )
}

const Headline: FC<TCompanyHeadline> = ({ name, link, country, position, startDate, endDate }) => {
    const dates: TDateRange = {
        from: startDate,
        to: endDate,
    }

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

export default Company

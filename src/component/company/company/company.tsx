import type { FC } from 'react'
import type { TCompany, TCompanyHeadline } from '@type/companies.type'

import DateRange from '@common/date-range/date-range'
import About from '@common/about/about'
import { ColumnList, RowList } from '@common/list/list'

import classes from './company.module.css'
import { TDateRange } from '@type/common.type'

const Company: FC<TCompany> = company => {
    return (
        <div className={classes.company}>
            <Headline
                name={company.name}
                position={company.position}
                country={company.country}
                startAt={company.startAt}
                endAt={company.endAt}
            />

            {company.about && <About about={company.about} />}
            <ColumnList title="Tasks" list={company.tasks} />
            <ColumnList title="Achievements" list={company.achievements} />
            <RowList title="Stack" list={company.stack} highlight />
        </div>
    )
}

const Headline: FC<TCompanyHeadline> = ({ name, country, position, startAt, endAt }) => {
    const dates: TDateRange = {
        from: startAt,
        to: endAt,
    }

    return (
        <div className={classes.headline}>
            <h4>
                <span className={classes.name}>{name}</span>
                {country && <span className={classes.country}>, {country}</span>}
                <i className={classes.position}> - {position.name}</i>
            </h4>
            <DateRange dates={dates} />
        </div>
    )
}

export default Company

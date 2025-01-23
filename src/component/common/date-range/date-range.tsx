import type { FC } from 'react'
import type { AdditionalProps, TDateRange } from '@type/common.type'

import classNames from 'classnames'
import classes from './date-range.module.css'

const DateRange: FC<AdditionalProps<{ dates: TDateRange }>> = ({ dates, className }) => {
    const convertedDates = {
        from: new Date(dates.from),
        to: dates.to ? new Date(dates.to) : undefined,
    }

    const dateFromText = convertedDates.from.toLocaleString('default', { month: 'short', year: 'numeric' })
    const dateToText = convertedDates.to
        ? convertedDates.to.toLocaleString('default', { month: 'short', year: 'numeric' })
        : 'Now'

    const duration = getDurationText(getRangeDuration(convertedDates))

    function getRangeDuration(dates: { from: Date; to?: Date }) {
        const from = {
            year: dates.from.getFullYear(),
            month: dates.from.getMonth(),
        }

        const to = {
            year: dates.to ? dates.to.getFullYear() : new Date().getFullYear(),
            month: dates.to ? dates.to.getMonth() + 1 : new Date().getMonth(),
        }

        let years = to.year - from.year
        let months = to.month - from.month

        if (months < 0) {
            months = 12 - Math.abs(to.month - from.month)
            years -= 1
        }

        return { years, months }
    }

    function getDurationText({ years, months }: { years: number; months: number }) {
        const monthText = months === 1 ? `${months} month` : months > 0 ? `${months} months` : ''
        const yearText = years === 1 ? `${years} year` : years > 0 ? `${years} years` : ''
        return `${yearText} ${monthText}`.trim()
    }

    return (
        <div className={classNames(classes.date_range, className)}>
            {dateFromText} - {dateToText} ({duration})
        </div>
    )
}

export default DateRange

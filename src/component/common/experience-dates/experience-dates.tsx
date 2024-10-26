import type { FC } from 'react'

import classes from './experience-dates.module.css'

const ExperienceDates: FC<{ dates: { from: Date; to: Date } }> = ({ dates }) => {
    const dateFromText = dates.from.toLocaleString('default', { month: 'short', year: 'numeric' })
    const dateToText = dates.to.toLocaleString('default', { month: 'short', year: 'numeric' })
    const duration = getDurationText(getExperienceDuration(dates))

    function getExperienceDuration(dates: { from: Date; to: Date }) {
        const from = {
            year: dates.from.getFullYear(),
            month: dates.from.getMonth(),
        }

        const to = {
            year: dates.to.getFullYear(),
            month: dates.to.getMonth(),
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
        <div className={classes.dates}>
            {dateFromText} — {dateToText} ({duration})
        </div>
    )
}

export default ExperienceDates

import type { FC } from 'react'
import type { TExperience } from '@type/experience'

import ExperienceDates from '@common/experience-dates/experience-dates'
import Tasks from '@common/tasks/tasks'
import Stack from '@common/stack/stack'

import classes from './experience-bar.module.css'

const ExperienceBar: FC<TExperience> = ({ name, position, dates, tasks, stack, about, rating }) => {
    return (
        <div className={classes.experience}>
            <div className={classes.headline}>
                <span className={classes.name}>{name} </span>
                <span className={classes.position}>{position}</span>
                <ExperienceDates dates={dates} />
            </div>
            {about && <div className={classes.about}>{about}</div>}
            <Tasks list={tasks} />
            <Stack list={stack} />
            {rating && <div className={classes.rating}>{rating}</div>}
        </div>
    )
}

export default ExperienceBar

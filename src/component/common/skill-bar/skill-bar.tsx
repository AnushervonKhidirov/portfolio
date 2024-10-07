import type { FC } from 'react'
import type { TSkill } from '@type/skill'
import type { TypeWithHTMLAttr } from '@type/common'

import ProgressBar from '@common/progress-bar/progress-bar'

import classNames from 'classnames'
import classes from './skill-bar.module.css'

const SkillBar: FC<TypeWithHTMLAttr<TSkill>> = ({ name, progress, className }) => {
    return (
        <div className={classNames(classes.skill_bar, className)}>
            <div className={classes.name}>{name}</div>
            <div className={classes.progress}>{progress}%</div>
            <ProgressBar progress={progress} className={classes.progress_bar} />
        </div>
    )
}

export default SkillBar

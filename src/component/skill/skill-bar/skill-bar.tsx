import type { FC } from 'react'
import type { TAcquiredSkill } from '@type/skill.type'
import type { AdditionalProps } from '@type/common.type'

import ProgressBar from '@common/progress-bar/progress-bar'

import classNames from 'classnames'
import classes from './skill-bar.module.css'

const SkillBar: FC<AdditionalProps<{ skill: TAcquiredSkill }>> = ({ skill, className }) => {
    return (
        <div className={classNames(classes.skill_bar, className)}>
            <div className={classes.name}>{skill.skill.name}</div>
            <div className={classes.progress}>{skill.progress}%</div>
            <ProgressBar progress={skill.progress} className={classes.progress_bar} />
        </div>
    )
}

export default SkillBar

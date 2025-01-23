import type { FC } from 'react'
import type { AdditionalProps } from '@type/common.type'
import type { TSkillGroup } from '@type/skill.type'

import SkillBar from '../skill-bar/skill-bar'

import classNames from 'classnames'
import classes from './skill-list.module.css'

const SkillList: FC<AdditionalProps<TSkillGroup>> = ({ headline, skills, className }) => {
    return (
        <div className={classNames(classes.skill_wrapper, className)}>
            <h4 className={classes.skill_headline}>{headline}</h4>
            <div className={classes.skill_list}>
                {skills.map(skill => {
                    return <SkillBar name={skill.name} progress={skill.progress} key={skill.id} />
                })}
            </div>
        </div>
    )
}

export default SkillList

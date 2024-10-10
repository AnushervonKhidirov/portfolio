import type { FC } from 'react'
import type { TypeWithHTMLAttr } from '@type/common'
import type { TSkillList } from '@type/skill'

import SkillBar from '@common/skill-bar/skill-bar'

import classNames from 'classnames'
import classes from './skill-list.module.css'

const SkillList: FC<TypeWithHTMLAttr<TSkillList>> = ({ headline, skills, className }) => {
    return (
        <div className={classNames(classes.skill_wrapper, className)}>
            <h4 className={classes.skill_headline}>{headline}</h4>
            <div className={classes.skill_list}>
                {skills.map(skill => {
                    return <SkillBar name={skill.name} progress={skill.progress} key={skill.name} />
                })}
            </div>
        </div>
    )
}

export default SkillList

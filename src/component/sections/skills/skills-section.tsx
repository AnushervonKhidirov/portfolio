import { Position } from '@type/common'

import Section from '@common/section/section'
import SkillList from '@common/skill-list/skill-list'

import { frontEndSkills, backEndSkills } from './constant'

import classes from './skills-section.module.css'

const SkillsSection = () => {
    return (
        <Section title="Skills" headline className={classes.skill_section}>
            <SkillList headline={Position.FrontEnd} skills={frontEndSkills} />
            <SkillList headline={Position.BackEnd} skills={backEndSkills} />
        </Section>
    )
}

export default SkillsSection

import Section from '@common/section/section'
import SkillList from '@common/skill-list/skill-list'

import { frontEndSkills, backEndSkills } from './constant'

import classes from './skills-section.module.css'

const SkillsSection = () => {
    return (
        <Section title="Skills" className={classes.skill_section}>
            <SkillList headline="Front-End skills" skills={frontEndSkills} />
            <SkillList headline="Back-End skills" skills={backEndSkills} />
        </Section>
    )
}

export default SkillsSection

import type { TSkillList } from '@type/skill'

import Section from '@common/section/section'
import SkillList from '@common/skill-list/skill-list'

import classes from './skills-section.module.css'

const SkillsSection = ({ data }: { data: TSkillList[] }) => {
    return (
        <Section title="Skills" headline className={classes.skill_section}>
            {data.map(skillList => (
                <SkillList key={skillList.headline} headline={skillList.headline} skills={skillList.skills} />
            ))}
        </Section>
    )
}

export default SkillsSection

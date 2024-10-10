import BlockWrapper from '@common/block-wrapper/block-wrapper'
import SkillList from '@common/skill-list/skill-list'

import { frontEndSkills, backEndSkills } from './constant'

import classes from './skills-page.module.css'

const SkillsPage = () => {
    return (
        <BlockWrapper className={classes.skill_page_wrapper} fullHeight>
            <SkillList headline="Front-End skills" skills={frontEndSkills} />
            <SkillList headline="Back-End skills" skills={backEndSkills} />
        </BlockWrapper>
    )
}

export default SkillsPage

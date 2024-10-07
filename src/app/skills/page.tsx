import BlockWrapper from '@common/block-wrapper/block-wrapper'

import SkillBar from '@common/skill-bar/skill-bar'

const SkillsPage = () => {
    return (
        <BlockWrapper fullHeight>
            <SkillBar name="JavaScript" progress={80} />
        </BlockWrapper>
    )
}

export default SkillsPage

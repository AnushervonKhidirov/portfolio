import type { TIntroduction } from '@type/introduction'
import { Position } from '@type/common'

import Section from '@common/section/section'
import Introduction from '@component/introduction/introduction'

import { LaptopImage } from '@component/svg'

import { socialLinks } from '@constant/social-links'
import classes from './introduction-section.module.css'

const IntroductionSection = () => {
    const introductionData: TIntroduction = {
        name: 'Anushervon',
        position: Position.FrontEnd,
        about: 'I am a punctual and sociable front-end developer who likes working in a team, learning new technologies and improving skills. While working with the code, I am trying to write readable code and keeping it up to date.',
        socialLinks: socialLinks,
    }

    return (
        <Section title="Introduction" className={classes.introduction_section} fullHeight>
            <Introduction className={classes.introduction} {...introductionData} />
            <LaptopImage className={classes.image} />
        </Section>
    )
}

export default IntroductionSection

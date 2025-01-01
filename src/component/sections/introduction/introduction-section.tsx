import type { TIntroduction } from '@type/introduction'

import Section from '@common/section/section'
import Introduction from '@component/introduction/introduction'

import { LaptopImage } from '@component/svg'

import classes from './introduction-section.module.css'

const IntroductionSection = ({ data }: { data: TIntroduction }) => {
    return (
        <Section title="Introduction" className={classes.introduction_section}>
            <Introduction className={classes.introduction} {...data} />
            <LaptopImage className={classes.image} />
        </Section>
    )
}

export default IntroductionSection

import type { TIntroduction } from '@type/introduction'

import BlockWrapper from '@common/block-wrapper/block-wrapper'
import Introduction from '@component/introduction/introduction'

import { LaptopImage } from '@component/svg'

import { socialLinks } from '@constant/social-links'
import classes from './/home-page.module.css'

const HomePage = () => {
    const introductionData: TIntroduction = {
        name: 'Anushervon',
        position: 'Front-End Developer',
        about: 'I am a punctual and sociable front-end developer who likes working in a team, learning new technologies and improving skills. While working with the code, I am trying to write readable code and keeping it up to date.',
        socialLinks: socialLinks,
    }

    return (
        <BlockWrapper className={classes.wrapper} fullHeight>
            <Introduction className={classes.introduction} {...introductionData} />
            <LaptopImage className={classes.image} />
        </BlockWrapper>
    )
}

export default HomePage

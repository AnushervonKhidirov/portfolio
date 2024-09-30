import type { TIntroduction } from '@type/introduction'

import BlockWrapper from '@common/block-wrapper/block-wrapper'
import Introduction from '@component/introduction/introduction'

import { socialLinks } from '@constant/social-links'
import classes from './/home-page.module.css'

const HomePage = () => {
    const introductionData: TIntroduction = {
        name: 'Anushervon',
        position: 'Front-End Developer',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni rerum corrupti eius debitis, ipsum vero. Ut nostrum aspernatur, dolorem commodi, minima non eius harum incidunt amet nam odit! Nam!',
        socialLinks: socialLinks,
    }

    return (
        <BlockWrapper className={classes.wrapper} fullHeight>
            <Introduction {...introductionData} />
        </BlockWrapper>
    )
}

export default HomePage

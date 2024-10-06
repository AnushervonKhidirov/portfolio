import type { FC } from 'react'
import type { TIntroduction } from '@type/introduction'

import SocialLinks from '@common/social-links/social-links'

import classes from './introduction.module.css'

const Introduction: FC<TIntroduction> = ({ name, position, about, socialLinks }) => {
    return (
        <div className={classes.introduction}>
            <div>
                <h1 className={classes.name}>Hi, I'm {name}</h1>
                <h3 className={classes.position}>{position}</h3>
                <div className={classes.about}>{about}</div>
            </div>
            <SocialLinks className={classes.social} list={socialLinks} />
        </div>
    )
}

export default Introduction

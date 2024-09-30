import type { FC } from 'react'
import type { TIntroduction } from '@type/introduction'

import SocialLinks from '@common/social-links/social-links'

import classes from './introduction.module.css'

const Introduction: FC<TIntroduction> = ({ name, position, about, socialLinks }) => {
    return (
        <div>
            <h1>Hi, I'm {name}</h1>
            <h3 className={classes.position}>{position}</h3>
            <div>{about}</div>
            <SocialLinks list={socialLinks} />
        </div>
    )
}

export default Introduction

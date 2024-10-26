import type { FC } from 'react'
import type { TIntroduction } from '@type/introduction'
import type { TypeWithHTMLAttr } from '@type/common'

import SocialLinks from '@common/social-links/social-links'

import classNames from 'classnames'
import classes from './introduction.module.css'

const Introduction: FC<TypeWithHTMLAttr<TIntroduction>> = ({ name, position, about, socialLinks, className }) => {
    return (
        <div className={classNames(classes.introduction, className)}>
            <div>
                <h1 className={classes.name}>Hi, I'm {name}</h1>
                <h3 className={classes.position}>{position} Developer</h3>
                <div className={classes.about}>{about}</div>
            </div>
            <SocialLinks className={classes.social} socialLinks={socialLinks} />
        </div>
    )
}

export default Introduction

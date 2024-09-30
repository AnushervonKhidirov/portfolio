import type { FC } from 'react'
import type { TSocialLinkList } from '@type/social-links'

import Link from 'next/link'

import classNames from 'classnames'
import classes from './social-links.module.css'

const SocialLinks: FC<TSocialLinkList> = ({ list, className }) => {
    return (
        <div className={classNames(classes.social_links, className)}>
            {list.map(({ title, href }) => (
                <Link href={href} title={title} className={classes.social_link} key={href}>
                    {/* TODO: add social icons */}
                </Link>
            ))}
        </div>
    )
}

export default SocialLinks

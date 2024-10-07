import type { FC } from 'react'
import type { TypeWithHTMLAttr } from '@type/common'
import type { TSocialLinkList } from '@type/social-links'

import Link from 'next/link'
import { Tooltip } from '@mui/material'

import classNames from 'classnames'
import classes from './social-links.module.css'

const SocialLinks: FC<TypeWithHTMLAttr<TSocialLinkList>> = ({ list, className }) => {
    return (
        <div className={classNames(classes.social_links, className)}>
            {list.map(({ title, href, Icon }) => (
                <Tooltip title={title} slotProps={{ tooltip: { sx: { fontSize: '1.25rem' } } }} key={href}>
                    <Link href={href} target="_blank" className={classes.social_link}>
                        <Icon />
                    </Link>
                </Tooltip>
            ))}
        </div>
    )
}

export default SocialLinks

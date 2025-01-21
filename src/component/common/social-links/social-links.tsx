import type { FC } from 'react'
import type { AdditionalProps } from '@type/common'
import type { TSocialLinksProps } from '@type/social-links.type'

import Link from 'next/link'
import Tooltip from '@common/tooltip/tooltip'

import { GitHubIcon, LinkedInIcon, LeetCodeIcon, RoadmapIcon, WebsiteIcon } from '@component/svg'

import classNames from 'classnames'
import classes from './social-links.module.css'

const SocialLinks: FC<AdditionalProps<TSocialLinksProps>> = ({ socialLinks, className }) => {
    const Icons: { [key: string]: () => JSX.Element } = {
        GitHub: GitHubIcon,
        LinkedIn: LinkedInIcon,
        LeetCode: LeetCodeIcon,
        Roadmap: RoadmapIcon,
        Website: WebsiteIcon,
    }

    return (
        <div className={classNames(classes.social_links, className)}>
            {socialLinks.map(({ id, title, href }) => {
                const Icon = Icons[title]

                return (
                    <Tooltip title={title} key={id}>
                        <Link href={href} target="_blank" className={classes.social_link}>
                            <Icon />
                        </Link>
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default SocialLinks

import type { TSocialLinkList } from '@type/social-links'

import GitHubIcon from '@component/icon/github-icon'
import LinkedInIcon from '@component/icon/linkedin-icon'
import LeetCodeIcon from '@component/icon/leetcode-icon'
import RoadmapIcon from '@component/icon/roadmap-icon'

export const socialLinks: TSocialLinkList['list'] = [
    {
        title: 'GitHub',
        href: 'https://github.com/AnushervonKhidirov',
        Icon: GitHubIcon,
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/anushervon-khidirov/',
        Icon: LinkedInIcon,
    },
    {
        title: 'LeetCode',
        href: 'https://leetcode.com/u/anushervonkhidirov/',
        Icon: LeetCodeIcon,
    },
    {
        title: 'Roadmap',
        href: 'https://roadmap.sh/u/anushervon',
        Icon: RoadmapIcon,
    },
]

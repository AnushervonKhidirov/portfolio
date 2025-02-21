import type { TSocialLink } from '@type/social-links'

import { GitHubIcon, LinkedInIcon, LeetCodeIcon, RoadmapIcon } from '@component/svg'

export const socialLinks: TSocialLink[] = [
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

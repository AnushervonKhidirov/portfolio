'use client'

import type { FC } from 'react'
import type { TNavigationItem } from '@type/navigation'
import type { AdditionalProps } from '@type/common'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import classNames from 'classnames'
import classes from './navigation-button.module.css'

const NavigationButton: FC<AdditionalProps<TNavigationItem>> = ({ href, title, fixButtonPadding, className }) => {
    const pathname = usePathname()

    function isActive() {
        return href === pathname
    }

    return (
        <Link
            className={classNames(
                classes.nav_bnt,
                { [classes.fixPadding]: fixButtonPadding },
                { [classes.active]: isActive() },
                className,
            )}
            href={href}
        >
            {title}
        </Link>
    )
}

export default NavigationButton

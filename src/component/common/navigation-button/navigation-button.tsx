'use client'

import type { FC } from 'react'
import type { TNavigationItem } from '@type/navigation'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'

import classes from './navigation-button.module.css'

const NavigationButton: FC<TNavigationItem> = ({ href, title, className }) => {
    const pathname = usePathname()

    function isActive() {
        return href === pathname
    }

    return (
        <Link className={classNames(classes.nav_bnt, className, { [classes.active]: isActive() })} href={href}>
            {title}
        </Link>
    )
}

export default NavigationButton
'use client'

import type { FC } from 'react'
import type { TNavigationItem } from '@type/navigation'
import type { AdditionalProps } from '@type/common'

import Link from 'next/link'

import useActiveNavigation from '@store/active-navigation'

import classNames from 'classnames'
import classes from './navigation-button.module.css'

const NavigationButton: FC<AdditionalProps<TNavigationItem>> = ({ href, title, fixButtonPadding, className }) => {
    const activeNavigation = useActiveNavigation(state => state)

    function isActive() {
        return title === activeNavigation.active
    }

    function clickHandler() {
        activeNavigation.setActive(title)
    }

    return (
        <Link
            className={classNames(
                classes.nav_bnt,
                { [classes.fixPadding]: fixButtonPadding },
                { [classes.active]: isActive() },
                className,
            )}
            onClick={clickHandler}
            href={href}
        >
            {title}
        </Link>
    )
}

export default NavigationButton

import type { FC } from 'react'
import type { AdditionalProps } from '@type/common.type'
import type { TNavigationList } from '@type/navigation.type'

import NavigationButton from '../navigation-button/navigation-button'

import classNames from 'classnames'
import classes from './navigation.module.css'

const Navigation: FC<AdditionalProps<TNavigationList>> = ({ navigationLinks, fixButtonPadding, className }) => {
    return (
        <nav className={classNames(classes.navigation, className)}>
            {navigationLinks.map(({ href, title }) => (
                <NavigationButton href={href} title={title} key={href} fixButtonPadding={fixButtonPadding} />
            ))}
        </nav>
    )
}

export default Navigation

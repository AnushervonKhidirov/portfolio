import type { FC } from 'react'
import type { TNavigationList } from '@type/navigation'

import NavigationButton from '../navigation-button/navigation-button'

import classNames from 'classnames'
import classes from './navigation.module.css'

const Navigation: FC<TNavigationList> = ({ list, className }) => {
    return (
        <nav className={classNames(classes.navigation, className)}>
            {list.map(({ href, title }) => (
                <NavigationButton href={href} title={title} key={href} />
            ))}
        </nav>
    )
}

export default Navigation

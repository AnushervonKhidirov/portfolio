import type { FC } from 'react'
import type { AdditionalProps } from '@type/common'
import type { TNavigationList } from '@type/navigation'

import NavigationButton from '../navigation-button/navigation-button'
import Section from '@common/section/section'

import classNames from 'classnames'
import classes from './navigation.module.css'

const Navigation: FC<AdditionalProps<TNavigationList>> = ({ navigationLinks, fixButtonPadding, className }) => {
    return (
        <nav className={classNames(classes.navigation, className)}>
            <Section title="navigation" className={classes.navigation_section}>
                {navigationLinks.map(({ href, title }) => (
                    <NavigationButton href={href} title={title} key={href} fixButtonPadding={fixButtonPadding} />
                ))}
            </Section>
        </nav>
    )
}

export default Navigation

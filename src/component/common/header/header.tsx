import Navigation from '@common/navigation/navigation'
import Section from '@common/section/section'

import { navigationList } from '@constant/navigation'

import classes from './header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <Section>
                <Navigation navigationLinks={navigationList} fixButtonPadding />
            </Section>
        </header>
    )
}

export default Header

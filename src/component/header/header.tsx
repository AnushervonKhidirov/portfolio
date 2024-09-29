import Navigation from '@common/navigation/navigation'

import { navigationItems } from '@constant/navigation'

import classes from './header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <Navigation list={navigationItems} />
        </header>
    )
}

export default Header

import BlockWrapper from '@component/common/block-wrapper/block-wrapper'
import Navigation from '@common/navigation/navigation'

import { navigationItems } from '@constant/navigation'

import classes from './header.module.css'

const Header = () => {
    return (
        <header>
            <BlockWrapper className={classes.header_block}>
                <Navigation list={navigationItems} />
            </BlockWrapper>
        </header>
    )
}

export default Header

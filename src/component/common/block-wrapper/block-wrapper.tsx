import { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'
import classes from './block-wrapper.module.css'

type TBlockWrapper = PropsWithChildren & {
    className?: string
    fullHeight?: boolean
}

const BlockWrapper: FC<TBlockWrapper> = ({ className, children, fullHeight = false }) => {
    return (
        <div className={classNames(classes.section, { [classes.fullHeight]: fullHeight }, className)}>{children}</div>
    )
}

export default BlockWrapper

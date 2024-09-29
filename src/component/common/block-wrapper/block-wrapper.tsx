import { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'
import classes from './block-wrapper.module.css'

type TBlockWrapper = PropsWithChildren & {
    className?: string
}

const BlockWrapper: FC<TBlockWrapper> = ({ className, children }) => {
    return <div className={classNames(classes.section, className)}>{children}</div>
}

export default BlockWrapper

import type { FC } from 'react'
import type { TypeWithHTMLAttr } from '@type/common'

import classNames from 'classnames'
import classes from './progress-bar.module.css'

const ProgressBar: FC<TypeWithHTMLAttr<{ progress: number }>> = ({ progress, className }) => {
    return (
        <div className={classNames(classes.progress_bar, className)}>
            <div className={classes.progress_line} style={{ width: `${progress}%` }}></div>
        </div>
    )
}

export default ProgressBar
import type { FC } from 'react'
import type { AdditionalProps } from '@type/common.type'
import type { TAlert } from '@type/alert.type'

import { createPortal } from 'react-dom'

import classNames from 'classnames'
import classes from './alert.module.css'

const Alert: FC<AdditionalProps<TAlert>> = ({ type, header, message, className }) => {
    const fullMessage = typeof message === 'string' ? message : message.join(', <br />')

    const colors = {
        success: classes.success_color,
        warning: classes.warning_color,
        error: classes.error_color,
    }

    return createPortal(
        <div className={classNames(classes.alert_bg, className)}>
            <div className={classes.alert_container}>
                <h5 className={classNames(classes.header, colors[type])}>{header}</h5>
                <div className={classes.info}>
                    <div dangerouslySetInnerHTML={{ __html: fullMessage }} />
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default Alert

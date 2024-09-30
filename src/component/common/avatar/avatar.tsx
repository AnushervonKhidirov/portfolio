import type { FC } from 'react'

import classNames from 'classnames'
import classes from './avatar.module.css'

type TAvatar = {
    imageSrc: string
    className?: string
}

const Avatar: FC<TAvatar> = ({ imageSrc, className }) => {
    return (
        <div className={classNames(classes.avatar, className)}>
            <div className={classes.image} style={{ backgroundImage: `url(${imageSrc})` }}></div>
        </div>
    )
}

export default Avatar

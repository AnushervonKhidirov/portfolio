import type { FC } from 'react'
import type { AdditionalProps } from '@type/common'

import classNames from 'classnames'
import classes from './list.module.css'

type TList = {
    title: string
    list: string[]
}

export const ColumnList: FC<AdditionalProps<TList>> = ({ title, list, className }) => {
    return (
        <div className={classNames(classes.list_wrapper, classes.column_list, className)}>
            <span>{title}:</span>

            <ul className={classes.list}>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export const RowList: FC<AdditionalProps<TList>> = ({ title, list, className }) => {
    return (
        <div className={classNames(classes.list_wrapper, classes.row_list, className)}>
            <span>{title}: </span>

            <span className={classes.list}>{list.join(', ')}</span>
        </div>
    )
}

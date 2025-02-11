import type { FC } from 'react'
import type { AdditionalProps, TIdValueObject } from '@type/common.type'

import classNames from 'classnames'
import classes from './list.module.css'

type TList = {
    title: string
    list: TIdValueObject<string | number>[]
}

export const ColumnList: FC<AdditionalProps<TList>> = ({ title, list, className }) => {
    return (
        <div className={classNames(classes.list_wrapper, classes.column_list, className)}>
            <span>{title}:</span>

            <ul className={classes.list}>
                {list.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export const RowList: FC<AdditionalProps<TList & { highlight?: boolean }>> = ({
    title,
    list,
    highlight,
    className,
}) => {
    const listValues = list.map(item => item.name)

    return (
        <div className={classNames(classes.list_wrapper, classes.row_list, className)}>
            <span>{title}: </span>

            <span className={classNames(classes.list, { [classes.highlight]: highlight })}>
                {listValues.join(', ')}
            </span>
        </div>
    )
}

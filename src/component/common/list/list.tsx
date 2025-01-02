import classNames from 'classnames'
import classes from './list.module.css'

export const ColumnList = ({ title, list }: { title: string; list: string[] }) => {
    return (
        <div className={classNames(classes.list_wrapper, classes.column_list)}>
            <span>{title}:</span>

            <ul className={classes.list}>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export const RowList = ({ title, list }: { title: string; list: string[] }) => {
    return (
        <div className={classNames(classes.list_wrapper, classes.row_list)}>
            <span>{title}: </span>

            <span className={classes.list}>{list.join(', ')}</span>
        </div>
    )
}

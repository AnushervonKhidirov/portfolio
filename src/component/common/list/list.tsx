import classes from './list.module.css'

const List = ({ title, list }: { title: string, list: string[] }) => {
    return (
        <div className={classes.list}>
            <span>{title}:</span>
            <ul className={classes.task_list}>
                {list.map(task => (
                    <li className={classes.task} key={task}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List

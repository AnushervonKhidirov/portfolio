import classes from './tasks.module.css'

const Tasks = ({ list }: { list: string[] }) => {
    return (
        <div className={classes.tasks}>
            <span>Tasks:</span>
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

export default Tasks

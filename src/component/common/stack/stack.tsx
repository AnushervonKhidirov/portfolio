import classes from './stack.module.css'

const Stack = ({ list }: { list: string[] }) => {
    return (
        <div className={classes.stack}>
            <span>Stack: </span>
            <span className={classes.stack_list}>{list.join(', ')}</span>
        </div>
    )
}

export default Stack

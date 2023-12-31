import type { FC } from 'react'
import styles from './Loader.module.css'

const Loader: FC = () => {
    return (
        <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader

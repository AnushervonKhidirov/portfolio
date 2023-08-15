import type { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Project.module.css'

interface IProject {
    name: string
    description: string | null
    language: string
    hasPages: boolean
    userName: string
    repoUrl: string
}

const Project: FC<IProject> = ({ name, description, language, repoUrl, hasPages, userName }) => {
    function createPagesLink() {
        return `https://${userName.toLocaleLowerCase()}.github.io/${name}/`
    }

    function getProperName() {
        return name.replace('-', ' ')
    }

    return (
        <div className={styles.repo}>
            <img src='' alt='' className={styles.image} />
            <div className={styles.project_name}>{getProperName()}</div>
            {description && <div className={styles.project_desc}>{description}</div>}
            <div className={styles.project_lang}>{language}</div>

            <Link to={repoUrl} title='See repository' target='_blank' className={styles.repo_link}>
                See repository
            </Link>

            {hasPages && (
                <Link
                    to={createPagesLink()}
                    title='Visit site'
                    target='_blank'
                    className={styles.site_link}
                >
                    Visit site
                </Link>
            )}
        </div>
    )
}

export default Project

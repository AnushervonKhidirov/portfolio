import { useLayoutEffect, type FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../services/store'
import { UserConfig } from '../../utils/types'
import { getRepos } from '../../services/store/project/actions'

import Loader from '../common/loader/Loader'
import Error from '../common/error/Error'
import Project from '../project/Project'

import styles from './ProjectList.module.css'

const ProjectList: FC = () => {
    const dispatch = useAppDispatch()
    const projects = useAppSelector(store => store.project)

    useLayoutEffect(() => {
        dispatch(getRepos())
    }, [dispatch])

    return (
        <div className={styles.project_list}>
            {projects.isLoading ? (
                <Loader />
            ) : projects.rejected ? (
                <Error />
            ) : (
                projects.repos.map(repo => (
                    <Project
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        language={repo.language}
                        hasPages={repo.has_pages}
                        userName={UserConfig.USER_LOGIN}
                        repoUrl={repo.html_url}
                    />
                ))
            )}
        </div>
    )
}

export default ProjectList

import type { FC } from 'react'
import type { AdditionalProps } from '@type/common'
import type { TProjectList } from '@type/projects'

import Project from '../project/project'

import classNames from 'classnames'
import classes from './project-list.module.css'

const ProjectList: FC<AdditionalProps<TProjectList>> = ({ list, className }) => {
    return (
        <div className={classNames(classes.project_list, className)}>
            {list.map(project => {
                return (
                    <Project
                        name={project.name}
                        image={project.image}
                        stack={project.stack}
                        links={project.links}
                        key={project.name}
                    />
                )
            })}
        </div>
    )
}

export default ProjectList

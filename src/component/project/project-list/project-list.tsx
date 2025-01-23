import type { FC } from 'react'
import type { AdditionalProps } from '@type/common.type'
import type { TProjectList } from '@type/projects.type'

import Project from '../project/project'

import classNames from 'classnames'
import classes from './project-list.module.css'

const ProjectList: FC<AdditionalProps<TProjectList>> = ({ list, className }) => {
    return (
        <div className={classNames(classes.project_list, className)}>
            {list.map(project => {
                return (
                    <Project
                        title={project.title}
                        imageUrl={project.imageUrl}
                        stacks={project.stacks}
                        links={project.links}
                        key={project.id}
                    />
                )
            })}
        </div>
    )
}

export default ProjectList

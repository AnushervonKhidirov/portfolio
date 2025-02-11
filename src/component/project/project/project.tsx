import type { FC } from 'react'
import type { TProject } from '@type/projects.type'

import SocialLinks from '@common/social-links/social-links'
import { RowList } from '@common/list/list'

import classes from './project.module.css'

const Project: FC<{ project: TProject }> = ({ project }) => {
    return (
        <div className={classes.project}>
            <img src={project.image} alt={project.title} />

            <div className={classes.project_info}>
                <h4>{project.title}</h4>
                {project.links && <SocialLinks socialLinks={project.links} />}
                <RowList title="Stack" list={project.stack} highlight />
            </div>
        </div>
    )
}

export default Project

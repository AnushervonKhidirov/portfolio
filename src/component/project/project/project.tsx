import type { FC } from 'react'
import type { TProject } from '@type/projects.type'

import SocialLinks from '@common/social-links/social-links'
import { RowList } from '@common/list/list'

import classes from './project.module.css'

const Project: FC<Omit<TProject, 'id'>> = ({ title, imageUrl, stacks, links }) => {
    return (
        <div className={classes.project}>
            <img src={imageUrl} alt={title} />

            <div className={classes.project_info}>
                <h4>{title}</h4>
                {links && <SocialLinks socialLinks={links} />}
                <RowList title="Stack" list={stacks} highlight />
            </div>
        </div>
    )
}

export default Project

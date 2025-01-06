import type { FC } from 'react'
import type { TProject } from '@type/projects'

import Image from 'next/image'
import SocialLinks from '@common/social-links/social-links'
import { RowList } from '@common/list/list'

import classes from './project.module.css'

const Project: FC<TProject> = ({ name, image, stack, links }) => {
    console.log(links)

    return (
        <div className={classes.project}>
            <Image src={image.src} width={image.width} height={image.height} alt={name} />

            <div className={classes.project_info}>
                <h4>{name}</h4>
                {links && <SocialLinks socialLinks={links} />}
                <RowList title="Stack" list={stack} highlight />
            </div>
        </div>
    )
}

export default Project

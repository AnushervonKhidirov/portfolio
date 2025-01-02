import type { FC } from 'react'
import type { TProject } from '@type/projects'

import Link from 'next/link'
import Image from 'next/image'
import Tooltip from '@common/tooltip/tooltip'
import { RowList } from '@common/list/list'

import classes from './project.module.css'

const Project: FC<TProject> = ({ name, image, stack, link }) => {
    return link ? (
        <Tooltip title={`Visit ${name}`} followCursor>
            <Link href={link} target="_blank" className={classes.project}>
                <Image src={image.src} width={image.width} height={image.height} alt={name} />

                <div className={classes.project_info}>
                    <h4>{name}</h4>
                    <RowList title="Stack" list={stack} />
                </div>
            </Link>
        </Tooltip>
    ) : (
        <div className={classes.project}>
            <Image src={image.src} width={image.width} height={image.height} alt={name} />

            <div className={classes.project_info}>
                <h4>{name}</h4>
                <RowList title="Stack" list={stack} />
            </div>
        </div>
    )
}

export default Project

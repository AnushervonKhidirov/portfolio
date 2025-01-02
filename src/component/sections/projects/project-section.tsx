import type { TProject } from '@type/projects'

import Section from '@common/section/section'

import classes from './project-section.module.css'

const ProjectSection = ({ data }: { data: TProject[] }) => {
    return <Section title="Projects" headline className={classes.contacts}></Section>
}

export default ProjectSection

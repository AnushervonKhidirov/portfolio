import type { TProjects } from '@type/projects'

import Section from '@common/section/section'

import classes from './project-section.module.css'

const ProjectSection = ({ data }: { data: TProjects[] }) => {
    return <Section title="Projects" headline className={classes.contacts}></Section>
}

export default ProjectSection

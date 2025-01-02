import type { TProject } from '@type/projects'

import Section from '@common/section/section'
import ProjectList from '@component/project/project-list/project-list'

const ProjectSection = ({ data }: { data: TProject[] }) => {
    return (
        <Section title="Projects" headline>
            <ProjectList list={data} />
        </Section>
    )
}

export default ProjectSection

'use client'
import type { TProject } from '@type/projects.type'

import { useState, useEffect } from 'react'

import { Projects } from '@services/projects'

import Section from '@common/section/section'
import ProjectList from '@component/project/project-list/project-list'

const ProjectSection = () => {
    const projects = new Projects()

    const [projectList, setProjectList] = useState<TProject[] | null>(null)

    async function getProjects() {
        const projectsResponse = await projects.findAll()
        if (!projectsResponse) return
        setProjectList(projectsResponse)
    }

    useEffect(() => {
        getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        projectList && (
            <Section title="Projects" headline>
                <ProjectList list={projectList} />
            </Section>
        )
    )
}

export default ProjectSection

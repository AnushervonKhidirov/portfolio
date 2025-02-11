'use client'
import type { TProject } from '@type/projects.type'

import { useState, useEffect } from 'react'

import { ResponseError } from '@services/errors'
import { Projects } from '@services/projects'

import Section from '@common/section/section'
import ProjectList from '@component/project/project-list/project-list'
import Alert from '@common/alert/alert'

const ProjectSection = () => {
    const projects = new Projects()

    const [projectList, setProjectList] = useState<TProject[] | null>(null)
    const [error, setError] = useState<ResponseError | null>(null)

    async function getProjects() {
        const projectsResponse = await projects.findAll()

        if (projectsResponse instanceof ResponseError) {
            setError(projectsResponse)
            return
        }

        setProjectList(projectsResponse)
    }

    useEffect(() => {
        getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) return <Alert type="error" header={error.error} message={error.message} />

    return (
        projectList && (
            <Section title="Projects" headline>
                <ProjectList list={projectList} />
            </Section>
        )
    )
}

export default ProjectSection

'use client'
import type { TCompany } from '@type/companies.type'

import { useState, useEffect } from 'react'

import { Companies } from '@services/companies'
import { ResponseError } from '@services/errors'

import Section from '@common/section/section'
import CompanyList from '@component/company/company-list/company-list'
import Alert from '@common/alert/alert'

const ExperienceSection = () => {
    const companies = new Companies()

    const [experiences, setExperiences] = useState<TCompany[] | null>(null)
    const [error, setError] = useState<ResponseError | null>(null)

    async function getExperiences() {
        const experiences = await companies.findAll({ activity: 'experience' })
        if (experiences instanceof ResponseError) {
            setError(experiences)
            return
        }

        setExperiences(experiences)
    }

    useEffect(() => {
        getExperiences()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) return <Alert type="error" header={error.error} message={error.message} />
    return (
        experiences && (
            <Section title="Experiences" headline>
                <CompanyList list={experiences} />
            </Section>
        )
    )
}

export default ExperienceSection

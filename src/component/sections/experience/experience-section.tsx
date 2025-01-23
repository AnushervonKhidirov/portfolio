'use client'
import type { TCompany } from '@type/companies.type'

import { useState, useEffect } from 'react'

import { Companies } from '@services/companies'

import Section from '@common/section/section'
import CompanyList from '@component/company/company-list/company-list'

const ExperienceSection = () => {
    const companies = new Companies()

    const [experiences, setExperiences] = useState<TCompany[] | null>(null)

    async function getExperiences() {
        const experiences = await companies.findAll({ type: 'experience' })
        setExperiences(experiences)
    }

    useEffect(() => {
        getExperiences()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        experiences && (
            <Section title="Experiences" headline>
                <CompanyList list={experiences} />
            </Section>
        )
    )
}

export default ExperienceSection

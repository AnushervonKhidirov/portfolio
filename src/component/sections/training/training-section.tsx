'use client'
import type { TCompany } from '@type/companies.type'

import { useState, useEffect } from 'react'

import { Companies } from '@services/companies'

import Section from '@common/section/section'
import CompanyList from '@component/company/company-list/company-list'

const TrainingSection = () => {
    const companies = new Companies()

    const [trainings, setTrainings] = useState<TCompany[] | null>(null)

    async function getTrainings() {
        const trainings = await companies.findAll({ type: 'training' })
        setTrainings(trainings)
    }

    useEffect(() => {
        getTrainings()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        trainings && (
            <Section title="Trainings" headline>
                <CompanyList list={trainings} />
            </Section>
        )
    )
}

export default TrainingSection

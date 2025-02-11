'use client'
import type { TCompany } from '@type/companies.type'

import { useState, useEffect } from 'react'

import { Companies } from '@services/companies'
import { ResponseError } from '@services/errors'

import Section from '@common/section/section'
import CompanyList from '@component/company/company-list/company-list'
import Alert from '@common/alert/alert'

const TrainingSection = () => {
    const companies = new Companies()

    const [trainings, setTrainings] = useState<TCompany[] | null>(null)
    const [error, setError] = useState<ResponseError | null>(null)

    async function getTrainings() {
        const trainings = await companies.findAll({ activity: 'training' })

        if (trainings instanceof ResponseError) {
            setError(trainings)
            return
        }

        setTrainings(trainings)
    }

    useEffect(() => {
        getTrainings()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) return <Alert type="error" header={error.error} message={error.message} />
    return (
        trainings &&
        trainings.length > 0 && (
            <Section title="Trainings" headline>
                <CompanyList list={trainings} />
            </Section>
        )
    )
}

export default TrainingSection

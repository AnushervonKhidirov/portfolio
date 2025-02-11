'use client'
import type { TSkillGroup } from '@type/skill.type'

import { useState, useEffect } from 'react'

import { Skills } from '@services/skills'
import { ResponseError } from '@services/errors'

import Section from '@common/section/section'
import SkillList from '@component/skill/skill-list/skill-list'
import Alert from '@common/alert/alert'

import classes from './skills-section.module.css'

const SkillsSection = () => {
    const skills = new Skills()
    const [groupedSkills, setGroupedSkills] = useState<TSkillGroup[] | null>(null)
    const [error, setError] = useState<ResponseError | null>(null)

    async function collectSkills() {
        const skillList = await skills.findAll()
        if (skillList instanceof ResponseError) {
            setError(skillList)
            return
        }
        const groupedSkills = skills.groupSkills(skillList)
        setGroupedSkills(groupedSkills)
    }

    useEffect(() => {
        collectSkills()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) return <Alert type="error" header={error.error} message={error.message} />

    return (
        groupedSkills && (
            <Section title="Skills" headline className={classes.skill_section}>
                {groupedSkills.map(skillGroup => (
                    <SkillList key={skillGroup.headline} headline={skillGroup.headline} skills={skillGroup.skills} />
                ))}
            </Section>
        )
    )
}

export default SkillsSection

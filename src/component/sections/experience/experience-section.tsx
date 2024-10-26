import Section from '@common/section/section'
import ExperienceBar from '@common/experience-bar/experience-bar'
import { Position } from '@type/common'

const ExperienceSection = () => {
    return (
        <Section title="Experience" headline>
            <ExperienceBar
                name="Crucial Interactive"
                position={Position.FrontEnd}
                dates={{ from: new Date('01/01/2020'), to: new Date() }}
                tasks={['nothing']}
                stack={['HTML', 'CSS', 'JavaScript', 'React', 'Redux']}
            />
        </Section>
    )
}

export default ExperienceSection

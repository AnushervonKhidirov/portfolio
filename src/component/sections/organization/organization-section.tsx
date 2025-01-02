import type { TOrganization } from '@type/organization'

import Section from '@common/section/section'
import OrganizationList from '@component/organization/organization-list/organization-list'

const OrganizationSection = ({ data, title }: { title: string; data: TOrganization[] }) => {
    return (
        <Section title={title} headline>
            <OrganizationList list={data} />
        </Section>
    )
}

export default OrganizationSection

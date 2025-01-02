import type { FC } from 'react'
import type { TOrganizationList } from '@type/organization'
import type { AdditionalProps } from '@type/common'

import OrganizationBlock from '@component/organization/organization-block/organization-block'

import classes from './organization-list.module.css'
import classNames from 'classnames'

const OrganizationList: FC<AdditionalProps<TOrganizationList>> = ({ list, className }) => {
    return (
        <div className={classNames(classes.organization_list, className)}>
            {list.map(organization => (
                <OrganizationBlock {...organization} key={organization.name} />
            ))}
        </div>
    )
}

export default OrganizationList

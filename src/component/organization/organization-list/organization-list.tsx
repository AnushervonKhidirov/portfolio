import type { FC } from 'react'
import type { TOrganizationList } from '@type/organization'
import type { AdditionalProps } from '@type/common'

import Organization from '@component/organization/organization/organization'

import classNames from 'classnames'
import classes from './organization-list.module.css'

const OrganizationList: FC<AdditionalProps<TOrganizationList>> = ({ list, className }) => {
    return (
        <div className={classNames(classes.organization_list, className)}>
            {list.map(organization => (
                <Organization {...organization} key={organization.name} />
            ))}
        </div>
    )
}

export default OrganizationList

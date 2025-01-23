import type { FC } from 'react'
import type { AdditionalProps } from '@type/common.type'
import type { TCompany } from '@type/companies.type'

import Company from '../company/company'

import classNames from 'classnames'
import classes from './company-list.module.css'

const CompanyList: FC<AdditionalProps<{ list: TCompany[] }>> = ({ list, className }) => {
    return (
        <div className={classNames(classes.company_list, className)}>
            {list.map(company => (
                <Company {...company} key={company.id} />
            ))}
        </div>
    )
}

export default CompanyList

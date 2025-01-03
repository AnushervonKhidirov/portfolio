import type { FC } from 'react'
import type { TContact } from '@type/contacts'

import Section from '@common/section/section'
import ContactsForm from '@component/contacts/contacts-form/contacts-form'
import ContactsInfo from '@component/contacts/contacts-info/contacts-info'

import classes from './contacts-section.module.css'

const ContactsSection: FC<{ data: TContact[] }> = ({ data }) => {
    return (
        <Section title="Contacts" headline className={classes.contacts}>
            <ContactsForm />
            <ContactsInfo data={data} />
        </Section>
    )
}

export default ContactsSection

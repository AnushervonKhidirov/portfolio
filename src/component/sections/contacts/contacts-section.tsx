import type { TContacts } from '@type/contacts'

import Section from '@common/section/section'

import classes from './contacts-section.module.css'

const ContactsSection = ({ data }: { data: TContacts }) => {
    return <Section title="Contacts" headline className={classes.contacts}></Section>
}

export default ContactsSection

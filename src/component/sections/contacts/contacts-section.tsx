'use client'
import type { TContact } from '@type/contacts.type'

import { useEffect, useState } from 'react'

import { Contacts } from '@services/contacts'

import Section from '@common/section/section'
import ContactsForm from '@component/contacts/contacts-form/contacts-form'
import ContactsInfo from '@component/contacts/contacts-info/contacts-info'

import classes from './contacts-section.module.css'

const ContactsSection = () => {
    const contacts = new Contacts()

    const [contactList, setContactList] = useState<TContact[] | null>(null)

    async function getContacts() {
        const concatList = await contacts.findAll()
        setContactList(concatList)
    }

    useEffect(() => {
        getContacts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        contactList && (
            <Section title="Contacts" headline className={classes.contacts}>
                <ContactsForm />
                <ContactsInfo contacts={contactList} />
            </Section>
        )
    )
}

export default ContactsSection

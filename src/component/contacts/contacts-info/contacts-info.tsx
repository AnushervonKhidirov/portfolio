import type { FC } from 'react'
import type { TContact } from '@type/contacts'

import Link from 'next/link'

import classes from './contacts-info.module.css'

const ContactsInfo: FC<{ contacts: TContact[] }> = ({ contacts }) => {
    return (
        <div>
            <h6>Contacts</h6>
            {contacts.map(contact => {
                return (
                    <div className={classes.contact_item} key={contact.title}>
                        <span>{contact.title}: </span>
                        {contact.link ? (
                            <Link href={contact.link} target="_blank">
                                {contact.value}
                            </Link>
                        ) : (
                            <span>{contact.value}</span>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ContactsInfo

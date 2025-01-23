'use client'
import type { FormEvent } from 'react'
import type { TMail } from '@type/mail'

import { Mail } from '@services/mail'

import classes from './contacts-form.module.css'

const ContactsForm = () => {
    const mail = new Mail()

    function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData) as TMail

        mail.send(body)
    }

    return (
        <form className={classes.form} onSubmit={submitForm}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactsForm

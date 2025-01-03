'use client'
import { FormEvent } from 'react'
import classes from './contacts-form.module.css'

const ContactsForm = () => {
    function submitForm(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <form className={classes.form} onSubmit={submitForm}>
            <input type="text" name="name" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactsForm

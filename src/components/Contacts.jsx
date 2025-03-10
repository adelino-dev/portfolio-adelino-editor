import React from 'react'
import './Contacts.css'
import whatsapp_icon from '../assets/whatsapp-icon.png'
import email_icon from '../assets/email-icon.png'

const Contacts = () => {
  return (
    <section id="contacts">
        <h2>Contatos</h2>
        <span id="whatsapp">
            <img src={whatsapp_icon} alt="ícone do Whatsapp" />
            <p>Whatsapp: (00) 99999-9999</p>
        </span>
        <span id="email">
            <img src={email_icon} alt="ícone de e-mail" />
            <p>E-mail: adelino.editor@gmail.com</p>
        </span>
    </section>
  )
}

export default Contacts
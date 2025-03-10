import React from 'react'
import './Contacts.css'
const Contacts = () => {
  return (
    <section id="contacts">
        <h2>Contatos</h2>
        <span id="whatsapp">
            <img src="src/assets/whatsapp-icon.png" alt="ícone do Whatsapp" />
            <p>Whatsapp: (00) 99999-9999</p>
        </span>
        <span id="email">
            <img src="src/assets/email-icon.png" alt="ícone de e-mail" />
            <p>E-mail: adelino.editor@gmail.com</p>
        </span>
    </section>
  )
}

export default Contacts
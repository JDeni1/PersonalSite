import React from 'react'
import { contactInfo } from '../Contacts/ContactData';
import { Contact } from '../Contacts/Contacts';

export const Home = () => {
  return (
    <>
      <div>Home</div>

      <div className="contacts-section">
        <div className="contacts-grid">
          {contactInfo.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </>
  )
}

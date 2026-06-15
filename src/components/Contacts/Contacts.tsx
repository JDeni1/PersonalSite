import type { ContactInfo } from '../../Types';
import { socialIcons } from '../../assets/SocialIcons';
import './Contacts.css';

interface ContactCardProps {
  contact: ContactInfo;
}

export const Contact = ({ contact }: ContactCardProps) => {
  return (
    <a
      href={contact.href}
      target={contact.external ? '_blank' : undefined}
      rel={contact.external ? 'noopener noreferrer' : undefined}
      className="contact-card"
    >
      <div className="contact-icon">
        {socialIcons[contact.icon]}
      </div>
      <div className="contact-text">
        <p className="contact-label">{contact.label}</p>
        <p className="contact-value">{contact.value}</p>
      </div>
    </a>
  );
};
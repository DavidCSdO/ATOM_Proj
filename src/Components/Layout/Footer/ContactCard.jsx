import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GoArrowUpRight } from 'react-icons/go';
import atomLogo from '../../../assets/ATOMLOGOT.png';
import './ContactCard.css';

const CONTACT_LINKS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+55 24 99292-8110',
    href: 'https://wa.me/5524992928110',
    icon: FaWhatsapp,
    colorClass: 'cc-whatsapp',
    iconClass: 'cc-icon-whatsapp',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@atom_con',
    href: 'https://www.instagram.com/atom_con/',
    icon: FaInstagram,
    colorClass: 'cc-instagram',
    iconClass: 'cc-icon-instagram',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'David Cardoso',
    href: 'https://www.linkedin.com/in/david-cardoso-659239215/',
    icon: FaLinkedinIn,
    colorClass: 'cc-linkedin',
    iconClass: 'cc-icon-linkedin',
  },
  {
    id: 'email',
    label: 'E-mail',
    value: 'cardosodavid92@gmail.com',
    href: 'mailto:cardosodavid92@gmail.com',
    icon: HiOutlineMail,
    colorClass: 'cc-email',
    iconClass: 'cc-icon-email',
  },
  {
    id: 'phone',
    label: 'Telefone',
    value: '+55 24 99292-8110',
    href: 'tel:+5524992928110',
    icon: FaPhoneAlt,
    colorClass: 'cc-phone',
    iconClass: 'cc-icon-phone',
  },
];

export default function ContactCard({ onClose }) {
  return (
    <div className="contact-card-overlay" onClick={onClose}>
      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          className="contact-card-close"
          onClick={onClose}
          aria-label="Fechar card de contato"
          type="button"
        >
          &times;
        </button>

        {/* Header */}
        <div className="cc-header">
          <div className="cc-avatar-ring">
            <img src={atomLogo} alt="ATOM Logo" />
          </div>
          <h3>Fale com a ATOM</h3>
          <p>Transformamos ideias em resultados</p>
          <div className="cc-status">
            <span className="cc-status-dot" />
            Respondemos rápido
          </div>
        </div>

        {/* Contact Links */}
        <div className="cc-links">
          {CONTACT_LINKS.map((link) => {
            const IconComp = link.icon;

            return (
              <a
                key={link.id}
                className={`cc-link-item ${link.colorClass}`}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={`${link.label}: ${link.value}`}
              >
                <div className={`cc-link-icon ${link.iconClass}`}>
                  <IconComp />
                </div>
                <div className="cc-link-text">
                  <span className="cc-link-label">{link.label}</span>
                  <span className="cc-link-value">{link.value}</span>
                </div>
                <GoArrowUpRight className="cc-link-arrow" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

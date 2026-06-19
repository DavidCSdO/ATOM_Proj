// src/components/Footer.jsx
import { useState } from 'react';
import './Footer.css';
import atomLogo from '../../../assets/ATOMLOGOT.png';
import FlowingMenu from './FlowingMenu';
import ProfileCard from './ProfileCard';
import ContactCard from './ContactCard';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeCard, setActiveCard] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const menuItems = [
    {
      link: '#services',
      text: 'Sites',
      image: 'https://picsum.photos/600/400?random=1',
      onClick: () => setActiveCard({
        name: 'Alta Performance',
        title: 'Sites rápidos e modernos',
        handle: 'atom.agency',
        status: 'Disponível',
        contactText: 'Ver Portfólio',
        avatarUrl: 'https://picsum.photos/600/400?random=1',
        showUserInfo: true,
        enableTilt: true,
        enableMobileTilt: false,
        onContactClick: () => {},
        behindGlowColor: 'rgba(124, 58, 237, 0.67)',
        behindGlowEnabled: true,
        innerGradient: 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'
      }),
    },
    {
      link: '#bento',
      text: 'Automações',
      image: 'https://picsum.photos/600/400?random=2',
      onClick: () => setActiveCard({
        name: 'Automações & IA',
        title: 'Escale seu negócio',
        handle: 'atom.agency',
        status: 'Sistema Ativo',
        contactText: 'Falar com Especialista',
        avatarUrl: 'https://picsum.photos/600/400?random=2',
        showUserInfo: true,
        enableTilt: true,
        enableMobileTilt: false,
        onContactClick: () => {},
        behindGlowColor: 'rgba(124, 58, 237, 0.67)',
        behindGlowEnabled: true,
        innerGradient: 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'
      }),
    },
    {
      link: '#stepper',
      text: 'Processo',
      image: 'https://picsum.photos/600/400?random=3',
      onClick: () => setActiveCard({
        name: 'Como Funciona',
        title: 'Do briefing ao lançamento',
        handle: 'atom.agency',
        status: 'Passo a Passo',
        contactText: 'Iniciar Projeto',
        avatarUrl: 'https://picsum.photos/600/400?random=3',
        showUserInfo: true,
        enableTilt: true,
        enableMobileTilt: false,
        onContactClick: () => {},
        behindGlowColor: 'rgba(124, 58, 237, 0.67)',
        behindGlowEnabled: true,
        innerGradient: 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'
      }),
    },
    {
      link: '#footer',
      text: 'Contato',
      image: 'https://picsum.photos/600/400?random=4',
      onClick: () => setShowContact(true),
    },
  ];

  const handleContactLinkClick = (e) => {
    e.preventDefault();
    setShowContact(true);
  };

  return (
    <footer className="site-footer" id="footer">

      {/* ── Flowing Menu ── */}
      <div className="footer-flowing-menu">
        <FlowingMenu
          items={menuItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#0d0b12"
          marqueeBgColor="#ac75ff"
          marqueeTextColor="#0d0b12"
          borderColor="rgba(124,58,237,0.4)"
        />
      </div>

      <div className="footer-inner">
        {/* ── Top: Logo + Nav ── */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={atomLogo} alt="ATOM Logo" className="footer-logo" />
            <p className="footer-tagline">
              Transformamos sua presença digital<br />
              em uma máquina de vendas.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4 className="footer-col-title">Serviços</h4>
              <ul>
                <li><a href="#services">Sites de Alta Performance</a></li>
                <li><a href="#bento">Automações &amp; IA</a></li>
                <li><a href="#bento">Identidade Visual</a></li>
                <li><a href="#bento">CRM &amp; Funis</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Empresa</h4>
              <ul>
                <li><a href="#stepper">Como Funciona</a></li>
                <li><a href="#card-swap">Resultados</a></li>
                <li><a href="#footer" onClick={handleContactLinkClick}>Contato</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contato</h4>
              <ul>
                <li><a href="#footer" onClick={handleContactLinkClick}>WhatsApp</a></li>
                <li><a href="#footer" onClick={handleContactLinkClick}>Instagram</a></li>
                <li><a href="#footer" onClick={handleContactLinkClick}>LinkedIn</a></li>
                <li><a href="#footer" onClick={handleContactLinkClick}>E-mail</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} ATOM. Todos os direitos reservados.
          </p>
          <div className="footer-bottom-links">
            <a href="#footer">Política de Privacidade</a>
            <a href="#footer">Termos de Uso</a>
          </div>
        </div>
      </div>

      {/* ── Profile Card Modal ── */}
      {activeCard && (
        <div className="profile-card-modal-overlay" onClick={() => setActiveCard(null)}>
          <div className="profile-card-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="profile-card-close" onClick={() => setActiveCard(null)}>
              &times;
            </button>
            <ProfileCard {...activeCard} />
          </div>
        </div>
      )}

      {/* ── Contact Card Modal ── */}
      {showContact && (
        <ContactCard onClose={() => setShowContact(false)} />
      )}
    </footer>
  );
}
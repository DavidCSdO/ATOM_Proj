import CardNav from './Cardnav';
import './Navbar.css';

export default function Navbar() {
  const items = [
    {
      label: 'Serviços',
      bgColor: '#1B1722',
      textColor: '#fff',
      links: [
        { label: 'Design & Identidade Visual', ariaLabel: 'Design e Identidade Visual', href: '#services' },
        { label: 'Sites de Alta Performance', ariaLabel: 'Sites de Alta Performance', href: '#services' },
        { label: 'Automação com IA', ariaLabel: 'Automação com Inteligência Artificial', href: '#bento' },
      ],
    },
    {
      label: 'Projetos',
      bgColor: '#2F293A',
      textColor: '#fff',
      links: [
        { label: 'Cases', ariaLabel: 'Cases de sucesso', href: '#stepper' },
        { label: 'Portfólio', ariaLabel: 'Portfólio completo', href: 'https://portifolio-ruddy-phi-47.vercel.app/' },
      ],
    },
    {
      label: 'Contato',
      bgColor: '#1B1722',
      textColor: '#fff',
      links: [
        { label: 'WhatsApp', ariaLabel: 'Fale pelo WhatsApp', href: 'https://wa.me/5524992928110' },
        { label: 'E-mail', ariaLabel: 'Enviar e-mail', href: 'mailto:cardosodavid92@gmail.com' },
        { label: 'Instagram', ariaLabel: 'Instagram', href: 'https://www.instagram.com/atom_con/' },
      ],
    },
  ];

  return (
    <CardNav
      items={items}
      baseColor="transparent"
      menuColor="#fff"
      buttonBgColor="#7c3aed"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
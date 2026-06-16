import CardNav from './CardNav';
import './Navbar.css';

export default function Navbar() {
  const items = [
    {
      label: 'Serviços',
      bgColor: '#1B1722',
      textColor: '#fff',
      links: [
        { label: 'Design & Identidade Visual', ariaLabel: 'Design e Identidade Visual' },
        { label: 'Sites de Alta Performance', ariaLabel: 'Sites de Alta Performance' },
        { label: 'Automação com IA', ariaLabel: 'Automação com Inteligência Artificial' },
      ],
    },
    {
      label: 'Projetos',
      bgColor: '#2F293A',
      textColor: '#fff',
      links: [
        { label: 'Cases', ariaLabel: 'Cases de sucesso' },
        { label: 'Portfólio', ariaLabel: 'Portfólio completo' },
      ],
    },
    {
      label: 'Contato',
      bgColor: '#1B1722',
      textColor: '#fff',
      links: [
        { label: 'WhatsApp', ariaLabel: 'Fale pelo WhatsApp' },
        { label: 'E-mail', ariaLabel: 'Enviar e-mail' },
        { label: 'Instagram', ariaLabel: 'Instagram' },
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
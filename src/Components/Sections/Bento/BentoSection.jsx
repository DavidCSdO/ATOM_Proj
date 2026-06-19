// src/components/BentoSection.jsx
import MagicBento from './MagicBento';
import './MagicBento.css';

const bentoCards = [
  {
    color: '#0d0b14',
    title: 'Sites de Alta Conversão',
    description: 'Landing pages e sites otimizados para velocidade, SEO e máxima conversão de visitantes em clientes.',
    label: 'Performance',
  },
  {
    color: '#0d0b14',
    title: 'Chatbots com IA',
    description: 'Atendimento automatizado 24/7 com inteligência artificial treinada para o seu negócio.',
    label: 'Automação',
  },
  {
    color: '#0d0b14',
    title: 'Identidade Visual',
    description: 'Design de marca premium que posiciona seu negócio no topo do mercado.',
    label: 'Design',
  },
  {
    color: '#0d0b14',
    title: 'CRM & Funis',
    description: 'Funis de vendas automatizados e CRM integrado para escalar seu faturamento.',
    label: 'Vendas',
  },
  {
    color: '#0d0b14',
    title: 'SEO & Tráfego Orgânico',
    description: 'Estratégias avançadas de SEO e conteúdo para atrair clientes qualificados sem pagar por ads.',
    label: 'Crescimento',
  },
  {
    color: '#0d0b14',
    title: 'Suporte Dedicado',
    description: 'Time técnico sempre disponível para manter sua operação digital funcionando sem falhas.',
    label: 'Suporte',
  },
];

export default function BentoSection() {
  return (
    <section className="bento-section" id="bento">
      <h2 className="bento-section-title">O que entregamos</h2>
      <MagicBento
        cards={bentoCards}
        enableSpotlight={true}
        enableTilt={true}
        clickEffect={true}
        particleCount={10}
        glowColor="124, 58, 237"
        spotlightRadius={350}
      />
    </section>
  );
}

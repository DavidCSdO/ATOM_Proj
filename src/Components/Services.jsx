// src/components/Services.jsx
import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Alta Performance",
      desc: "Landing pages focadas em velocidade e conversão absoluta."
    },
    {
      id: 2,
      title: "Automações & IA",
      desc: "Sistemas inteligentes que fazem o negócio rodar no piloto automático."
    },
    {
      id: 3,
      title: "Identidade Visual",
      desc: "Design de alto impacto e posicionamento estético de marca."
    },
    {
      id: 4,
      title: "Suporte Contínuo",
      desc: "Garantia de otimização contínua para sua estrutura digital."
    }
  ];

  return (
    <section className="servicesSection" id="services">
      <div className="servicesContainer">
        {services.map((service) => (
          <div className="serviceCard" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
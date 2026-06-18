// src/components/Hero.jsx
import React, { useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const handleScrollDown = () => {
    const next = document.getElementById('services');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  /* Fade-in on mount */
  useEffect(() => {
    const el = document.querySelector('.hero');
    if (el) {
      el.style.opacity = '0';
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '1';
      });
    }
  }, []);

  return (
    <section className="hero">
      {/* ── UPPER CONTENT ── */}
      <div className="hero-upper">
        {/* Headline — esquerda */}
        <div className="hero-headline">
          <h2>
            Transformamos sua<br />
            presença digital em uma<br />
            máquina de vendas.
          </h2>
        </div>

        {/* Descrição — direita */}
        <div className="hero-description">
          <p>
            Conectamos design de alto impacto, sites de
            alta performance e automação inteligente para
            fazer o seu negócio rodar no piloto automático.
            Da identidade visual ao chatbot com IA: tudo o
            que você precisa para crescer.
          </p>
        </div>
      </div>

      {/* ── WORDMARK ── */}
      <div className="hero-wordmark">
        <h1>ATOM</h1>
      </div>
    </section>
  );
}

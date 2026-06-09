// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import './Hero.css';

function AtomIcon() {
  return (
    <svg
      className="atom-icon"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Núcleo */}
      <circle cx="30" cy="30" r="4" fill="white" opacity="0.9" />
      {/* Órbita 1 */}
      <ellipse cx="30" cy="30" rx="26" ry="10" stroke="white" strokeWidth="1.2" opacity="0.6" />
      {/* Órbita 2 — rotacionada 60° */}
      <ellipse
        cx="30" cy="30" rx="26" ry="10"
        stroke="white" strokeWidth="1.2" opacity="0.6"
        transform="rotate(60 30 30)"
      />
      {/* Órbita 3 — rotacionada 120° */}
      <ellipse
        cx="30" cy="30" rx="26" ry="10"
        stroke="white" strokeWidth="1.2" opacity="0.6"
        transform="rotate(120 30 30)"
      />
    </svg>
  );
}

export default function Hero() {
  const scrollBtnRef = useRef(null);

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

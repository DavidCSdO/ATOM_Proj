// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  /* Fade-in on mount */
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' });
    }
  }, []);

  return (
    <section className="hero" ref={heroRef}>
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

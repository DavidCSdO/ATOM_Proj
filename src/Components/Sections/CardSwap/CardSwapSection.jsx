// src/components/CardSwapSection.jsx
import React from 'react';
import CardSwap, { Card } from './CardSwap';
import './CardSwapSection.css';

import video1 from '../../../assets/Videos/2026-06-18 09-55-04.mp4';
import video2 from '../../../assets/Videos/2026-06-18 09-56-58.mp4';
import logoImg from '../../../assets/Videos/ATOM.logo.png';

export default function CardSwapSection() {
  return (
    <section className="card-swap-section" id="card-swap">
      <div className="card-swap-content">
        <h2 className="card-swap-title">Nossos Resultados</h2>
        <p className="card-swap-subtitle">
          Soluções digitais de alto impacto.
        </p>
      </div>

      <div className="card-swap-area">
        <CardSwap
          width={700}
          height={500}
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <div className="swap-card-inner">
              <video
                className="swap-card-media"
                src={video1}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Card>
          <Card>
            <div className="swap-card-inner">
              <video
                className="swap-card-media"
                src={video2}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Card>
          <Card>
            <div className="swap-card-inner">
              <img
                className="swap-card-media"
                src={logoImg}
                alt="ATOM Logo"
              />
            </div>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
}


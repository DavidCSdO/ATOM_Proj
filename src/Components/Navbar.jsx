// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useMatrixEffect } from '../JS/useMatrixEffect';

/* ────────────────────────────────────────────────────────── */
/* MATRIX LINK */
/* ────────────────────────────────────────────────────────── */
function MatrixLink({ label, href, scrollTo, onClick }) {
  const [text, setText] = useState(label);
  const handlers = useMatrixEffect(label, setText);

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault();
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <a
      className="navbar-link"
      href={href ?? '#'}
      onClick={handleClick}
      {...handlers}
    >
      {text}
    </a>
  );
}

/* ────────────────────────────────────────────────────────── */
/* GRID ICON */
/* ────────────────────────────────────────────────────────── */
function GridIcon({ active, onClick }) {
  return (
    <button
      className={`navbar-grid ${active ? 'active' : ''}`}
      onClick={onClick}
      aria-label="Abrir menu"
      type="button"
    >
      <div className="navbar-grid-dot" />
      <div className="navbar-grid-dot" />
      <div className="navbar-grid-dot" />
      <div className="navbar-grid-dot" />
    </button>
  );
}

/* ────────────────────────────────────────────────────────── */
/* NAV LINKS (Divididos para as laterais) */
/* ────────────────────────────────────────────────────────── */
const NAV_LEFT  = [{ label: 'PRICES', href: '/prices' }];
const NAV_RIGHT = [{ label: 'CONTACT', href: null, scrollTo: 'contact' }];
const NAV_LINKS = [...NAV_LEFT, ...NAV_RIGHT]; // Unificados para o dropdown

/* ────────────────────────────────────────────────────────── */
/* COMPONENT */
/* ────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
      if (!isScrolled) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* FECHA MENU AO CLICAR FORA */
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !e.target.closest('.navbar-grid') &&
        !e.target.closest('.dropdown-menu')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        
        {/* LINKS DA ESQUERDA */}
        <div className="navbar-links navbar-links-left">
          {NAV_LEFT.map(({ label, href, scrollTo }) => (
            <MatrixLink
              key={label}
              label={label}
              href={href}
              scrollTo={scrollTo}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>

        {/* BRAND (Sempre centralizado absolutamente via CSS) */}
        <a className="navbar-brand" href="/">
          ATOM
        </a>

        {/* LINKS DA DIREITA */}
        <div className="navbar-links navbar-links-right">
          {NAV_RIGHT.map(({ label, href, scrollTo }) => (
            <MatrixLink
              key={label}
              label={label}
              href={href}
              scrollTo={scrollTo}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>

        {/* GRID ICON */}
        <GridIcon
          active={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </nav>

      {/* DROPDOWN FLUTUANTE COMPACTO */}
      <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
        {NAV_LINKS.map(({ label, href, scrollTo }) => (
          <MatrixLink
            key={label}
            label={label}
            href={href}
            scrollTo={scrollTo}
            onClick={() => setMenuOpen(false)}
          />
        ))}
      </div>
    </div>
  );
}
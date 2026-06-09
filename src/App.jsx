import React from 'react';
import './App.css';
import BG from './assets/BG.png';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <main className="app">
      {/* Envolvendo Navbar e Hero na mesma seção de fundo */}
      <section
        className="heroSection"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <Navbar />
        <Hero />
      </section>
      
      <Services />
    </main>
  );
}

export default App;
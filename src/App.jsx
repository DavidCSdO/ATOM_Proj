import React from 'react';
import './App.css';
import BG from './assets/BG.png';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <main className="app">
      <section
        className="heroSection">
        <Navbar />
        <Hero />
      </section>
      
      <Services />
    </main>
  );
}

export default App;
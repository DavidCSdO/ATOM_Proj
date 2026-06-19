import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import Hero from './Components/Sections/Hero/Hero';
import Services from './Components/Sections/Services/Services';
import BentoSection from './Components/Sections/Bento/BentoSection';
import CardSwapSection from './Components/Sections/CardSwap/CardSwapSection';
import Silk from './Components/UI/Silk/Silk';
import GridDistortion from './Components/UI/GridDistortion/GridDistortion';
import StepperSection from './Components/Sections/Stepper/StepperSection';
import Footer from './Components/Layout/Footer/Footer';
import bgImage from './assets/BG.png';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="app">
      {/* Wrapper compartilhado: um único Silk cobre Hero + Services */}
      <div className="hero-services-wrapper">
        <div className="shared-silk-bg">
          <Silk
            speed={4}
            scale={1.2}
            color="#3a0ca3"
            noiseIntensity={1.2}
            rotation={0.2}
          />
        </div>
        <div className="shared-silk-overlay" />

        <section className="heroSection">
          <Navbar />
          <Hero />
        </section>

        <Services />
      </div>

      {/* Wrapper compartilhado: GridDistortion cobre Bento + CardSwap */}
      <div className="bento-cardswap-wrapper">
        <div className="shared-grid-bg">
          <GridDistortion
            imageSrc={bgImage}
            grid={10}
            mouse={0.25}
            strength={0.15}
            relaxation={0.9}
          />
        </div>
        <div className="shared-grid-overlay" />

        <BentoSection />
        <CardSwapSection />
      </div>

      <StepperSection />
      <Footer />
    </main>
  );
}

export default App;

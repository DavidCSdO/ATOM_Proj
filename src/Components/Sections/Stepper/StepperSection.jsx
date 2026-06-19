// src/components/StepperSection.jsx
import Stepper, { Step } from './Stepper';
import './StepperSection.css';

export default function StepperSection() {

  return (
    <section className="stepper-section" id="stepper">
      <div className="stepper-header">
        <h2 className="stepper-title">Como Funciona</h2>
        <p className="stepper-subtitle">
          Do primeiro contato ao lançamento — um processo simples e transparente.
        </p>
      </div>

      <div className="stepper-wrapper">
        <Stepper
          initialStep={1}
          onStepChange={() => {}}
          onFinalStepCompleted={() => {}}
          backButtonText="Anterior"
          nextButtonText="Próximo"
        >
          <Step>
            <h2 className="step-title">Diagnóstico Gratuito</h2>
            <p className="step-text">
              Analisamos sua presença digital atual e identificamos as maiores
              oportunidades de crescimento para o seu negócio.
            </p>
          </Step>
          <Step>
            <h2 className="step-title">Estratégia Personalizada</h2>
            <p className="step-text">
              Criamos um plano sob medida com design, automação e tecnologia
              alinhados aos seus objetivos de faturamento.
            </p>
          </Step>
          <Step>
            <h2 className="step-title">Desenvolvimento &amp; Lançamento</h2>
            <p className="step-text">
              Construímos e entregamos sua solução digital completa —
              site, identidade visual, automações e tudo mais.
            </p>
          </Step>
          <Step>
            <h2 className="step-title">Acompanhamento Contínuo</h2>
            <p className="step-text">
              Otimizamos e evoluímos constantemente para garantir que seus
              resultados só cresçam com o tempo.
            </p>
          </Step>
        </Stepper>
      </div>
    </section>
  );
}

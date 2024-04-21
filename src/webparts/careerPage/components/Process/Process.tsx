import  styles from './Process.module.scss';
import * as React from 'react';
import { useState, CSSProperties } from 'react';



interface Step {
  label: string;
  step: number;
}

const steps: Step[] = [
  
  {
    label: 'Demande d embauche',
    step: 1,
  },
  {
    label: 'Sourcing Sélection',
    step: 2,
  },
  {
    label: 'Entretien téléphonique',
    step: 3,
  },
  {
    label: 'Entretien RH',
    step: 4,
  },
  {
    label: 'Évaluation',
    step: 5,
  },
  {
    label: 'Entretien avec le responsable hiérarchique',
    step: 6,
  },
  {
    label: 'Offre',
    step: 7,
  },
  {
    label: 'Onboarding',
    step: 8,
  },
  {
    label: 'Suivi et Analyse',
    step: 9,
  },



];

const ProgressSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;
  const width = `${(((100/ (totalSteps + 1)) * (activeStep - 1))+1)*1.2}%`;

  return (

    <div className={styles.process}>

        <div className={styles.process_title}>
            <p>
               Processus de recrutement de candidats CRM
            </p>
            <div className={styles.process_title_underline}>
                
            </div>
        </div>




<div className={styles.mainContainer}>
      <div className={styles.stepContainer} style={{ '--width': width } as CSSProperties}>
        {steps.map(({ step, label }) => (
          <div className={styles.stepWrapper} key={step}>
            <div className={styles.stepStyle} style={{ '--stepBorderColor': activeStep >= step ? '#00966C' : '#00EDA0' } as React.CSSProperties}>
              {activeStep > step ? (
                <div className={styles.checkMark}>L</div>
              ) : (
                <span className={styles.stepCount}>{step}</span>
              )}
            </div>
            <div className={styles.stepsLabelContainer}>
              <span className={styles.stepLabel} key={step}>{label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonStyle} onClick={prevStep} disabled={activeStep === 1}>
          Previous
        </button>
        <button className={styles.buttonStyle} onClick={nextStep} disabled={activeStep === totalSteps}>
          Next
        </button>
      </div>
    </div>

    </div>


    
  );
};

export default ProgressSteps;

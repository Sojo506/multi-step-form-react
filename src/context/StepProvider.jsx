import { createContext, useState } from "react";

const StepContext = createContext();

const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [options, setOptions] = useState({
    name: "",
  });

  function nextStep() {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  }

  function backStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <StepContext.Provider
      value={{
        options,
        currentStep,
        nextStep,
        backStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export { StepProvider };

export default StepContext;

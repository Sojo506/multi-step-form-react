import { createContext, useState } from "react";

const StepContext = createContext();

const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [options, setOptions] = useState({
    name: "",
    email: "",
    phone: "",
    planType: "monthly",
    planName: "arcade",
    onlineService: false,
    largerStoraga: false,
    customizableProfile: false,
  });

  function nextStep() {
    if (currentStep >= 5) return;
    if (!options.name || !options.email || !options.phone) return;
    setCurrentStep(currentStep + 1);
  }

  function backStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  function resetStep() {
    setCurrentStep(1);
  }

  function handleOptions(event) {
    setOptions({ ...options, [event.target.name]: event.target.value });
  }

  return (
    <StepContext.Provider
      value={{
        options,
        currentStep,
        nextStep,
        backStep,
        resetStep,
        handleOptions,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export { StepProvider };

export default StepContext;

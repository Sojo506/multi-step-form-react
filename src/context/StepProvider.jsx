import { createContext, useState } from "react";

const StepContext = createContext();

const StepProvider = ({ children }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const [alert, setAlert] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [options, setOptions] = useState({
    name: "",
    email: "",
    phone: "",
    planType: "monthly",
    planName: "arcade",
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const dataPlans = [
    {
      name: "arcade",
      price: {
        monthly: { fee: 9, short: "mo" },
        yearly: { fee: 90, short: "yr" },
      },
    },
    {
      name: "advanced",
      price: {
        monthly: { fee: 12, short: "mo" },
        yearly: { fee: 120, short: "yr" },
      },
    },
    {
      name: "pro",
      price: {
        monthly: { fee: 15, short: "mo" },
        yearly: { fee: 150, short: "yr" },
      },
    },
  ];
  const dataServices = [
    {
      name: "Online service",
      short: "onlineService",
      description: "Access to multiplayer games",
      price: {
        monthly: { fee: 1, short: "mo" },
        yearly: { fee: 10, short: "yr" },
      },
    },
    {
      name: "Larger storage",
      short: "largerStorage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: { fee: 2, short: "mo" },
        yearly: { fee: 20, short: "yr" },
      },
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      short: "customizableProfile",
      price: {
        monthly: { fee: 2, short: "mo" },
        yearly: { fee: 20, short: "yr" },
      },
    },
  ];

  function nextStep() {
    let aux = 0;
    let currentErrors = {};
    if (currentStep >= 5) return;

    // verify personal info
    if (!options.name) {
      currentErrors.name = "This field is required";
      aux++;
    }
    if (!options.email) {
      currentErrors.email = "This field is required";
      aux++;
    }
    if (!emailRegex.test(options.email)) {
      currentErrors.email = "Type a correct email";
      aux++;
    }
    if (!options.phone) {
      currentErrors.phone = "This field is required";
      aux++;
    }
    
    setAlert({ ...currentErrors });
    if (aux) return;
    setAlert({});
    setCurrentStep(currentStep + 1);
  }

  function backStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  function resetStep() {
    setOptions({
      name: "",
      email: "",
      phone: "",
      planType: "monthly",
      planName: "arcade",
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    });
    setCurrentStep(1);
  }

  function defineStep(step) {
    setCurrentStep(step);
  }

  function handleOptions(event) {
    setOptions({ ...options, [event.target.name]: event.target.value });
  }

  function handlePlanType(event) {
    setOptions({
      ...options,
      planType: event.target.checked ? "yearly" : "monthly",
    });
  }

  function handlePlanName(name) {
    setOptions({ ...options, planName: name });
  }

  function handleServices(service) {
    setOptions({ ...options, [service]: !options[service] });
  }

  return (
    <StepContext.Provider
      value={{
        alert,
        currentStep,
        options,
        nextStep,
        backStep,
        resetStep,
        defineStep,
        handleOptions,
        handlePlanType,
        handlePlanName,
        handleServices,
        dataPlans,
        dataServices,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export { StepProvider };

export default StepContext;

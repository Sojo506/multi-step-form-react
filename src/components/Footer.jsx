import useStep from "../hooks/useStep";

const Footer = () => {
  const { currentStep, nextStep, backStep, resetStep } = useStep();

  return (
    <div
      className={`w-full flex ${
        currentStep >= 2 ? "justify-between" : "justify-end"
      }  px-3 py-6 absolute bottom-0 bg-n-white`}
    >
      {currentStep >= 2 && currentStep !== 5 && (
        <button
          onClick={backStep}
          className="text-n-cool-gray p-2 rounded font-medium md:hover:text-p-marine-blue"
        >
          Go Back
        </button>
      )}
      {currentStep !== 5 && (
        <button
          onClick={nextStep}
          className={`${
            currentStep === 4 ? "bg-p-purplish-blue" : "bg-p-marine-blue"
          } text-n-white p-2 rounded font-medium md:hover:opacity-90 transition-opacity ease-in-out duration-300 active:bg-n-cool-gray`}
        >
          {currentStep === 4 ? "Confirm" : "Next Step"}
        </button>
      )}

      {currentStep === 5 && (
        <button
          onClick={resetStep}
          className="text-n-cool-gray p-2 rounded font-medium md:hover:text-p-strawberry-red"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Footer;

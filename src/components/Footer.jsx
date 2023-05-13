import useStep from "../hooks/useStep";

const Footer = () => {
  const { currentStep, nextStep, backStep, resetStep } = useStep();

  return (
    <div
      className={`w-full flex ${
        currentStep >= 2 ? "justify-between" : "justify-end"
      }  px-3 py-6 absolute bottom-0 bg-n-white md:row-span-1  md:col-start-2 md:col-end-5 md:max-w-[720px] md:my-0 md:mx-auto md:left-0 md:right-0`}
    >
      {currentStep >= 2 && currentStep !== 5 && (
        <button
          onClick={backStep}
          className="text-n-cool-gray p-2 rounded font-medium md:hover:text-p-marine-blue md:text-lg md:p-3"
        >
          Go Back
        </button>
      )}
      {currentStep !== 5 && (
        <button
          onClick={nextStep}
          className={`${
            currentStep === 4 ? "bg-p-purplish-blue" : "bg-p-marine-blue"
          } text-n-white p-2 rounded font-medium md:hover:opacity-90 transition-opacity ease-in-out duration-300 active:bg-n-cool-gray md:text-lg md:p-3`}
        >
          {currentStep === 4 ? "Confirm" : "Next Step"}
        </button>
      )}

      {currentStep === 5 && (
        <button
          onClick={resetStep}
          className="text-n-cool-gray p-2 rounded font-medium md:hover:text-p-strawberry-red md:text-lg md:p-3"
        >
          Redirect
        </button>
      )}
    </div>
  );
};

export default Footer;

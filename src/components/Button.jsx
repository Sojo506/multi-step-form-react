import { useEffect } from "react";
import useResize from "../hooks/useResize";
import useStep from "../hooks/useStep";

const Button = ({ step, text }) => {
  const { handleResize, dimension } = useResize();
  const { currentStep } = useStep();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center gap-5">
      <button
        className={`border border-n-white rounded-[100%] px-3 py-1 text-n-white font-bold ${
          currentStep === step &&
          "bg-p-light-blue text-p-marine-blue border-p-light-blue"
        } select-none md:px-4 md:py-2`}
      >
        {step}
      </button>

      {dimension === "desktop" && (
        <div>
          <p className="uppercase text-n-cool-gray text-sm">step {step}</p>
          <h3 className="uppercase text-n-white font-medium">{text}</h3>
        </div>
      )}
    </div>
  );
};

export default Button;

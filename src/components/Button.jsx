import { useEffect, useState } from "react";
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
    <>
      <button
        className={`border border-n-white rounded-[100%] px-3 py-1 text-n-white font-bold ${
          currentStep === step &&
          "bg-p-light-blue text-p-marine-blue border-p-light-blue"
        }`}
      >
        {step}
      </button>

      {dimension === "desktop" && (
        <div>
          <p className="uppercase">step {step}</p>
          <h3 className="uppercase">{text}</h3>
        </div>
      )}
    </>
  );
};

export default Button;

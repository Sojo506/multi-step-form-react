import { useEffect, useState } from "react";
import useResize from "../utils/useResize";

const Button = ({ step, text, activeStep }) => {
  const { handleResize, dimension } = useResize();

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
        className={`border border-n-white rounded-[100%] px-3 py-1 text-n-white font-bold ${activeStep === step && "bg-p-light-blue text-p-marine-blue border-p-light-blue"}`}
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

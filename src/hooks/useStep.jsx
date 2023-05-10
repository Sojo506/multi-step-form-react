import { useContext } from "react";
import StepContext from "../context/StepProvider";

const useStep = () => {
  return useContext(StepContext);
};

export default useStep;

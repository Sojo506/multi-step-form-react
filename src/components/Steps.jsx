import Button from "./Button";
import styles from "../styles/steps.module.css"

const Steps = ({ activeStep }) => {
  return (
    <div className={`${styles.stepsContainer}`}>
      <div className="absolute top-5 w-full flex justify-center gap-3">
        <Button step={1} text={"your info"} activeStep={activeStep} />
        <Button step={2} text={"select plan"} activeStep={activeStep} />
        <Button step={3} text={"add-ons"} activeStep={activeStep} />
        <Button step={4} text={"summary"} activeStep={activeStep} />
      </div>
    </div>
  );
};

export default Steps;

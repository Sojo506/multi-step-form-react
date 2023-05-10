import Button from "./Button";
import styles from "../styles/steps.module.css";
import useStep from "../hooks/useStep";

const Steps = () => {
  return (
    <div className={`${styles.stepsContainer}`}>
      <div className="absolute top-5 w-full flex justify-center gap-3">
        <Button step={1} text={"your info"} />
        <Button step={2} text={"select plan"} />
        <Button step={3} text={"add-ons"} />
        <Button step={4} text={"summary"} />
      </div>
    </div>
  );
};

export default Steps;

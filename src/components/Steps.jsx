import Button from "./Button";
import styles from "../styles/steps.module.css";

const Steps = () => {
  return (
    <div className={`${styles.stepsContainer}`}>
      <div className="translate-y-5 w-full flex justify-center gap-3 select-none md:flex-col md:items-start md:translate-x-5 md:translate-y-8 md:gap-9">
        <Button step={1} text={"your info"} />
        <Button step={2} text={"select plan"} />
        <Button step={3} text={"add-ons"} />
        <Button step={4} text={"summary"} />
      </div>
    </div>
  );
};

export default Steps;

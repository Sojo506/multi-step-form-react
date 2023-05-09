import Button from "./Button";

const Steps = ({ activeStep }) => {
  return (
    <div className="bg-slate-200">
      <div>
        <Button step={1} text={"your info"} activeStep={activeStep} />
        <Button step={2} text={"select plan"} activeStep={activeStep} />
        <Button step={3} text={"add-ons"} activeStep={activeStep} />
        <Button step={4} text={"summary"} activeStep={activeStep} />
      </div>
    </div>
  );
};

export default Steps;

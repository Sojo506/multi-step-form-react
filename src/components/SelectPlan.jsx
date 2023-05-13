import styles from "../styles/selectPlan.module.css";
import ButtonSelectPlan from "./ButtonSelectPlans.jsx";
import useStep from "../hooks/useStep";

const SelectPlan = () => {
  const { handlePlanType, handlePlanName, dataPlans, options } = useStep();
  const { planType, planName } = options;

  return (
    <section className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 -translate-y-16 md:col-start-2 md:col-end-5 md:-translate-y-0 md:max-w-[720px] md:row-start-1 md:row-end-3 md:h-full md:w-full">
      <h2 className="text-p-marine-blue text-2xl md:text-4xl font-bold mb-3">
        Select your plan
      </h2>
      <p className="text-n-cool-gray mb-5 md:text-lg">
        You have the option of monthly or yearly billing.
      </p>

      <ButtonSelectPlan
        handlePlanName={handlePlanName}
        dataPlans={dataPlans}
        planType={planType}
        planName={planName}
      />

      <label className={`${styles.switch} rounded bg-n-magnolia`}>
        <span
          className={`${
            planType === "monthly" ? "text-p-marine-blue" : "text-n-cool-gray"
          } font-medium md:text-lg`}
        >
          Monthly
        </span>
        <input
          type="checkbox"
          className={`${styles.checkbox}`}
          checked={planType === "monthly" ? false : true}
          onChange={handlePlanType}
        />
        <div className={`${styles.slider}`}></div>
        <span
          className={`${
            planType === "yearly" ? "text-p-marine-blue" : "text-n-cool-gray"
          } font-medium md:text-lg`}
        >
          Yearly
        </span>
      </label>
    </section>
  );
};

export default SelectPlan;

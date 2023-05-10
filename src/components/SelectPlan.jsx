import { useState } from "react";
import styles from "../styles/selectPlan.module.css";
import ButtonSelectPlan from "./ButtonSelectPlans";

const SelectPlan = () => {
  const dataPlans = {
    monthly: { arcade: 9, advanced: 12, pro: 15 },
    yearly: { arcade: 90, advanced: 120, pro: 150 },
  };

  const [plan, setPlan] = useState("monthly");

  const handleChange = (event) => {
    setPlan(event.target.checked ? "yearly" : "monthly");
  };

  return (
    <section className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 -translate-y-20">
      <h2 className="text-p-marine-blue text-2xl font-bold mb-3">
        Select your plan
      </h2>
      <p className="text-n-cool-gray mb-5">
        You have the option of monthly or yearly billing.
      </p>

      <ButtonSelectPlan plan={dataPlans[plan]} type={plan} />

      <label className={`${styles.switch} rounded bg-n-magnolia`}>
        <span
          className={`${
            plan === "monthly" ? "text-p-marine-blue" : "text-n-cool-gray"
          } font-medium`}
        >
          Monthly
        </span>
        <input
          type="checkbox"
          className={`${styles.checkbox}`}
          onChange={handleChange}
        />
        <div className={`${styles.slider}`}></div>
        <span
          className={`${
            plan === "yearly" ? "text-p-marine-blue" : "text-n-cool-gray"
          } font-medium`}
        >
          Yearly
        </span>
      </label>
    </section>
  );
};

export default SelectPlan;

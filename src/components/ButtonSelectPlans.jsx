import useStep from "../hooks/useStep";

const ButtonSelectPlan = () => {
  const { handlePlanName, dataPlans, options } = useStep();
  const { planType, planName } = options;

  return (
    <div className="flex flex-col gap-3 mb-4">
      {dataPlans.length &&
        dataPlans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => {
              handlePlanName(plan.name);
            }}
            className={`flex border rounded-lg ${
              plan.name === planName
                ? "border-p-purplish-blue bg-n-alabaster"
                : "border-n-cool-gray"
            } p-4 gap-2`}
          >
            <img
              src={`../src/assets/images/icon-${plan.name}.svg`}
              alt="icon arcade"
            />

            <div>
              <h4 className="capitalize text-p-marine-blue font-medium">
                {plan.name}
              </h4>
              <p className="text-n-cool-gray text-sm">
                ${plan.price[planType].fee}/{plan.price[planType].short}
              </p>
              {planType === "yearly" && (
                <p className="text-sm text-p-marine-blue">2 months free</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ButtonSelectPlan;

import icon_arcade from "../assets/images/icon-arcade.svg";
import icon_advanced from "../assets/images/icon-advanced.svg";
import icon_pro from "../assets/images/icon-pro.svg";

const ButtonSelectPlan = ({
  handlePlanName,
  dataPlans,
  planType,
  planName,
}) => {
  return (
    <div className="flex flex-wrap flex-col gap-3 mb-4 md:flex-row md:gap-2 md:justify-between md:mb-8">
      {dataPlans.length &&
        dataPlans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => {
              handlePlanName(plan.name);
            }}
            className={`flex md:flex-col border rounded-lg w-full md:max-w-[164px] ${
              plan.name === planName
                ? "border-p-purplish-blue bg-n-alabaster"
                : "border-n-cool-gray"
            } p-4 gap-2 cursor-pointer hover:border-p-purplish-blue border-[2px]`}
          >
            <img
              src={
                plan.name === "arcade"
                  ? icon_arcade
                  : plan.name === "advanced"
                  ? icon_advanced
                  : icon_pro
              }
              alt="icon arcade"
              className="md:w-20 md:mb-9"
            />

            <div>
              <h4 className="capitalize text-p-marine-blue font-medium md:text-xl">
                {plan.name}
              </h4>
              <p className="text-n-cool-gray text-sm md:text-lg">
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

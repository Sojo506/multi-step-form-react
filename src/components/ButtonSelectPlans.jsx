import icon_arcade from "../assets/images/icon-arcade.svg";
import icon_advanced from "../assets/images/icon-advanced.svg";
import icon_pro from "../assets/images/icon-pro.svg";
import useStep from "../hooks/useStep";

const ButtonSelectPlan = ({ plans, type, name }) => {
  const keys = Object.keys(plans).sort((a, b) => a - b);
  const { handlePlanName } = useStep();

  return (
    <div className="flex flex-col gap-3 mb-4">
      <div
        onClick={() => {
          handlePlanName(keys[0]);
        }}
        className={`flex border rounded-lg ${
          keys[0] === name
            ? "border-p-purplish-blue bg-n-alabaster"
            : "border-n-cool-gray"
        } p-4 gap-2`}
      >
        <img src={icon_arcade} alt="icon arcade" />

        <div>
          <h4 className="capitalize text-p-marine-blue font-medium">
            {keys[0]}
          </h4>
          <p className="text-n-cool-gray text-sm">
            ${plans[keys[0]]}/{type === "monthly" ? "mo" : "yr"}
          </p>
          {type === "yearly" && (
            <p className="text-sm text-p-marine-blue">2 months free</p>
          )}
        </div>
      </div>

      <div
        onClick={() => {
          handlePlanName(keys[1]);
        }}
        className={`flex border rounded-lg ${
          keys[1] === name
            ? "border-p-purplish-blue bg-n-alabaster"
            : "border-n-cool-gray"
        } p-4 gap-2`}
      >
        <img src={icon_advanced} alt="icon advanced" />
        <div>
          <h4 className="capitalize text-p-marine-blue font-medium">
            {keys[1]}
          </h4>
          <p className="text-n-cool-gray text-sm">
            ${plans[keys[1]]}/{type === "monthly" ? "mo" : "yr"}
          </p>
          {type === "yearly" && (
            <p className="text-sm text-p-marine-blue">2 months free</p>
          )}
        </div>
      </div>

      <div
        onClick={() => {
          handlePlanName(keys[2]);
        }}
        className={`flex border rounded-lg ${
          keys[2] === name
            ? "border-p-purplish-blue bg-n-alabaster"
            : "border-n-cool-gray"
        } p-4 gap-2`}
      >
        <img src={icon_pro} alt="icon pro" />
        <div>
          <h4 className="capitalize text-p-marine-blue font-medium">
            {keys[2]}
          </h4>
          <p className="text-n-cool-gray text-sm">
            ${plans[keys[2]]}/{type === "monthly" ? "mo" : "yr"}
          </p>
          {type === "yearly" && (
            <p className="text-sm text-p-marine-blue">2 months free</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonSelectPlan;

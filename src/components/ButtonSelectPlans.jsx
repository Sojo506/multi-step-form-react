import icon_arcade from "../assets/images/icon-arcade.svg";
import icon_advanced from "../assets/images/icon-advanced.svg";
import icon_pro from "../assets/images/icon-pro.svg";

const ButtonSelectPlan = ({ plan, type }) => {
  const keys = Object.keys(plan).sort((a, b) => a - b);
  // TODO onClick event to select a plan

  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="flex border rounded-lg border-p-purplish-blue p-4 gap-2">
        <img src={icon_arcade} alt="icon arcade" />

        <div>
          <h4 className="capitalize text-p-marine-blue font-medium">
            {keys[0]}
          </h4>
          <p className="text-n-cool-gray text-sm">
            ${plan[keys[0]]}/{type === "monthly" ? "mo" : "yr"}
          </p>
          {type === "yearly" && (
            <p className="text-sm text-p-marine-blue">2 months free</p>
          )}
        </div>
      </div>

      <div className="flex border rounded-lg border-p-purplish-blue p-3 gap-2">
        <img src={icon_advanced} alt="icon advanced" />
        <div>
          <h4 className="capitalize text-p-marine-blue font-medium">
            {keys[1]}
          </h4>
          <p className="text-n-cool-gray text-sm">
            ${plan[keys[1]]}/{type === "monthly" ? "mo" : "yr"}
          </p>
          {type === "yearly" && (
            <p className="text-sm text-p-marine-blue">2 months free</p>
          )}
        </div>
      </div>

      <div className="flex border rounded-lg border-p-purplish-blue p-3 gap-2">
        <img src={icon_pro} alt="icon pro" />
        <div>
          <h4 className="capitalize text-p-marine-blue font-medium">
            {keys[2]}
          </h4>
          <p className="text-n-cool-gray text-sm">
            ${plan[keys[2]]}/{type === "monthly" ? "mo" : "yr"}
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

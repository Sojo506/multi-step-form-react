import useStep from "../hooks/useStep";
import styles from "../styles/pickAddOns.module.css";

const ButtonSelectService = () => {
  const { handleServices, options, dataServices } = useStep();
  const { planType } = options;

  return (
    <form className="grid gap-4 md:gap-7">
      {dataServices.length &&
        dataServices.map((service, index) => (
          <label
            key={index}
            className={`${
              styles.container
            } flex items-center gap-4 p-3 rounded-lg border-[2px] ${
              options[service.short]
                ? "border-p-purplish-blue bg-n-alabaster"
                : "border-n-cool-gray"
            } md:hover:border-p-purplish-blue`}
          >
            <input
              type="checkbox"
              checked={options[service.short]}
              onChange={() => {
                handleServices(service.short);
              }}
            />
            <div className={`${styles.checkmark}`}></div>
            <div>
              <p className="text-base text-p-marine-blue font-medium md:text-lg">
                {service.name}
              </p>
              <p className="text-xs text-n-cool-gray md:text-sm">{service.description}</p>
            </div>
            <p className="text-xs text-p-purplish-blue md:text-sm">
              +${service.price[planType].fee}/{service.price[planType].short}
            </p>
          </label>
        ))}
    </form>
  );
};

export default ButtonSelectService;

import useStep from "../hooks/useStep";
import styles from "../styles/pickAddOns.module.css";

const ButtonSelectService = () => {
  const { handleServices, options, dataServices } = useStep();
  const { planType } = options;

  return (
    <form className="grid gap-4">
      {dataServices.length &&
        dataServices.map((service, index) => (
          <label
            key={index}
            className={`${
              styles.container
            } flex items-center gap-4 p-3 border rounded-lg ${
              options[service.short]
                ? "border-p-purplish-blue bg-n-alabaster"
                : "border-n-cool-gray"
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                handleServices(service.short);
              }}
            />
            <div className={`${styles.checkmark}`}></div>
            <div>
              <p className="text-base text-p-marine-blue font-medium">{service.name}</p>
              <p className="text-xs text-n-cool-gray">{service.description}</p>
            </div>
            <p className="text-xs text-p-purplish-blue ">
              +${service.price[planType].fee}/{service.price[planType].short}
            </p>
          </label>
        ))}
    </form>
  );
};

export default ButtonSelectService;

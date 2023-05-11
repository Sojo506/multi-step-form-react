import useStep from "../hooks/useStep";

const FinishingUp = () => {
  const { options, dataPlans, dataServices, defineStep } = useStep();
  const { planType, planName } = options;
  const plan = dataPlans.filter((p) => p.name === planName)[0];
  let total = plan.price[planType].fee;

  return (
    <section className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 pb-4 -translate-y-16">
      <h2 className="text-p-marine-blue text-2xl font-bold mb-3">
        Finishin up
      </h2>
      <p className="text-n-cool-gray mb-5">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-n-magnolia p-3 rounded-md grid gap-2 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="capitalize text-p-marine-blue font-medium">
              {planName} ({planType})
            </p>
            <p
              className="text-n-cool-gray underline font-normal"
              onClick={() => {
                defineStep(2);
              }}
            >
              Change
            </p>
          </div>
          <p className="font-bold text-p-marine-blue text-sm">
            ${plan.price[planType].fee}/{plan.price[planType].short}
          </p>
        </div>
        <hr className="text-n-light-gray" />

        {dataServices.length &&
          dataServices.map((service, index) => (
            <div key={index} className="flex justify-between items-center">
              {options[service.short] && (
                <>
                  <p className="text-base text-n-cool-gray">{service.name}</p>
                  <p className="text-sm text-p-marine-blue font-medium">
                    +${service.price[planType].fee}/
                    {service.price[planType].short}
                  </p>
                  <span className="hidden">
                    {(total += service.price[planType].fee)}
                  </span>
                </>
              )}
            </div>
          ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-base text-n-cool-gray p-3 font-medium">
          Total (per {planType === "monthly" ? "month" : "year"})
        </p>
        <p className="font-bold text-p-purplish-blue text-lg">
          +${total}/{plan.price[planType].short}
        </p>
      </div>
    </section>
  );
};

export default FinishingUp;

import ButtonSelectService from "./ButtonSelectService";

const PickAddOns = () => {
  return (
    <section className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 -translate-y-20">
      <h2 className="text-p-marine-blue text-2xl font-bold mb-3">
        Pick add-ons
      </h2>
      <p className="text-n-cool-gray mb-5">
        Add-ons help enhance your gaming experience.
      </p>

      <ButtonSelectService />
    </section>
  );
};

export default PickAddOns;

import ButtonSelectService from "./ButtonSelectService";

const PickAddOns = () => {
  return (
    <section className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 -translate-y-16 md:col-start-2 md:col-end-5 md:-translate-y-0 md:max-w-[720px] md:row-start-1 md:row-end-3 md:h-full md:w-full">
      <h2 className="text-p-marine-blue text-2xl md:text-4xl font-bold mb-3">
        Pick add-ons
      </h2>
      <p className="text-n-cool-gray mb-5 md:text-lg">
        Add-ons help enhance your gaming experience.
      </p>

      <ButtonSelectService />
    </section>
  );
};

export default PickAddOns;

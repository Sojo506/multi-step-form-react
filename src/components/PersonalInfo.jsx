import useStep from "../hooks/useStep";

const PersonalInfo = () => {
  const { options, handleOptions, alert } = useStep();
  
  return (
    <section className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 -translate-y-16 md:col-start-2 md:col-end-5 md:-translate-y-0 md:max-w-[720px] md:row-start-1 md:row-end-3 md:h-full md:w-full">
      <h2 className="text-p-marine-blue text-2xl md:text-4xl font-bold mb-3">
        Personal info
      </h2>
      <p className="text-n-cool-gray mb-5 md:text-lg">
        Please provide your name, email address, and phone number.
      </p>

      <form>
        <label
          htmlFor="name"
          className="flex justify-between text-sm md:text-base font-medium text-p-marine-blue tracking-tighter mb-1"
        >
          Name
          <span className="text-p-strawberry-red text-sm font-medium text-right">
            {alert.name && alert.name}
          </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={options.name}
          maxLength={30}
          placeholder="e.g Wolfgang Amadeus"
          className="mb-4 px-3 py-2 border border-n-cool-gray rounded text-sm block w-full md:px-4 md:py-3 md:mb-5 focus:outline-p-purplish-blue"
          onChange={handleOptions}
        />

        <label
          htmlFor="email"
          className="flex justify-between text-sm md:text-base font-medium text-p-marine-blue mb-1"
        >
          Email Address
          <span className="text-p-strawberry-red text-sm font-medium text-right">
            {alert.email && alert.email}
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={options.email}
          maxLength={30}
          placeholder="e.g wolfgangamadeus.m@gmail.com"
          className="mb-4 px-3 py-2 border border-n-cool-gray rounded text-sm block w-full md:px-4 md:py-3 md:mb-5 focus:outline-p-purplish-blue"
          onChange={handleOptions}
        />

        <label
          htmlFor="phone"
          className="flex justify-between text-sm md:text-base font-medium text-p-marine-blue mb-1"
        >
          Phone Number
          <span className="text-p-strawberry-red text-sm font-medium text-right">
            {alert.phone && alert.phone}
          </span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={options.phone}
          maxLength={30}
          placeholder="e.g +506 12345678"
          className="mb-4 px-3 py-2 border border-n-cool-gray rounded text-sm block w-full md:px-4 md:py-3 focus:outline-p-purplish-blue"
          onChange={handleOptions}
        />
      </form>
    </section>
  );
};

export default PersonalInfo;

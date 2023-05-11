const PersonalInfo = () => {
  // TODO create function to take input data
  return (
    <section className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 -translate-y-16">
      <h2 className="text-p-marine-blue text-2xl font-bold mb-3">
        Personal info
      </h2>
      <p className="text-n-cool-gray mb-5">
        Please provide your name, email address, and phone number.
      </p>

      <form>
        <label
          htmlFor="name"
          className="block text-sm text-p-marine-blue tracking-tighter"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g Wolfgang Amadeus"
          className="mb-4 px-3 py-2 border border-n-cool-gray rounded text-sm font-bold block w-full"
        />

        <label htmlFor="email" className="block text-sm text-p-marine-blue">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="e.g wolfgangamadeus.m@gmail.com"
          className="mb-4 px-3 py-2 border border-n-cool-gray rounded text-sm font-bold block w-full"
        />

        <label htmlFor="phone" className="block text-sm text-p-marine-blue">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          placeholder="e.g +506 12345678"
          className="mb-4 px-3 py-2 border border-n-cool-gray rounded text-sm font-bold block w-full"
        />
      </form>
    </section>
  );
};

export default PersonalInfo;

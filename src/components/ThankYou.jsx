import ConfettiExplosion from "react-confetti-explosion";
import icon_thank_you from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <article className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-4 py-6 -translate-y-16 md:col-start-2 md:col-end-5 md:-translate-y-0 md:max-w-[720px] md:row-start-1 md:row-end-3 md:h-full md:w-full flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      </div>

      <img
        src={icon_thank_you}
        alt="icon thank you"
        className="mt-5 mb-2 mx-auto md:mt-0 md:mb-7 md:h-28"
      />

      <h2 className="text-p-marine-blue text-2xl font-bold mb-3 text-center md:text-4xl">
        Thank you!
      </h2>

      <p className="text-n-cool-gray mb-5 text-center md:text-lg max-w-lg my-0 mx-auto">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@sojodev.com
      </p>
    </article>
  );
};

export default ThankYou;

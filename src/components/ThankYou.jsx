import ConfettiExplosion from "react-confetti-explosion";
import icon_thank_you from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <article className="max-w-[320px] m-auto left-0 right-0 bg-n-white rounded-lg px-3 py-6 -translate-y-16">
      <ConfettiExplosion />
      <img
        src={icon_thank_you}
        alt="icon thank you"
        className="mt-5 mb-2 mx-auto"
      />

      <h2 className="text-p-marine-blue text-2xl font-bold mb-3 text-center">
        Thank you!
      </h2>

      <p className="text-n-cool-gray mb-5 text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@sojodev.com
      </p>
    </article>
  );
};

export default ThankYou;

import { useState } from "react";

import "./App.css";
import Steps from "./components/Steps";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";
import useStep from "./hooks/useStep";

function App() {
  const { currentStep } = useStep();

  return (
    <main className="responsive_viewport font-ubuntu bg-n-magnolia relative">
      {/* SideBar */}
      <Steps />

      {/* Every step */}
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <SelectPlan />}
      {currentStep === 3 && <PickAddOns />}
      {currentStep === 4 && <FinishingUp />}
      {currentStep === 5 && <ThankYou />}

      {/* BTNS */}
      <Footer />
    </main>
  );
}

export default App;

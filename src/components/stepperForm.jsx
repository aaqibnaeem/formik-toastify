import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";

//form change
function getStepContent(activestep, nextform, prevform) {
  switch (activestep) {
    case 0:
      return <FormOne nextform={nextform} />;
    case 1:
      return <FormTwo nextform={nextform} prevform={prevform} />;
    case 2:
      return <FormThree nextform={nextform} prevform={prevform} />;
    default:
      return "Unknown stepIndex";
  }
}

function StepperForm() {
  const [activestep, setActiveStep] = useState(0);

  const steps = ["Name and Roll number", "Education details", "Other details"];

  //function chnage value of active step
  const nextform = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const prevform = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  return (
    <>
      <div>
        {/* //step  */}
        <Stepper activeStep={activestep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activestep === steps.length ? (
          // "submit"
          setActiveStep(0)
        ) : (
          <Typography>
            {getStepContent(activestep, nextform, prevform)}
          </Typography>
        )}
      </div>
    </>
  );
}

export default StepperForm;

'use client'
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import CSVUploader from '@/app/ui/dashboard/csvUploader/csvUploader';
import ComposeEmail from '@/app/ui/dashboard/composeEmail/page';

const steps = ['Upload CSV', 'Step Two', 'Step Three', 'Step Four'];

const EmailCampaign = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isValidated, setIsValidated] = useState(false);
  const [file, setFile] = useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <CSVUploader isValidated={isValidated} setIsValidated={setIsValidated} file={file} setFile={setFile} />
          </div>
        );
      case 1:
        return <ComposeEmail />
      case 2:
        return <Typography variant="body1">Step 3</Typography>;
      case 3:
        return <Typography variant="body1">Step 4</Typography>;
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <div className=' w-full px-8 pt-8'>
      <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      <div className='space-y-10 '>
        {activeStep === steps.length ? (
          <div className='flex justify-between px-24 w-full bg-gray-300'>
            <Typography variant="body1">All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className='space-y-1'>
            <div className='w-full px-6'>{getStepContent(activeStep)}</div>
            <div className='flex justify-between px-24 '>
              <Button disabled={activeStep === 0} variant='outlined' onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" className='bg-primary hover:bg-primaryDark' onClick={handleNext} disabled={!isValidated || !file} >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailCampaign;
import React, { useState } from "react";

import { makeStyles, useTheme  } from "@mui/styles";
import { Paper, Box, Button, Typography, MobileStepper, Stack   } from "@mui/material";
import { AccountTree } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { KeyboardArrowLeft, KeyboardArrowRight,   } from '@mui/icons-material';

import { images } from "./SliderData";

const useStyles = makeStyles((theme) => ({
  root : {
    display: "flex",
  }
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = (props) => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
    return (
      <Box sx={{ maxWidth: "100%", flexGrow: 1,  border: "1px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }}>
      <Paper square elevation={0} sx={{ display: 'flex', alignItems: 'center', height: 50, pl: 2, bgcolor: 'background.default', }}>
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Stack direction="row" spacing={1} sx={{justifyContent: "space-around"}} >

                <Box component="img" sx={{  height: 255, display: 'inline-block', maxWidth: 400, overflow: 'hidden', width: '100%', alignItems: "center" }}
                  src={step.imgPath}
                  alt={step.label}
                  />
                <Box component="img" sx={{  height: 255, display: 'inline-block', maxWidth: 400, overflow: 'hidden', width: '100%', alignItems: "center" }}
                  src={step.imgPath}
                  alt={step.label}
                  />
                <Box component="img" sx={{  height: 255, display: 'inline-block', maxWidth: 400, overflow: 'hidden', width: '100%', alignItems: "center" }}
                  src={step.imgPath}
                  alt={step.label}
                  />
                </Stack>
            ) : null}
          </div>
        ))}

      </AutoPlaySwipeableViews>
      
      <MobileStepper steps={maxSteps} position="static" activeStep={activeStep} 
        nextButton={ <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Slider;

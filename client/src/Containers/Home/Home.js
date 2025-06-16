import React, { useState } from "react";

import { makeStyles  } from "@mui/styles";
import { Stack } from "@mui/material";


import Slider from './Slider/Slider';
import Posts from "./Posts/Posts";

const useStyles = makeStyles((theme) => ({
  
}));


const Home = (props) => {

    return (
      <Stack spacing={2}  >
        <Slider />
        <Posts />
        <Posts />
        <Posts />
        <Posts />

      </Stack>
  );
};

export default Home;

import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { AccountTree } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
  root : {
    display: "flex",
  }
}));

const Home = (props) => {

    const classes = useStyles();

    const [value, setValue] = useState(0);
  
    return (
    <Box className="classes.root">
      <AccountTree />
    </Box>
  );
};

export default Home;

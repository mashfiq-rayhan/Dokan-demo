import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { Card, Stack, Avatar } from "@mui/material";
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
        <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: 60 }} >
            <Avatar sx={{ width: 50, height: 50 }} src="" />
            <div>
                <p>message from</p>
                <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
        </Stack>
  );
};

export default Home;

import React, { useState } from "react";

import { makeStyles  } from "@mui/styles";
import { Card, Grid } from "@mui/material";



const useStyles = makeStyles((theme) => ({
    Card: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "30%",
		height: "400px",
		[theme.breakpoints.down("md")]: {
			width: "50%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "60%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "90%",
		},
		border: "2px solid #900C3D",
		boxShadow: "24 #900C3D",
		borderRadius: "25px",
		// background: "inherit",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "space-around",
		flexWrap: "wrap",
	},
}));


const Share = (props) => {
	const classes = useStyles();

    return (
    <Grid container item xs={12} sx={{justifyContent: "center", alignItems:"center"}}>
        <Card sx={{ borderRadius: 14, boxShadow: "1px 0px 10px 2px #F60F56" }} className={classes.Card} >
        
        </Card>
    </Grid>
  );
};

export default Share;

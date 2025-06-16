import React, { useState } from "react";
import { Grid, Stack, Card, TextField, Button, Divider, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Airplay } from "@mui/icons-material";

import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";

import useInput from "../../../../../hooks/useInput";
import * as actions from "../../../../../store/actions/index";

const useStyles = makeStyles((theme) => ({
	GridMain: {
		padding: "50px",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},
	Card: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "60%",
		height: "900px",
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
		background: "inherit",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "space-around",
		flexWrap: "wrap",
	},
	StackRow: {
		justifyContent: "space-between",
		alignItems: "center",
		padding: "20px 30px",
	},
    DokanInfo: {
        justifyContent: "space-evenly",
		alignItems: "center",
    },
	logo: {
		height: "50px",
	},
	Cross: {
		top: "20px",
		right: "20px",
		height: "30px",
		cursor: "pointer",
	},
    parts: {
        width: '50%'
    }

}));

export const ProductDetails = (props) => {
	const classes = useStyles();

	const profileType = useSelector((state) => state.auth.profileType);
	const tokenId = useSelector((state) => state.auth.tokenId);
	const history = useHistory();


	return (
		<Grid container item xs={12} className={classes.GridMain}>
			<Card sx={{ borderRadius: 14, boxShadow: "1px 0px 10px 2px #F60F56" }} className={classes.Card} >
				<Stack direction="row" spacing={2} className={classes.StackRow}>
					<NavLink to="/home" exact>
						<img src={`/Logo.png`} className={classes.logo} alt="logo" />
					</NavLink>
                    <Stack direction="row" className={classes.DokanInfo} spacing={2} >
                        <Avatar sx={{ width: 80, height: 80 }} src="" />
					    <h3>Dokan Name</h3>
                    </Stack>
					<img className={classes.Cross} src={"/Icons/SignupClose.png"} onClick={props.closeModal} alt="cross" />
				</Stack>
				<Divider sx={{ backgroundColor: "#900C3F", height: "1px", boxShadow: "1px 0px 10px 1px #F60F56" }} />
				<Stack direction="row" spacing={1} >
                    <img src={`/Logo.png`} alt="logo" className={classes.parts} />
                    
                </Stack>
				<Divider sx={{ backgroundColor: "#900C3F", height: "2px", boxShadow: "1px 0px 10px 1px #F60F56" }} />
				
			</Card>
		</Grid>
	);
};

export default ProductDetails;

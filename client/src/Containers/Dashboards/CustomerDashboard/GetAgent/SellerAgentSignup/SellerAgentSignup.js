import React, { useState } from "react";
import { Grid, Stack, Card, TextField, Button, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Storefront } from "@mui/icons-material";

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
		width: "30%",
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
	logo: {
		height: "50px",
	},
	Cross: {
		top: "20px",
		right: "20px",
		height: "30px",
		cursor: "pointer",
	},
	StackName: {
		width: "100%",
		justifyContent: "space-between",
	},
	Button: {
		border: "1px solid #900C3F",
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "space-around",
	},
	ForgotPassword: {
		textAlign: "center",
		color: "#900C3F",
	},
	Agreement: {
		fontSize: "10px",
		margin: "25px 25px 0px 25px",
	},
}));

export const SellerAgentSignup = (props) => {
	const classes = useStyles();

	const tokenId = useSelector((state) => state.auth.tokenId);
	const userId = useSelector((state) => state.auth.userId);
	const email = useSelector((state) => state.auth.email);
	const history = useHistory();

	const {
		value: dokanName,
		inputChangedHandler: dokanNameChangedHandler,
		inputBlurHandler: dokanNameBlurHandler,
		reset: resetDokanName,
	} = useInput((value) => value.trim() !== "");
	const dispatch = useDispatch();
	const onSellerAgentSignup = (userId, dokanName, email, tokenId) => {
		console.log(userId, dokanName, email, tokenId);
		dispatch(actions.onSellerAgentSignup(userId, dokanName, email, tokenId));
	};

	const SellerAgentSignupHandler = (event) => {
		event.preventDefault();
		onSellerAgentSignup(userId, dokanName, email, tokenId);
		history.push("/SellerDashboard");
		resetDokanName();
	};

	return (
		<Grid container item xs={12} className={classes.GridMain}>
			<Card
				sx={{ borderRadius: 14, boxShadow: "1px 0px 10px 2px #F60F56" }}
				className={classes.Card}
			>
				<Stack direction="row" spacing={2} className={classes.StackRow}>
					<NavLink to="/home" exact>
						<img src={`/Logo.png`} className={classes.logo} alt="logo" />
					</NavLink>
					<h3>Seller Sign Up</h3>
					<img
						className={classes.Cross}
						src={"/Icons/SignupClose.png"}
						onClick={props.closeModal}
						alt="cross"
					/>
				</Stack>
				<Divider
					sx={{
						backgroundColor: "#900C3F",
						height: "1px",
						boxShadow: "1px 0px 10px 1px #F60F56",
					}}
				/>

				<TextField
					value={dokanName}
					label="Dokan Name"
					id="dokanName"
					placeholder="Dokan Name"
					variant="filled"
					size="small"
					type="text"
					onChange={dokanNameChangedHandler}
					onBlur={dokanNameBlurHandler}
					required
				/>

				<Divider
					sx={{
						backgroundColor: "#900C3F",
						height: "2px",
						boxShadow: "1px 0px 10px 1px #F60F56",
					}}
				/>
				<p className={classes.Agreement}>
					By clicking signup you agree to our <span>Terms, Data Policy</span>{" "}
					and <span>Cookie Policy.</span> You may recieve SMS notification from
					us and can opt out at any time.
				</p>
				<Stack
					direction="row"
					spacing={4}
					sx={{ padding: "40px", justifyContent: "center" }}
				>
					<Button
						variant="contained"
						color={"primary"}
						size="large"
						className={classes.Button}
						onClick={SellerAgentSignupHandler}
						startIcon={<Storefront />}
					>
						Become Seller
					</Button>
				</Stack>
			</Card>
		</Grid>
	);
};

export default SellerAgentSignup;

import React, { useState } from "react";
import { Grid, Paper, Hidden, Stack, Card, TextField, Button, Divider, Modal, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Login, Airplay } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Signup from "../Signup/Signup";
import useInput from "../../hooks/useInput";
import * as actions from "../../store/actions/index";

const useStyles = makeStyles((theme) => ({
	GridMain: {
		justifyContent: "space-evenly",
		height: "900px",
	},
	GridTag: {
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},
	StackColumn: {
		justifyContent: "center",
		alignItems: "center",
	},
	StackRow: {
		justifyContent: "space-between",
		alignItems: "center",
		padding: "20px",
	},
	Logo: {
		width: "170px",
		height: "200px",
	},
	DokanName: {
		display: "inline-block",
		color: "#900C3F",
		// color: "#55FF00",
		textShadow: "-1px 0 #F60F56, 0 1px #F60F56, 1px 0 #F60F56, 0 -1px #F60F56",
		// textShadow: "-1px 0 #55FF00, 0 1px #55FF00, 1px 0 #F60F56, 0 -1px #55FF00",
		margin: "5px 0px 0px 55px",
		textAlign: "inherit",
		fontSize: "70px",
		fontWeight: 900,
		letterSpacing: "25px",
	},
	DokanMotto: {
		color: "#F60F56",
		// color: "#55FF00",
		display: "block",
		width: "70%",
		margin: "-30px 0px 0px 100px",
		fontSize: "32px",
		padding: "20px 0px 20px 70px",
	},
	Card: {
		width: "35%",
		padding: "90px",
		[theme.breakpoints.down("md")]: {
			width: "60%",
			padding: theme.spacing(10),
		},
		[theme.breakpoints.down("sm")]: {
			width: "40%",
			padding: theme.spacing(6),
		},
		[theme.breakpoints.down("xs")]: {
			width: "60%",
			padding: theme.spacing(6),
		},
		border: "2px solid #900C3D",
		boxShadow: "24 #900C3D",
		// border: "2px solid #55FF00",
		// boxShadow: "24 #55FF00",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "space-around",
	},
	Stack: {
		padding: "20px 0px",
	},
	Button: {
		border: "1px solid #900C3F",
		// border: "1px solid #55FF00",
		width: "100%",
	},
	ForgotPassword: {
		padding: "20px 0px",
		textAlign: "center",
		color: "#900C3F",
		// color: "#55FF00",
	},
}));

export const LoginNew = (props) => {
	const classes = useStyles();

	const profileType = useSelector((state) => state.auth.profileType);
	const tokenId = useSelector((state) => state.auth.tokenId);
	// console.log("AUTH", useSelector((state) => state.auth));
	const history = useHistory();
	// console.log("authToken ::", tokenId);
	// console.log("profileType ::", profileType);
	const {
		value: email,
		inputChangedHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput((value) => value.trim() !== "" && value.includes("@"));

	const {
		value: password,
		inputChangedHandler: passwordChangedHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: resetPassword,
	} = useInput((value) => value.trim().length >= 6);

	const dispatch = useDispatch();
	const onAuth = (profileType, email, password) =>
		dispatch(actions.authLogin(profileType, email, password));

	const loginHandler = (event) => {
		event.preventDefault();
		onAuth(profileType, email, password);
		// console.log( profileType, email, password);
		history.push("/");
		resetEmail();
		resetPassword();
	};

	// const [isSignup, setIsSignup] = useState(false);
	// const showSignupModalHandler = () => {
	//   setIsSignup(!isSignup);
	// };

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Paper>
			<Stack className={classes.GridMain} direction="row">
				{/* <Hidden lgDown>
					<Grid container item md={6} className={classes.GridTag}>
						<Stack spacing={2} className={classes.StackColumn}>
							<Stack direction="row" spacing={6} className={classes.StackRow}>
								<img src={`Logo.png`} alt="Logo" className={classes.Logo} />
								<h1 className={classes.DokanName}>DOKAN</h1>
							</Stack>
							<p className={classes.DokanMotto}>Dokan helps you for your purchasing and to create your own shop.</p>
						</Stack>
					</Grid>
				</Hidden> */}

				<Grid container item xs={12} md={6} className={classes.GridTag}>
					<Card sx={{ borderRadius: 14, boxShadow: "1px 0px 10px 2px #F60F56" }} className={classes.Card} >
					{/* <Card sx={{ borderRadius: 14, boxShadow: "1px 0px 10px 2px #55FF00" }} className={classes.Card} > */}
						<Stack spacing={4} className={classes.Stack}>
							<TextField value={email} label="UserId" id="userid" defaultValue="" placeholder="UserId@gmail.com" variant="outlined" size="large" type="email" onChange={emailChangedHandler} onBlur={emailBlurHandler} required />
							<TextField value={password} label="Password" id="password" defaultValue="" placeholder="password" variant="outlined" size="large" type="password" onChange={passwordChangedHandler} onBlur={passwordBlurHandler} required />
							<Button variant="contained" color={"secondary"} size="large" className={classes.Button} startIcon={<Login />} onClick={loginHandler} >Login</Button>
						</Stack>
						<p className={classes.ForgotPassword}>Forgot Password ?</p>
						{/* <Divider sx={{ backgroundColor: "#900C3F", height: "2px" }} /> */}
						<LinearProgress color="secondary" />
						{/* <Divider sx={{ backgroundColor: "#55FF00", height: "2px" }} /> */}
						<Stack direction="row" spacing={4} sx={{ paddingTop: "40px" }}>
							<Button variant="contained" color={"primary"} size="large" className={classes.Button} startIcon={<Airplay />} onClick={handleOpen} >Create New Account</Button>
						</Stack>
					</Card>
				</Grid>
			</Stack>
			<Modal open={open} onClose={handleClose}>
				<Signup closeModal={handleClose} />
			</Modal>
		</Paper>
	);
};

export default LoginNew;

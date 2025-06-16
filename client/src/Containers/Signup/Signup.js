import React, { useState } from "react";
import { Grid, Stack, Card, TextField, Button, Divider, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Airplay } from "@mui/icons-material";

import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";

import useInput from "../../hooks/useInput";
import * as actions from "../../store/actions/index";

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
		// border: "2px solid #55FF00",
		// boxShadow: "24 #55FF00",
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
		// border: "1px solid #55FF00",
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "space-around",
	},
	ForgotPassword: {
		textAlign: "center",
		color: "#900C3F",
		// color: "#55FF00",
	},
	Agreement: {
		fontSize: "10px",
		margin: "25px 25px 0px 25px",
	},
}));

export const Signup = (props) => {
	const classes = useStyles();

	const [birthday, setBirthday] = useState(new Date());

	const profileType = useSelector((state) => state.auth.profileType);
	const tokenId = useSelector((state) => state.auth.tokenId);
	const history = useHistory();

	const {
		value: firstName,
		inputChangedHandler: firstNameChangedHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName,
	} = useInput((value) => value.trim() !== "");
	const {
		value: lastName,
		inputChangedHandler: lastNameChangedHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName,
	} = useInput((value) => value.trim() !== "");
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

	const {
		value: phoneNumber,
		inputChangedHandler: phoneNumberChangedHandler,
		inputBlurHandler: phoneNumberBlurHandler,
		reset: resetPhoneNumber,
	} = useInput((value) => value.trim().length === 11);
	const {
		value: nid,
		inputChangedHandler: nidChangedHandler,
		inputBlurHandler: nidBlurHandler,
		reset: resetNid,
	} = useInput((value) => value.trim().length === 10);
	const {
		value: gender,
		inputChangedHandler: genderChangedHandler,
		inputBlurHandler: genderBlurHandler,
		reset: resetGender,
	} = useInput((value) => value.trim() !== "");

	// console.log(firstName)
	// console.log(lastName)
	// console.log(email)
	// console.log(password)
	// console.log(phoneNumber)
	// console.log(nid)
	// console.log(gender)
	// console.log(birthday)

	const dispatch = useDispatch();
	const onAuth = ( profileType, firstName, lastName, email, password, phoneNumber, nid, gender, birthday ) => dispatch( actions.authSignup(profileType, firstName, lastName, email, password, phoneNumber, nid, gender, birthday ));

	const signupHandler = (event) => {
		event.preventDefault();
		onAuth( profileType, firstName, lastName, email, password, phoneNumber, nid, gender, birthday );
		// console.log( profileType, firstName, lastName, email, password, phoneNumber, nid, gender, birthday );
		history.push("/");
		// console.log("oooooooooooo", history);
		
		// resetFirstName();
		// resetLastName();
		// resetEmail();
		// resetPhoneNumber();
		// resetPassword();
		// resetNid();
		// resetGender();
	};

	return (
		<Grid container item xs={12} className={classes.GridMain}>
			<Card sx={{ borderRadius: 14, boxShadow: "1px 0px 10px 2px #F60F56" }} className={classes.Card} >
			{/* <Card sx={{ borderRadius: 14, boxShadow: "1px 0px 10px 2px #55FF00" }} className={classes.Card} > */}
				<Stack direction="row" spacing={2} className={classes.StackRow}>
					<NavLink to="/home" exact>
						<img src={`/Logo.png`} className={classes.logo} alt="logo" />
					</NavLink>
					<h3>Sign Up</h3>
					<img className={classes.Cross} src={"/Icons/SignupClose.png"} onClick={props.closeModal} alt="cross" />
				</Stack>
				<Divider sx={{ backgroundColor: "#900C3F", height: "1px", boxShadow: "1px 0px 10px 1px #F60F56" }} />
				{/* <Divider sx={{ backgroundColor: "#55FF00", height: "1px", boxShadow: "1px 0px 10px 1px #55FF00" }} /> */}
				<Stack spacing={4} sx={{ padding: "20px 50px" }}>
					<Stack direction="row" spacing={2} className={classes.StackName}>
						<TextField value={firstName} label="First Name" id="firstName" placeholder="First Name" variant="filled" size="small" type="text" onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler} required />
						<TextField value={lastName} label="Last Name" id="lastName" placeholder="Last Name" variant="filled" size="small" type="text" onChange={lastNameChangedHandler} onBlur={lastNameBlurHandler} required />
					</Stack>
					<TextField value={email} label="Email" id="email" placeholder="UserId@gmail.com" variant="filled" size="small" type="email" onChange={emailChangedHandler} onBlur={emailBlurHandler} required />
					<TextField value={password} label="Password" id="password" placeholder="password" variant="filled" size="small" type="password" onChange={passwordChangedHandler} onBlur={passwordBlurHandler} required />
					<TextField value={phoneNumber} label="Phone number" id="phoneNumber" placeholder="Phone number" variant="filled" size="small" type="number" onChange={phoneNumberChangedHandler} onBlur={phoneNumberBlurHandler} required />
					<TextField value={nid} label="NID" id="nid" placeholder="NID" variant="filled" size="small" type="number" onChange={nidChangedHandler} onBlur={nidBlurHandler} required />
					<FormControl>
						<FormLabel id="gender">Gender</FormLabel>
						<RadioGroup row aria-labelledby="gender" name="row-radio-buttons-group" onChange={genderChangedHandler} onBlur={genderBlurHandler} >
							<FormControlLabel value="female" control={<Radio />} label="Female" />
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel value="other" control={<Radio />} label="Other" />
						</RadioGroup>
					</FormControl>
					<LocalizationProvider dateAdapter={DateAdapter}>
						<Stack spacing={3}>
							<DatePicker label="Date of Birth" openTo="day" views={["day", "month", "year"]} value={birthday} onChange={(value) => { setBirthday(value) }} renderInput={(params) => <TextField {...params} />} />
						</Stack>
					</LocalizationProvider>
				</Stack>
				{/* <Divider sx={{ backgroundColor: "#900C3F", height: "2px", boxShadow: "1px 0px 10px 1px #F60F56" }} /> */}
				<LinearProgress color="secondary" />
				{/* <Divider sx={{ backgroundColor: "#55FF00", height: "2px", boxShadow: "1px 0px 10px 1px #55FF00" }} /> */}
				<p className={classes.Agreement}>By clicking signup you agree to our <span>Terms, Data Policy</span>{" "} and <span>Cookie Policy.</span> You may recieve SMS notification from us and can opt out at any time.</p>
				<Stack direction="row" spacing={4} sx={{ padding: "40px", justifyContent: "center" }} >
					<Button variant="contained" color={"primary"} size="large" className={classes.Button} onClick={signupHandler} startIcon={<Airplay />} >SIGN UP</Button>
				</Stack>
			</Card>
		</Grid>
	);
};

export default Signup;

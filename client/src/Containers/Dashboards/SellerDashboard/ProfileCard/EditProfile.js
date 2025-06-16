import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { Stack, Button } from "@mui/material";
import { Settings } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	button: {
		fontWeight: 'bold',
		fontSize: '20px'
	},
}));

const EditProfile = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const [value, setValue] = useState(0);

	const editProfile = () => {
		history.push("/SellerDashboard/editProfile");
	}

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} className={classes.root}>
			<Button variant="contained" startIcon={<Settings />} onClick={editProfile}>Edit Profile</Button>
		</Stack>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

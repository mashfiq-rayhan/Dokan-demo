import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Paper, Stack, Button, Modal } from "@mui/material";
import { } from "@mui/icons-material";

import ProfileCard from './CustomerInformation/ProfileCard/ProfileCard';
import GetAgent from './GetAgent/GetAgent';
import BasicInformation from './CustomerInformation/BasicInformation';
import PaymentInformation from './CustomerInformation/PaymentInformation';
import DataTable0 from "./DataTable0"
import DataTable1 from "./DataTable1"
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		padding: '40px',
		justifyContent: 'space-around'
	},
}));

 const CustomerDashboard = (props) => {
	const classes = useStyles();

	const [value, setValue] = useState(0);



	return (
		<Stack spacing={4} >
			<ProfileCard/>
			<GetAgent/>
			<Stack spacing={0} direction="row" sx={{ justifyContent: "space-evenly", alignItems: "center", width: "100%"}}>
				<BasicInformation />
				<PaymentInformation />
			</Stack>
			<DataTable0 />
			<DataTable1 />
		</Stack>
  );
};

export default CustomerDashboard;

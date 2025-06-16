import React, { useState, useSelector } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Paper, Avatar, Card, Stack } from "@mui/material";
import SellerInformation from "./SellerInformation";
import EditProfile from "./EditProfile";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		padding: "50px",
		border: "2px solid #900C3D"
	}
}));

const ProfileCard = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	
	return (
		<Card className={classes.root} sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }}>
			<Stack direction="row" sx={{ justifyContent: "space-around", alignItems: "center"}}>
				<Avatar sx={{ border: "2px solid #900C3D", width: 120, height: 120 }} src="" />
				<SellerInformation />
				<EditProfile />
			</Stack>
		</Card>
		
	);
};



export default ProfileCard;

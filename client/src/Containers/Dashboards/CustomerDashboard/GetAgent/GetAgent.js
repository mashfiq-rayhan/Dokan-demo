import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Paper, Stack, Button, Modal } from "@mui/material";
import { Storefront, BikeScooter } from "@mui/icons-material";

import SellerAgentSignup from './SellerAgentSignup/SellerAgentSignup';
import DeliveryAgentSignup from './DeliveryAgentSignup/DeliveryAgentSignup';

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		padding: '40px',
		justifyContent: 'space-around'
	},
}));

const GetAgent = (props) => {
	const classes = useStyles();

	const [value, setValue] = useState(0);

	const [openSellerAgentSignup, setOpenSellerAgentSignup] = useState(false);
	const handleOpenSellerAgentSignup = () => setOpenSellerAgentSignup(true);
	const handleCloseSellerAgentSignup = () => setOpenSellerAgentSignup(false);

	const [openDeliveryAgentSignup, setOpenDeliveryAgentSignup] = useState(false);
	const handleOpenDeliveryAgentSignup = () => setOpenDeliveryAgentSignup(true);
	const handleCloseDeliveryAgentSignup = () => setOpenDeliveryAgentSignup(false);

	return (
		<Stack sx={{ border: "2px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }} >
			<Stack direction={"row"} spacing={4} className={classes.root}>
				<Button sx={{height: '100px'}} variant="contained" startIcon={<Storefront fontSize="large" />} onClick={handleOpenSellerAgentSignup}>DOKAN HOLDER - Become a SELLER</Button>
				<Button sx={{height: '100px'}} variant="contained" startIcon={<BikeScooter fontSize="large" />} onClick={handleOpenDeliveryAgentSignup} >Delivery - Become a Delivery Agent</Button>
			</Stack>
			<Modal open={openSellerAgentSignup} onClose={handleCloseSellerAgentSignup}>
				<SellerAgentSignup closeModal={handleCloseSellerAgentSignup} />
			</Modal>
			<Modal open={openDeliveryAgentSignup} onClose={handleCloseDeliveryAgentSignup}>
				<DeliveryAgentSignup closeModal={handleCloseDeliveryAgentSignup} />
			</Modal>
		</Stack>
  );
};

export default GetAgent;

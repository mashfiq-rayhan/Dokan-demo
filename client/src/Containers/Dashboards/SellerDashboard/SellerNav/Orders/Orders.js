import React, { useState, useSelector } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, Stack, Button  } from "@mui/material";
import { Telegram } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		padding: "50px 170px",
		border: "2px solid #900C3D",
        justifyContent: 'space-around'
        
	},
    NavLink: {
        textDecoration: 'none',
    }
}));

const Orders = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	return (
    <Card>
      <Stack direction="row" spacing={2} className={classes.root}>
        
        <NavLink to={"/SellerDashboard" + "/Orders"} exact className={classes.NavLink}>
          <Button variant="contained" startIcon={<Telegram />}>Orders</Button>
        </NavLink>
        
      </Stack>
    </Card>
  );
};


export default Orders;

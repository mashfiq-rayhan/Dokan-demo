import React, { useState, useSelector } from "react";
import { connect } from "react-redux";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, Stack, Button, Modal, Box, Typography  } from "@mui/material";
import { DynamicFeed, Add, Loyalty, Telegram } from '@mui/icons-material';

import Products from './Products/Products';
import AddProduct from './AddProduct/AddProduct';
import Orders from './Orders/Orders';
import Sales from './Sales/Sales';


const useStyles = makeStyles((theme) => ({
  Card: {
    marginBottom: "5px",
  },
  Stack: {
    display: "flex",
    flexDirection: "column",
    padding: "50px 170px",
    // border: "2px solid #900C3D",
    justifyContent: "space-around",
  },
  NavLink: {
    textDecoration: "none",
  },
}));

const SellerNav = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

	return (
    <Card className={classes.Card}>
      <Stack spacing={1}>
        <Stack direction="row" spacing={2} className={classes.Stack}>
          <NavLink to={"/SellerDashboard" + "/Products"}  exact className={classes.NavLink}>
            <Button variant="contained" startIcon={<DynamicFeed />}>Products</Button>
          </NavLink>
          <NavLink to={"/SellerDashboard" + "/AddProduct"} exact className={classes.NavLink}>
            <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>Add Product</Button>
          </NavLink>
          <NavLink to={"/SellerDashboard" + "/Orders"} exact className={classes.NavLink}>
            <Button variant="contained" startIcon={<Telegram />}>Orders</Button>
          </NavLink>
          <NavLink to={"/SellerDashboard" + "/Sales"} exact className={classes.NavLink}>
            <Button variant="contained" startIcon={<Loyalty />}>Sales</Button>
          </NavLink>
        </Stack>
        <Switch>
          <Route path="/SellerDashboard/Products" component={Products} />
          <Route path="/SellerDashboard/Orders" component={Orders} />
          <Route path="/SellerDashboard/Sales" component={Sales} />
        </Switch>
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <AddProduct closeModal={handleClose} />
      </Modal>
    </Card>
  );
};


export default SellerNav;

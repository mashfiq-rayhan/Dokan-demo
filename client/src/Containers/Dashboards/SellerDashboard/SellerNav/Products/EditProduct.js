import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Telegram, Info, ShoppingCart, Storefront } from "@mui/icons-material";
import * as actions from "../../../../../store/actions/index";


const useStyles = makeStyles((theme) => ({
  profileMenu: {
    boxShadow:
      "0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 4px 0px 0 rgba(246, 15, 86, 0.19)",
  },
  link : {
    color: 'white',
    textDecoration: "none"
  }
}));

const ProfileType = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const tokenId = useSelector((state) => state.auth.tokenId);

  const [type, setType] = useState("");
  console.log("This is setType ", type);

  const dispatch = useDispatch();
  const ProfileType = (type) => dispatch(actions.ProfileType(type));
  
  
  // Profiles

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const ProfileTypeHandler = (type, e) => {
    e.preventDefault();
    // console.log(type);
    // console.log(history);
    // history.push("/CustomerDashboard");
    switch (type) {
      case "Customer" : ProfileType(type); setType(type); 
        return history.push(tokenId ? "/CustomerDashboard" : "/login");
      case "Seller" : ProfileType(type); setType(type); 
        return history.push(tokenId ? "/SellerDashboard" : "/login");
      case "Delivery" : ProfileType(type); setType(type); 
        return history.push(tokenId ? "/DeliveryDashboard" : "/login");
      default:
        return history.push("/");
    }

  }

  const menuId = "select-profile";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      className={classes.profileMenu}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
        {/* <NavLink className={classes.link} to={tokenId ? "/CustomerDashboard" : "/login"} exact > */}
      <MenuItem onClick={(e) => {ProfileTypeHandler("Customer", e)}}>
          <IconButton color="primary">
            <ShoppingCart />
          </IconButton>
          <p>Customer</p>
      </MenuItem>
        {/* </NavLink> */}
        {/* <NavLink className={classes.link} to="/SellerDashboard" exact > */}
      <MenuItem onClick={(e) => {ProfileTypeHandler("Seller", e)}}>
          <IconButton color="primary">
            <Storefront />
          </IconButton>
          <p>DOKAN Holder</p>
      </MenuItem>
        {/* </NavLink> */}
        {/* <NavLink className={classes.link} to="/DeliveryDashboard" exact > */}
      <MenuItem onClick={(e) => {ProfileTypeHandler("Delivery", e)}}>
          <IconButton color="primary">
            <Telegram />
          </IconButton>
          <p>Deliver</p>
      </MenuItem>
        {/* </NavLink> */}
    </Menu>
  );

  return (
    <div>
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <Info />
      </IconButton>
      {renderMenu}
    </div>
  );
};

export default ProfileType;

import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Telegram, AccountCircle, ShoppingCart, Storefront } from "@mui/icons-material";
import * as actions from "../../../store/actions/index";


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
  const userId = useSelector((state) => state.auth.userId);
  const customerId = useSelector((state) => state.auth.customerId);
  const sellerId = useSelector((state) => state.auth.sellerId);
  const deliveryId = useSelector((state) => state.auth.deliveryId);

  const dispatch = useDispatch();
  const ProfileType = (profileType) => dispatch(actions.ProfileType(profileType));
  
  // Profiles

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    // tokenId ? setAnchorEl(event.currentTarget) : history.push("/login")
    setAnchorEl(event.currentTarget)
  };

  const handleMenuClose = (event) => {
    setAnchorEl(null);
  };

  const ProfileTypeHandler = (type, e) => {
    // console.log(type);
    // console.log(history);
    // history.push("/CustomerDashboard");
    switch (type) {
      case "customer" : ProfileType(type); handleMenuClose(); 
        return history.push(tokenId ? "/CustomerDashboard" : "/login");
      case "seller" : ProfileType(type); handleMenuClose();
        return history.push(tokenId ? "/SellerDashboard" : "/login");
      case "delivery" : ProfileType(type); handleMenuClose();
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
      
      {customerId ? <MenuItem onClick={(e) => {ProfileTypeHandler("customer", e)}}>
          <IconButton color="primary">
            <ShoppingCart />
          </IconButton>
          <p>Customer</p>
      </MenuItem> : null}
      {sellerId ? <MenuItem onClick={(e) => {ProfileTypeHandler("seller", e)}}>
          <IconButton color="primary">
            <Storefront />
          </IconButton>
          <p>DOKAN Holder</p>
      </MenuItem> : null}
      {deliveryId ? <MenuItem onClick={(e) => {ProfileTypeHandler("delivery", e)}}>
          <IconButton color="primary">
            <Telegram />
          </IconButton>
          <p>Deliver</p>
      </MenuItem> : null}
    </Menu>
  );

  return (
    <div>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={ tokenId ? handleProfileMenuOpen : (e) => {ProfileTypeHandler("customer", e)} }
        color="inherit"
      >
        <AccountCircle color="primary" fontSize="large" />
      </IconButton>
      {renderMenu}
    </div>
  );
};

export default ProfileType;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { Grid, Hidden, AppBar, Toolbar, IconButton } from "@mui/material";
import { Home, Explore, TrendingUp, Storefront } from "@mui/icons-material";

//
import Search from "./Search/Search";
import Categories from "./Categories/Categories";
import Messages from "./Messages/Messages";
import NotificationsAll from "./NotificationsAll/NotificationsAll";
import Cart from "./Cart/Cart";
import Receive from "./Receive/Receive";
import ProfileType from "./ProfileType/ProfileType";
import SettingsAll from "./SettingsAll/SettingsAll";

const useStyles = makeStyles((theme) => ({
	logo: {
		height: "50px",
		padding: "10px",
	},
	firstSection: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	secondSection: {
		flexGrow: 1,
		justifyContent: "space-between",
		[theme.breakpoints.up("md")]: {
			justifyContent: "space-around",
		},
	},
	thirdSection: {
		justifyContent: "space-around",
		alignItems: "center",
	},
}));

const TopNavigation = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Grid container item justify="space-around" alignItems="center">
            <Grid item xs={12} md={3}>
              <div className={classes.firstSection}>
                <NavLink to="/home" exact>
                  <img src={`/Logo.png`} className={classes.logo} alt="logo" />
                </NavLink>
                <Search />
                <Categories color="primary" fontSize="large" />
              </div>
            </Grid>
            <Grid container item xs={12} md={6} className={classes.secondSection} >
              <NavLink to="/home" exact>
                <IconButton>
                  <Home color="primary" fontSize="large" />
                </IconButton>
              </NavLink>
              <NavLink to="/explore" exact>
                <IconButton>
                  <Explore color="primary" fontSize="large" />
                </IconButton>
              </NavLink>
              <NavLink to="/trending" exact>
                <IconButton>
                  <TrendingUp color="primary" fontSize="large" />
                </IconButton>
              </NavLink>
              <NavLink to="/dokans" exact>
                <IconButton>
                  <Storefront color="primary" fontSize="large" />
                </IconButton>
              </NavLink>
            </Grid>
            <Hidden smDown>
              <Grid item container xs={12} md={3} className={classes.thirdSection} >
                <Messages />
                <NotificationsAll />
                <Cart />
                <Receive />
                <ProfileType />
                <SettingsAll />
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavigation;

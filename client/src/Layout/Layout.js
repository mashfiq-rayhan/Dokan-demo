import React from "react";
import { Grid, Paper, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TopNavigation from "../Containers/TopNavigation/TopNavigation";
import LeftNavigation from "../Containers/LeftNavigation/LeftNavigation";
import RightNavigation from "../Containers/RightNavigation/RightNavigation";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		justifyContent: "center",
	},
	paper: {
		width: "100%",
    height: "100%",
		border: '2px solid #900C3D',
    boxShadow: '0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 6px 20px 0 rgba(246, 15, 86, 0.19)'
    // border: "2px solid #55FF00",
		// boxShadow: "24 #55FF00",
	},
}));

const Layout = (props) => {
	const classes = useStyles();
	return (
    <Grid className={classes.root} container spacing={1}>
      <Grid container item xs={12}>
        <Paper className={classes.paper} sx={{ boxShadow: '1px 0px 10px 2px #F60F56' }} >
        {/* <Paper className={classes.paper} sx={{ boxShadow: '1px 0px 10px 2px #55FF00' }} > */}
          <TopNavigation />
        </Paper>
      </Grid>

      <Hidden mdDown>
        <Grid container item md={2}>
          <Paper className={classes.paper} sx={{ boxShadow: '1px 0px 10px 2px #F60F56' }} >
          {/* <Paper className={classes.paper} sx={{ boxShadow: '1px 0px 10px 2px #55FF00' }} > */}
            <LeftNavigation />
          </Paper>
        </Grid>
      </Hidden>

      <Grid sx={{ height: "100vh" }} item xs={12} md={8}>
        <Paper sx={{ boxShadow: '1px 0px 10px 2px #F60F56' }}>
        {/* <Paper sx={{ boxShadow: '1px 0px 10px 2px #55FF00' }}> */}
          {props.children}
        </Paper>
      </Grid>

      <Hidden smDown>
        <Grid container item md={2}>
          <Paper className={classes.paper} sx={{ boxShadow: '1px 0px 10px 2px #F60F56' }} >
          {/* <Paper className={classes.paper} sx={{ boxShadow: '1px 0px 10px 2px #55FF00' }} > */}
            <RightNavigation />
          </Paper>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Layout;

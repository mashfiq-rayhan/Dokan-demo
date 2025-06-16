import React, { Fragment, useState } from "react";

import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, List, ListItemButton, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { data } from './LeftNavigationData';




const useStyles = makeStyles((theme) => ({
	listItemText: {
		color: "#F60F56"
		// color: "#55FF00"
	},
	logo: {
		paddingRight: '20px'
	},
	navlink : {
		color: 'white',
		textDecoration: 'none',
		pr: '50px'
	}
}));



const LeftNavigation = (props) => {
	const classes = useStyles();
	const [navObject, setNavObject] = useState(data);

	const [open, setOpen] = useState(true);

  

	return (
    <Box sx={"auto"} role="presentation">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        {Object.keys(navObject).map((key, value) => {
          // console.log(key);
          // console.log(navObject[key]);
          return (
            <div key={key}>
              <NavLink className={classes.navlink} to={"/" + navObject[key]} exact>
                <ListItemButton>
                  <img src={`images/LeftNavSellerDashBoard/${navObject[key]}.png`} className={classes.logo} alt='logo'/>
                  <ListItemText
                    primary={key}
                    className={classes.listItemText}
                  />
                </ListItemButton>
              </NavLink>
            </div>
          );
        })}
      
      </List> 
    </Box>
  );
};



export default LeftNavigation;


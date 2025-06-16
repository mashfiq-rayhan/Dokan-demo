import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { data } from "./categoryData";
import { makeStyles } from "@mui/styles";
import { Box, IconButton, ListSubheader, List, SwipeableDrawer, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { AccountTree, ArrowLeft, ArrowRight } from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
	listItemButton: {
justifyContent: 'space-between'
	},
	navlink : {
		color: '#900C3D',
		textDecoration: 'none',
		pr: '50px'
	}
}));


const Categories = (props) => {
	const classes = useStyles();
	const [categoryObject, setCategoryObject] = useState(data);
	
	const [show, setShow] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setShow(open);
	};

	const [openMain, setOpenMain] = useState(false);
	const [open2nd, setOpen2nd] = useState(false);

	const handleClickMain = () => {
		setOpenMain(!openMain);
	};
	const handleClick2nd = () => {
		setOpen2nd(!open2nd);
	};

	const list = (
    <Box sx={"auto"} role="presentation">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
		subheader={
			<ListSubheader component="div" id="nested-list-subheader">
			  Categories
			</ListSubheader>
		  }
      >
        {Object.keys(categoryObject).map((key, value) => {
          return (
            <div key={key}>
              <ListItemButton onClick={handleClickMain}>
                <ListItemText primary={key} />
                {openMain ? <ArrowLeft /> : <ArrowRight />}
              </ListItemButton>

              <Collapse in={openMain} timeout="auto" unmountOnExit>
                {Object.keys(categoryObject[key]).map((value, index) => {
                  return (
                    <div key={value}>
                      <ListItemButton onClick={handleClick2nd}>
                        <NavLink className={classes.navlink} to={"/" + value} exact>
                          <ListItemText primary={value} />
                        </NavLink>
                        {open2nd ? <ArrowLeft /> : <ArrowRight />}
                      </ListItemButton>
                      <Collapse in={open2nd} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {categoryObject[key][value].map((index, loc) => {
                            return (
                              <div key={index}>
                                <ListItemButton sx={{ pl: 4 }}>
                                  <NavLink className={classes.navlink} to={"/" + value + "/" + index} exact>
                                    <ListItemText primary={index} />
                                  </NavLink>
                                </ListItemButton>
                              </div>
                            );
                          })}
                        </List>
                      </Collapse>
                    </div>
                  );
                })}
              </Collapse>
            </div>
          );
        })}
      </List>
    </Box>
  );

	return (
    <Fragment>
      <SwipeableDrawer
        anchor="top"
        open={show}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
      <IconButton onClick={toggleDrawer(true)}>
        <AccountTree color="primary" fontSize="large" />
      </IconButton>
    </Fragment>
  );
};



export default Categories;

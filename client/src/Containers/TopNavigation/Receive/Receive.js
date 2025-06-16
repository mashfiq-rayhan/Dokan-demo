import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@mui/styles";
import { IconButton, Menu, MenuItem, Paper, Stack, Avatar, Fade } from "@mui/material";
import { BikeScooter } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  profileMenu: {
    // border: "3px solid #900C3F",
    boxShadow: "0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 4px 0px 0 rgba(246, 15, 86, 0.19)",
  },
}));

const Receive = (props) => {
  const classes = useStyles();

  // Profiles

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  

  const menuId = "select-profile";
  const renderMenu = (
    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} id={menuId} keepMounted transformOrigin={{ vertical: "top", horizontal: "center" }} open={isMenuOpen} onClose={handleMenuClose} TransitionComponent={Fade} sx={{ boxShadow: "1px 0px 10px 2px #F60F56" }} >
      <Paper sx={{ width: 400, maxWidth: '100%', boxShadow: "1px 0px 10px 2px #F60F56" }}>
        <MenuItem sx={{ justifyContent: 'space-between',  }} >
          <Stack direction="row" sx={{ alignItems: 'center', padding: '20px' }} spacing={4} >
            <Avatar>H</Avatar>
            <h4>Item Name</h4>
          </Stack>
        </MenuItem>
        <MenuItem sx={{ justifyContent: 'space-between',  }} >
          <Stack direction="row" sx={{ alignItems: 'center', padding: '20px' }} spacing={4} >
            <Avatar>H</Avatar>
            <h4>Item Name</h4>
          </Stack>
        </MenuItem>
        <MenuItem sx={{ justifyContent: 'space-between',  }} >
          <Stack direction="row" sx={{ alignItems: 'center', padding: '20px' }} spacing={4} >
            <Avatar>H</Avatar>
            <h4>Item Name</h4>
          </Stack>
        </MenuItem>
        <MenuItem sx={{ justifyContent: 'space-between',  }} >
          <Stack direction="row" sx={{ alignItems: 'center', padding: '20px' }} spacing={4} >
            <Avatar>H</Avatar>
            <h4>Item Name</h4>
          </Stack>
        </MenuItem>
        
      </Paper>
    </Menu>
  );

  return (
    <div>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <BikeScooter color="primary" fontSize="large" />
      </IconButton>
      {renderMenu}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Receive);

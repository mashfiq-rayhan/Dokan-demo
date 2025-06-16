import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { IconButton, Menu, MenuItem, Paper, Fade, Stack, Avatar } from "@mui/material";
import { CircleNotifications, NotificationsNoneOutlined, Close } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  
}));

const NotificationsAll = (props) => {
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
    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} id={menuId} keepMounted transformOrigin={{ vertical: "top", horizontal: "center" }} open={isMenuOpen} onClose={handleMenuClose} TransitionComponent={Fade} >
      <Paper sx={{ width: 400, maxWidth: '100%' }}>

      <MenuItem sx={{ justifyContent: 'space-between',  }} >
      <IconButton color="primary">
          <CircleNotifications fontSize="large" onClick={handleMenuClose} />
        </IconButton>
        <h3>Notifications</h3>
        <IconButton color="primary">
          <Close fontSize="large" onClick={handleMenuClose} />
        </IconButton>
      </MenuItem>

      

      <MenuItem>
        <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: 60 }} >
            <Avatar sx={{ width: 50, height: 50 }} src="" />
            <div>
                <p>Notification from</p>
                <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
        </Stack>
      </MenuItem>

      </Paper>
    </Menu>
  );

  return (
    <div>
      <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
        <NotificationsNoneOutlined color="primary" fontSize="large" />
      </IconButton>
      {renderMenu}
    </div>
  );
};


export default NotificationsAll;

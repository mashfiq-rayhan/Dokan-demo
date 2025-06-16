import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { IconButton, Menu, MenuItem, Paper, Fade, Stack, Avatar  } from "@mui/material";
import { Email, EmailOutlined, Close} from "@mui/icons-material";

import Search from "../Search/Search"
import Msg from "./Msg";

const useStyles = makeStyles((theme) => ({
  
}));

const Messages = (props) => {
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
          <Email fontSize="large" onClick={handleMenuClose} />
        </IconButton>
        <h3>Messages</h3>
        <IconButton color="primary">
          <Close fontSize="large" onClick={handleMenuClose} />
        </IconButton>
      </MenuItem>

      <MenuItem>
        <Search sx={{ width: 350 }} />
      </MenuItem>
      
      <MenuItem>
        <Msg />
      </MenuItem>

      <MenuItem>
        <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: 60 }} >
            <Avatar sx={{ width: 50, height: 50 }} src="" />
            <div>
                <p>message from</p>
                <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
        </Stack>
      </MenuItem>

      </Paper>
    </Menu>

  );

  return (
    <div>
      <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit" >
        <EmailOutlined color="primary" fontSize="large" />
      </IconButton>
      {renderMenu}
    </div>
  );
};


export default Messages;

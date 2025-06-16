import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { IconButton, Menu, MenuItem, Box, Switch } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Logout, ShoppingCart, Storefront, Settings, Brightness7, Brightness4 } from "@mui/icons-material";
import * as actions from "../../../store/actions/index";
const useStyles = makeStyles((theme) => ({
  profileMenu: {
    // border: "3px solid #900C3F",
    boxShadow: "0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 4px 0px 0 rgba(246, 15, 86, 0.19)",
  },
}));

const SettingsAll = (props) => {
  const classes = useStyles();
  const history = useHistory();
  // const theme = useTheme();


  const dispatch = useDispatch();
  const onLogout = () => dispatch(actions.authLogout());
  const onChangeTheme = (mode) => dispatch(actions.onChangeTheme(mode));

  const [themeEl, setThemeEl] = useState(true);
  const ChangeTheme = (event) => {
    setThemeEl(event.target.checked);
    onChangeTheme(event.target.checked);
    
  };

  

  // Profiles

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  

  const LogoutHandler = (event) => {
    // event.preventDefault();
    onLogout();
    handleMenuClose()
    history.push("/");
  }

  

  const menuId = "select-profile";
  const renderMenu = (
    <Menu anchorEl={anchorEl} className={classes.profileMenu} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} id={menuId} keepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={isMenuOpen} onClose={handleMenuClose} >
      <MenuItem sx={{justifyContent: 'space-evenly'}}>
        <Switch checked={themeEl} onChange={ChangeTheme} inputProps={{ 'aria-label': 'controlled' }} />
        <p>Dark Mode</p>
        {/* <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', color: 'text.primary', borderRadius: 1, p: 3 }} >
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={ChangeTheme} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box> */}
      </MenuItem>
      <MenuItem onClick={handleMenuClose} >
        <IconButton color="primary">
          <Storefront />
        </IconButton>
        <p>DOKAN Holder</p>
      </MenuItem>
      <MenuItem onClick={LogoutHandler}>
        <IconButton color="primary">
          <Logout />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
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
        <Settings color="primary" fontSize="large" />
      </IconButton>
      {renderMenu}
    </div>
  );
};



export default SettingsAll;



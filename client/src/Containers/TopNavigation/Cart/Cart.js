import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { Paper, IconButton, Menu, MenuItem, Fade, Checkbox, Avatar, Stack, Divider, Button, TextField } from "@mui/material";
import { ShoppingCart, ShoppingCartOutlined, RemoveCircle, AddCircle, Delete } from "@mui/icons-material";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typography: {
    color: "#900C3D"
  }
}));



const Cart = (props) => {
  const classes = useStyles();
  const history = useHistory();

  // Profiles

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProceedToPay = (event) => {
    event.preventDefault();
    history.push("/PaymentAccount");
  };

  

  const menuId = "select-profile";
  const renderMenu = (
    

    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} id={menuId} keepMounted transformOrigin={{ vertical: "top", horizontal: "center" }} open={isMenuOpen} onClose={handleMenuClose} TransitionComponent={Fade} sx={{ boxShadow: "1px 0px 10px 2px #F60F56" }} >
      <Paper sx={{ width: 500, maxWidth: '100%', boxShadow: "1px 0px 10px 2px #F60F56" }}>

        <MenuItem sx={{ justifyContent: 'space-between' }} >
        <IconButton color="primary">
            <ShoppingCart fontSize="large" onClick={handleMenuClose} />
          </IconButton>
          <h3>Cart</h3>
          <IconButton color="primary">
            {/* <RemoveCircle fontSize="large" onClick={handleMenuClose} /> */}
            <Button variant="contained" startIcon={<Delete />}>Remove all</Button>

          </IconButton>
        </MenuItem>

        <Divider />

        <MenuItem sx={{ justifyContent: 'space-between' }} >
          <Checkbox defaultChecked />
          <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1} >
            <Avatar>H</Avatar>
            <h4>Item Name</h4>
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center' }} spacing={2} >
            <IconButton color="primary">
              <RemoveCircle />
            </IconButton>
            <h4>1</h4>
            <IconButton color="primary">
              <AddCircle />
            </IconButton>
            <h4>price</h4>
          </Stack>
            <IconButton color="primary">
              <Delete />
            </IconButton>
        </MenuItem>

        <Divider />

        <MenuItem sx={{ justifyContent: 'space-between' }} >
          <Checkbox defaultChecked />
          <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1} >
            <Avatar>H</Avatar>
            <h4>Item Name</h4>
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center' }} spacing={2} >
            <IconButton color="primary">
              <RemoveCircle />
            </IconButton>
            <h4>1</h4>
            <IconButton color="primary">
              <AddCircle />
            </IconButton>
            <h4>price</h4>
          </Stack>
            <IconButton color="primary">
              <Delete />
            </IconButton>
        </MenuItem>
        
        <Divider />

        <MenuItem sx={{ justifyContent: 'space-between',  }} >
          <Checkbox defaultChecked />
          <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1} >
            <Avatar>H</Avatar>
            <h4>Item Name</h4>
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center' }} spacing={2} >
            <IconButton color="primary">
              <RemoveCircle />
            </IconButton>
            <h4>1</h4>
            <IconButton color="primary">
              <AddCircle />
            </IconButton>
            <h4>price</h4>
          </Stack>
            <IconButton color="primary">
              <Delete />
            </IconButton>
        </MenuItem>

        <Divider sx={{ backgroundColor: "#900C3F", height: "2px" }}  />
      
          <Stack direction="row" sx={{ justifyContent: 'space-around'}} >
            <Stack>
            <h4>subtotal</h4>
            <h4>Shipping Fees</h4>
            <h4>Taxes</h4>
            <h4>Total Amount</h4>
            <TextField id="standard-basic" label="Enter Voucher Code" variant="standard" size="small" />
            </Stack>
            <Stack>
            <h4>Subtotal</h4>
            <h4>Shipping Fees</h4>
            <h4>Taxes</h4>
            <h4>Total Amount</h4>
            <Button sx={{ justifyContent: 'center'}} variant="contained">Apply</Button>
            </Stack>
          </Stack>
        

          <MenuItem sx={{ justifyContent: 'center', padding: '30px' }} >
          <Button sx={{ justifyContent: 'center'}} variant="contained" onClick={handleProceedToPay}>Proceed To Checkout</Button>
          </MenuItem>

      </Paper>
    </Menu>


  );

  return (
    <div>
      <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit" >
        <ShoppingCartOutlined color="primary" fontSize="large" />
      </IconButton>
      {renderMenu}
    </div>
  );
};


export default Cart;

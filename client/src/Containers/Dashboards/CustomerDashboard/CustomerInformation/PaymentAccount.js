import React, { useState } from "react"; 
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, Stack, CardContent, Avatar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	bikash: {
		height: "150px",
    width: '150px',
	}, 
	nogod: {
		height: "150px",
    width: '200px',
	}, 
	dbbl: {
		height: "100px",
    width: '130px',
	}, 
	mastercard: {
		height: "100px",
    width: '150px',
	}, 
	visa: {
		height: "100px",
    width: '150px',
	}, 
	rocket: {
		height: "100px",
    width: '150px',
	}, 
  CashonDelivery: {
    height: "200px",
    width: '250px',
  }
}));


const PaymentAccount = ( props ) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);


  return (
    <Card sx={{ maxWidth: '100%', border: "2px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }} >
      <CardHeader sx={{ border: "1px solid #900C3D" }} avatar={<Avatar aria-label="recipe">R</Avatar>} title="Payment Account" />
      <CardContent >
        
        <Stack spacing={8} sx={{ justifyContent: 'space-around', alignItems: 'center' }}  >
          <Stack spacing={8}   direction="row" >
            <img src={`/images/PaymentMethods/bikash.svg`} className={classes.bikash} alt="logo" />
            <img src={`/images/PaymentMethods/nogod.png`} className={classes.nogod} alt="logo" />
          </Stack>
          <Stack spacing={14}   direction="row">
            <img src={`/images/PaymentMethods/dbbl.png`} className={classes.dbbl} alt="logo" />
            <img src={`/images/PaymentMethods/rocket.png`} className={classes.rocket} alt="logo" />
          </Stack>
          <Stack spacing={10}  direction="row">
            <img src={`/images/PaymentMethods/visa.svg`} className={classes.visa} alt="logo" />
            <img src={`/images/PaymentMethods/mastercard.svg`} className={classes.mastercard} alt="logo" />
          </Stack>
          <Stack spacing={8} direction="row" >
            <img src={`/images/PaymentMethods/CashonDelivery.svg`} className={classes.CashonDelivery} alt="logo" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default PaymentAccount;
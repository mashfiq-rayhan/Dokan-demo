import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard/ProfileCard";
import SellerNav from "./SellerNav/SellerNav";
import { makeStyles } from "@mui/styles";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	SellerNav : {
		paddingTop: '5px'
	}
}));

const SellerDashboard = (props) => {
	const classes = useStyles();
	const tokenId = useSelector((state) => state.auth.tokenId);
	// console.log(tokenId);
	const [value, setValue] = useState(0);

	return (
    <Fragment>
      {/* {	tokenId ? (
				<div>
					<div><ProfileCard /></div>
					<div className={classes.root}><SellerNav /></div>	
				</div>
			) : (
				<Redirect to="/login" />
			)} */}
        <div>
          <ProfileCard />
        </div>
        <div className={classes.SellerNav}>
          <SellerNav />
        </div>
    </Fragment>
  );
};



export default SellerDashboard;

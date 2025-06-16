import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Rating } from "@mui/material";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		flex: 2,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		color: "black"
	},
	dokanName: {
		marginBottom: "4px",
	},
	dokanInfo: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		marginBottom: "4px",
	},
	dokanPosts: {},
}));

const SellerInformation = (props) => {
	const classes = useStyles();
	
	const dokanName = useSelector((state) => state.sellerAgent.dokanName);
	console.log(dokanName);
	
	const [value, setValue] = useState(0);

	return (
		<Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} className={classes.root} >
			<span className={classes.dokanName}> Hello Seller </span>
			<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} className={classes.dokanInfo} >
				<span>Posts</span>
				<span>Followers</span>
				<span>Popularity</span> 
				<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
			</Stack>

			<span className={classes.dokanPosts}> Something About me </span>
		</Stack>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SellerInformation);

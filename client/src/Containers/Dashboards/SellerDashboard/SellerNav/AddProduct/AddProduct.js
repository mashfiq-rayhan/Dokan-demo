import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Card, Stack, Divider, TextField, IconButton, Button, Autocomplete } from "@mui/material";
import { AddAPhoto, Publish } from "@mui/icons-material";
import { Categories, ChooseType, ChooseItem } from "./Options";

import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../../../../store/actions/index";


const useStyles = makeStyles((theme) => ({
	Card: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "40%",
		border: "2px solid #900C3D",
		boxShadow: "24 #900C3D",
		borderRadius: "25px",
		background: "inherit",
	},
	StackRow: {
		justifyContent: "space-between",
		alignItems: "center",
		padding: "20px",
	},
	logo: {
		height: "50px",
	},
	Cross: {
		top: "20px",
		right: "20px",
		height: "30px",
		cursor: "pointer",
	},
	productPreview: {
		height: '140px',
		width: '140px',
		border: 0 
	},
	StackForm: {
		justifyContent: "center",
		alignItems: "center",
		padding: "40px",
	},
	title: {
		width: "80%",
		justifyContent: "center",
		padding: "10px",
	},
	StackButtons: {
		justifyContent: "center",
		alignItems: "center",
		padding: "50px",
	},
	Publish: {
		border: "1px solid #900C3F",
		width: "200px",
	},
	input: {
		display: "none",
	},
}));

const AddProduct = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const profileType = useSelector((state) => state.auth.profileType);
	const tokenId = useSelector((state) => state.auth.tokenId);
	const userId = useSelector((state) => state.sellerAgent.userId);
	const dokanName = useSelector((state) => state.sellerAgent.dokanName);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	let Type = ChooseType(category);
	const [type, setType] = useState("");
	let Item = ChooseItem(type);
	const [item, setItem] = useState("");
	
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const [weight, setWeight] = useState(0);
	const [time, setTime] = useState(0);
	
	const [file, setFile] = useState();


	const handleImageUpload = (e) => {
		let tempFile = e.target.files[0];
		const reader = new FileReader();
		reader.addEventListener(
			"load",
			function () {
				setFile(reader.result);
			},
			false
		);

		if (tempFile) {
			reader.readAsDataURL(tempFile);
		}
	};

	const dispatch = useDispatch();
	const onAddProduct = ( userId, dokanName, title, description, category, type, item, height, width, weight, time, file ) =>
		dispatch(actions.onAddProduct( userId, dokanName, title, description, category, type, item, height, width, weight, time, file ));

	const AddProductHandler = (event) => {
		event.preventDefault();
		onAddProduct( userId, dokanName, title, description, category, type, item, height, width, weight, time, file );
		// console.log();
		history.back();
	
	};

	console.log("title", title);
	console.log("description", description);
	console.log("category", category);
	console.log("type", type);
	console.log("item", item);
	console.log("height", height);
	console.log("width", width);
	console.log("weight", weight);
	console.log("time", time);

	return (
		<Card >
			<div className={classes.Card} spacing={2}>
					<Stack direction="row" spacing={2} className={classes.StackRow}>
						<NavLink to="/home" exact>
							<img src={`/Logo.png`} className={classes.logo} alt="logo" />
						</NavLink>
						<h3>Add Product</h3>
						<img className={classes.Cross} src={"/Icons/SignupClose.png"} onClick={props.closeModal} alt="cross" />
					</Stack>
					<Divider />
					<Stack direction="row" spacing={4} sx={{justifyContent: "center", pt: '5px'}}>
						<label htmlFor="addPhoto" >
							{file ? <img src={file} className={classes.productPreview}/> : null}
							<input onChange={handleImageUpload} accept="image/*" id="addPhoto" type="file" className={classes.input} />
							<IconButton color="primary" aria-label="upload picture" component="span" >
								<AddAPhoto />
							</IconButton>
						</label>
					</Stack>
					<Divider />
					<Stack spacing={2} className={classes.StackForm}>
						<Stack spacing={4} className={classes.title}>
							<TextField
								onChange={(e) => {
									setTitle(e.target.value);
								}}
								value={title}
								label="Title"
								id="Title"
								defaultValue=""
								placeholder="Add your title..."
								variant="filled"
								size="small"
							/>
							<TextField
								onChange={(e) => {
									setDescription(e.target.value);
								}}
								value={description}
								label="Description"
								id="Description"
								defaultValue=""
								placeholder="Write something..."
								variant="filled"
								size="small"
							/>
						</Stack>
						<Stack direction="row" spacing={2} className={classes.title}>
							<Autocomplete
								onChange={(e, v) => {
									setCategory(v);
								}}
								inputValue={category}
								onInputChange={(e, v) => {
									setCategory(v);
								}}
								id="Category"
								options={Categories}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Category" />
								)}
							/>
							<Autocomplete onChange={(e, v) => { setType(v); }} inputValue={type} onInputChange={(e, v) => { setType(v); }} id="Type" options={Type} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Type" />} />
							<Autocomplete onChange={(e, v) => { setItem(v); }} inputValue={item} onInputChange={(e, v) => { setItem(v); }} id="Item" options={Item} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Item" />} />
						</Stack>
						<Stack direction="row" spacing={2} className={classes.title}>
							<TextField label="Height-in-cm" variant="filled" size="small" onChange={(e) => { setHeight(e.target.value); }} value={height} />
							<TextField label="Width-in-cm" variant="filled" size="small" onChange={(e) => { setWidth(e.target.value); }} value={width} />
							<TextField label="Weight-in-grams" variant="filled" size="small" onChange={(e) => { setWeight(e.target.value); }} value={weight} />
							<TextField label="Preparation Time-in-hr" variant="filled" size="small" onChange={(e) => { setTime(e.target.value); }} value={time} />
						</Stack>
					</Stack>
					<Divider />
					<Stack direction="row" spacing={2} className={classes.StackForm}>
						<Button variant="contained" color={"secondary"} size="large" className={classes.Publish} startIcon={<Publish />} onClick={AddProductHandler} >Publish</Button>
					</Stack>
			</div>
		</Card>
	);
};

export default AddProduct;

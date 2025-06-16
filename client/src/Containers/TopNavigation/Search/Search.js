import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
// import { Link, useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../store/actions/index";

const Form = styled.form`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	
`;

const SearchField = styled.input`
	width: 45%;
	height: 35px;
	box-sizing: border-box;
	border: 2px solid brown;
	border-radius: 20px;
	outline: none;
	padding: 12px 0px 12px 10px;
	font-size: 15px;
	background-color: #ffe5ed;
	background-position: 5px 5px;
	background-repeat: no-repeat;
	/* transition: height 0.4s ease-in-out, background-position 0.4s ease-in-out;
	:focus {
		height: 40px;
		background-position: 10px 6px;
	} */
`;

const SearchContainer = () => {
	const [input, setInput] = useState("");
	const history = useHistory();

		const search = () => {
			const url = "http://localhost:5000/";
			axios
			.post(url, input)
			.then((response) => {
				console.log(response.data.expiresIn);
				try {
					if (response.data.tokedId) {
						const expirationDate = new Date(
							new Date().getTime() + response.data.expiresIn
						);
						// check if 200 / 400

						localStorage.setItem("token", response.data.tokedId);
						localStorage.setItem("expirationDate", expirationDate);
						localStorage.setItem("userId", response.data.userId);
						
						history.push("/Search");
						
					} else {
						history.push("/");
					}
				} catch (error) {
					history.push("/");
				}
			})
			.catch((err) => {
				
			});
		};

	return (
		<Form>
			<SearchField onChange={(e) => setInput(e.target.value)} value={input} />
			<IconButton size="small" color="secondary" aria-label="search" onClick={search}>
				<Search color="primary" fontSize="large" />
			</IconButton>
		</Form>
	);
};

export default SearchContainer;

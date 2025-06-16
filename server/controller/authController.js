const User = require("../model/Users");
const jwt = require("jsonwebtoken");
const { cookieRule, maxAge, secretJWTtoken } = require("../config/helper");
const Dokan = require("../model/Dokans");
const Person = require("../model/Persons");
const { userStatus } = require("../config/helper");
// Custom Functions
function createJWT(id) {
	return jwt.sign({ id }, secretJWTtoken, {
		expiresIn: 24 * 60 * 60 * 1000,
	});
}

function getStatus(id) {
	let status = 0;
	switch (id) {
		case "customer":
			status = userStatus.customer;
			break;
		case "seller":
			status = userStatus.seller;
			break;
		case "delivery":
			status = userStatus.delivery;
			break;
		case "admin":
			status = userStatus.admin;
			break;
		default:
			status = userStatus.customer;
			break;
	}
	return status;
}

function errorHandler(err) {
	let errors = { email: "", password: "", contact: "" };
	// Duplicate error
	if (err.code === 11000) {
		if (err.keyValue.email)
			errors.email = "Email Already Exists , Please enter another Email";
		if (err.keyValue.contact)
			errors.contact =
				"This Number is already Registered , Please try another Number";
		return errors;
	}

	//Incorrect Email
	if (err.message === "incorrect Email") {
		errors.email = "Email Address Dosen't Exists";
	}

	//Incorrect Password
	if (err.message === "incorrect Password") {
		errors.password = "Incorrect Password , Please try Again";
	}

	// Validation error
	if (err.message.includes("person validation failed")) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
		return errors;
	}

	if (err.message.includes("user validation failed")) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
		return errors;
	}

	return errors;
}

// Export Modules
module.exports.signupView = (req, res) => res.status(200).json("SignUp Page");

module.exports.loginView = (req, res) => res.status(200).json("Login Page");

module.exports.userSignup = async (req, res) => {
	// getting data
	let {
		firstName,
		lastName,
		email,
		password,
		status,
		phoneNumber,
		nid,
		gender,
		birthday,
	} = req.body;
	var newPerson;
	try {
		var tempDokan = null;
		try {
			// Create Person
			newPerson = await Person.addPerson(
				firstName,
				lastName,
				birthday,
				gender,
				Number(phoneNumber),
				tempDokan,
				(address = "address"),
				nid,
				email,
				status
			);
			// creat User
			const newUser = await User.addUser(
				email,
				password,
				Number(phoneNumber),
				getStatus(status),
				newPerson._id
			);
			if (newUser) {
				const token = createJWT(newUser._id);
				res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 2 });
				res.status(200).json({
					message: "User Signed in",
					userId: newUser._id,
					tokenId: token,
					expiresIn: maxAge,
					customerId: newPerson.customerId,
					sellerId: newPerson.sellerId,
					deliveryId: newPerson.deliveryId,
					email: email,
				});
			}
		} catch (error) {
			let result = Person.deleteById(newPerson._id);
			throw error;
		}
	} catch (error) {
		console.log(error);
		const errors = errorHandler(error);
		res.status(400).json({ errors });
	}
};

module.exports.userLogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.login(email, password);
		const person = await Person.getPerson(user.personid);
		if (user) {
			// Create JWT token
			const token = createJWT(user._id);
			// set cookie
			res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 2 });
			// send id , name
			console.log({
				customerId: person.customerId,
				sellerId: person.sellerId,
				deliveryId: person.deliveryId,
			});
			res.status(200).json({
				message: "User Found and Logind in",
				userId: user._id,
				tokenId: token,
				expiresIn: maxAge,
				customerId: person.customerId,
				sellerId: person.sellerId,
				deliveryId: person.deliveryId,
				email: email, // added email in the auth response object
			});
		}
	} catch (err) {
		console.log(err);
		const errors = errorHandler(err);
		console.log(errors);
		res.status(400).json({ errors });
	}
};

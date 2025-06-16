const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../model/Users");
// get user from Model

const requireAuth = (req, res, next) => {
	const authHeader = req.headers.token;
	const token = authHeader.split(" ")[1];
	if (token) {
		jwt.verify(token, config.secretJWTtoken, (err, decodedToken) => {
			if (err) {
				res.redirect("/login");
				next();
			} else {
				console.log(decodedToken);
				next();
			}
		});
	}
};

const checkUser = (req, res, next) => {
	const authHeader = req.headers.token;
	console.log(
		`LOG :: => ${req.get("origin")}::=>${req.method} => ${
			req.originalUrl
		} :: ${new Date()}`
	);
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		console.log(token);

		jwt.verify(token, config.secretJWTtoken, async (err, decodedToken) => {
			if (err) {
				res.locals.user = null;
				next();
			} else {
				let user = await User.getUser(decodedToken.id);
				res.locals.user = user;
				next();
			}
		});
	} else {
		res.locals.user = null;
		next();
	}
};

const requireGuest = (req, res, next) => {
	const authHeader = req.headers.token;
	const token = authHeader.split(" ")[1];
	if (token) {
		res.redirect("/user");
		next();
	} else next();
};
module.exports = { requireAuth, checkUser, requireGuest };

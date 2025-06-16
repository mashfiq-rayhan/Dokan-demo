import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		 mode: "dark",
		primary: {
			main: "#900C3D",
		},
		secondary: {
			main: "#F60F56",
		},
	},
});

export default theme;


// NEON THEME 

// const theme = createTheme({
// 	palette: {
// 		 mode: "dark",
// 		primary: {
// 			main: "#55FF00",
// 		},
// 		secondary: {
// 			main: "#50C217",
// 		},
// 	},
// });

// export default theme;



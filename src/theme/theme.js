// eslint-disable-next-line no-unused-vars
import { common, grey, red, teal } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const defautlTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(229, 9, 20)",
    },
    secondary: {
      main: "#ffffff",
    },
    tertiary: {
      main: "#0071eb",
    },
    error: {
      main: red[400],
    },
    text: {
      primary: common.white, // Set the text color to white
    },
    // common: {
    //   black: "#000000",
    // },
    // success:{
    //     main: teal[400]
    // },
    // breakpoints: {
    //     values: {
    //       xs: 0,
    //       sm: 720,
    //       md: 960,
    //       lg: 1100,
    //       xl: 1536,
    //     },
    //   },
  },
});

const theme = responsiveFontSizes(defautlTheme);

export default theme;

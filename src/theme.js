import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002C6E",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgba(0, 102, 255, 1)",
    },
  },
  typography: {
    fontfamily: ["'Montserrat', sans-serif"],
    h1: {
      fontSize: "50px",
      fontWeight: 700,
      // fontFamily : " 'Montserrat', "
      fontFamily: "sans-serif"
    },
    h2: {
      fontSize: "40px",
      fontWeight: 500,
      // fontFamily: "'Montserrat',",
      fontFamily: "sans-serif",
      color : "#00b894" ,
    },
    h3: {
      fontSize: "32px",
      fontWeight: 600,
      // fontFamily: "'Montserrat',",
      fontFamily: "sans-serif"
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      // fontFamily: "'Montserrat',",
      fontFamily: "sans-serif"
    },
    h5: {
      fontSize: "20px",
      // fontFamily: "'Montserrat',",
      fontWeight: 600,
      fontFamily: "sans-serif"
    },
    h6:{
      fontSize: "20px",
      fontWeight: 600,
      // fontFamily: "'Montserrat',",
      fontFamily: "sans-serif"
    },
    body: {
      fontSize: "16px",
      fontWeight: 700,
      // fontFamily: "'Montserrat',",
      fontFamily: "sans-serif"
    },
    p: {
      fontSize: "16px",
      // fontFamily: "'Montserrat',",
      fontFamily: "sans-serif" ,
      lineHeight : '2',
    },
    homepageSubhead:{
      // fontFamily: "'Montserrat',",
      fontFamily: "sans-serif"
    }
  },
});

export default theme;
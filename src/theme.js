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
    fontfamily: ["Open Sans", "sans-serif"],
    h1: {
      fontSize: "50px",
      fontWeight: 700,
      fontFamily : " 'Montserrat', "
      // fontFamily: "'Open Sans', sans-serif",
    },
    h2: {
      // fontSize: "40px",
      // fontWeight: 500,
      fontFamily: "'Open Sans', sans-serif",
      color : "#00b894" ,
    },
    h3: {
      fontSize: "22px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 600,
      fontfamily: "'Montserrat', sans-serif"
      // fontFamily: "'Open Sans', sans-serif",
    },
    h5: {
      fontSize: "18px",
      fontWeight: 600,
      fontFamily: "'Open Sans', sans-serif",
    },
    h6:{
      fontSize: "20px",
      fontWeight: 600,
      fontFamily : " 'Montserrat', "
      // fontFamily: "'Open Sans', sans-serif",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "'Open Sans', sans-serif",
    },
    p: {
      fontSize: "16px",
      fontFamily: "'Montserrat', sans-serif",
      // fontFamily: "'Open Sans', sans-serif",
      lineHeight : '2',
    },
  },
});

export default theme;

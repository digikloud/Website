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
      fontFamily : " 'Montserrat', "
    },
    h2: {
      fontSize: "40px",
      fontWeight: 500,
      fontFamily: "'Montserrat',",
      color : "#00b894"
    },
    h3: {
      fontSize: "32px",
      fontWeight: 600,
      fontFamily: "'Montserrat',"
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      fontFamily: "'Montserrat',"
    },
    h5: {
      fontSize: "20px",
      fontFamily: "'Montserrat',",
      fontWeight: 600
    },
    h6:{
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "'Montserrat',"
    },
    body: {
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "'Montserrat',"
    },
    p: {
      fontSize: "16px",
      fontFamily: "'Montserrat',",
      lineHeight : '2'
    },
    homepageSubhead:{
      fontFamily: "'Montserrat',"
    },
    navLink: {
      fontSize: "18px",
      fontFamily: "'Montserrat',"

    }
  },
});

export default theme;
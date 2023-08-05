// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';

// export default function ContactUs() {
//   const [state, setState] = React.useState({
//     open: false,
//     vertical: 'top',
//     horizontal: 'center',
//   });
//   const { vertical, horizontal, open } = state;

//   const handleClick = (newState) => () => {
//     setState({ ...newState, open: true });
//   };

//   const handleClose = () => {
//     setState({ ...state, open: false });
//   };

//   const buttons = (
//     <React.Fragment>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
//           Top-Center
//         </Button>
//       </Box>
//       <Grid container justifyContent="center">
//         <Grid item xs={6}>
//           <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
//             Top-Left
//           </Button>
//         </Grid>
//         <Grid item xs={6} textAlign="right">
//           <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
//             Top-Right
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
//             Bottom-Left
//           </Button>
//         </Grid>
//         <Grid item xs={6} textAlign="right">
//           <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
//             Bottom-Right
//           </Button>
//         </Grid>
//       </Grid>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
//           Bottom-Center
//         </Button>
//       </Box>
//     </React.Fragment>
//   );

//   return (
//     <Box sx={{ width: 500 }}>
//       {buttons}
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         onClose={handleClose}
//         message="I love snacks"
//         key={vertical + horizontal}
//       />
//     </Box>
//   );
// }

import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Button, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Margin } from "@mui/icons-material";

function ContactUs() {
  const [data, setData] = useState(null);
  const [SnackbarOpen, setSnackbarOpen] = useState(false);
  // const { vertical, horizontal, open } = SnackbarOpen;

  const validationSchema = yup.object({
    name: yup.string("Enter your name here").required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup.string("Enter your password").required("Message is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // var myHeaders = new Headers();
      // myHeaders.append("x-api-key", "FdTxP923nY5glD2FwwxHu9noioHSdKlF2kvXxy0R");

      // var requestOptions = {
      //   method: "POST",
      //   headers: myHeaders,
      //   redirect: "follow",
      // };

      // fetch(
      //   `https://api.digikloud.io/email?customerEmail=${values.email}&customerName=${values.name}&customerMessage=${values.message}`,
      //   requestOptions
      // )
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.log("error", error));
      resetForm();
      setSnackbarOpen(true);
      console.log(data);
    },
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="contact_us_page">
        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <h1 className="typography_heading">
            Partner with us for excellence in every endeavor
          </h1>
          <h3 className="homepageSubhead">
            Send us a message if you're ready to explore possibilities or
            request a demo.
          </h3>
        </Grid>
        <Grid item xs={12} md={8} className="contact_us_form">
          <form onSubmit={formik.handleSubmit} className="test">
            <label className="contactusFormLabel">Name</label>
            <TextField
              variant="outlined"
              id="name"
              name="name"
              // label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "30px",
                  background: "#f4f7f9",
                  border: "5px solid #f4f7f9",
                },
              }}
            />
            <label className="contactusFormLabel">Name</label>
            <TextField
              variant="outlined"
              id="name"
              name="name"
              // label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "30px",
                  background: "#f4f7f9",
                  border: "5px solid #f4f7f9",
                  
                },
              }}
            />
            <label className="contactusFormLabel">Email</label>
            <TextField
              variant="outlined"
              id="email"
              name="email"
              // label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "30px",
                  background: "#f4f7f9",
                  border: "5px solid #f4f7f9",
                },
              }}
            />
            <label className="contactusFormLabel">Message</label>
            <TextField
              // variant="outlined"
              id="message"
              name="message"
              // label="Message"
              type="message"
              multiline
              rows={3}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              fullWidth
              // style={{color:'red'}}
              InputProps={{
                style: {
                  borderRadius: "30px",
                  background: "#f4f7f9",
                  border: "5px solid #f4f7f9",
                },
              }}
            />
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: "#f4f7f9",
                color:'black',
                margin:'5px',
                // padding: "18px 36px",
                fontSize: "18px",
              }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
          <Snackbar
            open={SnackbarOpen}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Mail sent successfully !
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;

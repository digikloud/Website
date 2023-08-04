import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Button, TextField } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function ContactUs() {
  const [data, setData] = useState(null);
  const [SnackbarOpen , setSnackbarOpen] = useState(false);


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
    onSubmit: async (values,{ resetForm }) => {
      var myHeaders = new Headers();
      myHeaders.append("x-api-key", "FdTxP923nY5glD2FwwxHu9noioHSdKlF2kvXxy0R");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `https://api.digikloud.io/email?customerEmail=${values.email}&customerName=${values.name}&customerMessage=${values.message}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
        resetForm();
        setSnackbarOpen(true)
      console.log(data);
    },
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <div className="homeContainer contact_us_form">
      <form onSubmit={formik.handleSubmit} className="test">
        <TextField
          variant="outlined"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          variant="outlined"
          id="message"
          name="message"
          label="Message"
          type="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <Snackbar open={SnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Mail sent successfully !
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactUs;

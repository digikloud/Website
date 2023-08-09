import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import image from "../../assets/bookdemoImg.png";

function Bookdemo() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      setSnackbarOpen(true);
      console.log(data);
    },
  });
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <div className="homeContainer">
      <Grid container className="bookDemoContainer">
        <Grid item xs={12} md={6} className="costsaving_content_image">
          <img src={image} alt="bookedemo image" className="bookdemo_image" />
        </Grid>
        <Grid item xs={12} md={6} className="bookdemo_content">
          <h1 className="typography_heading">
            Ready to Create Something Extraordinary?
          </h1>
          <h3 className="homepageSubhead">
            Apply for our free trial and let our professionals ensure your
            journey is smooth and successful.
          </h3>
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: "#00b894",
                color: "white",
                margin: "5px",
                fontSize: "18px",
              }}
              variant="contained"
              onClick={handleClickOpen}
            >
              Book Demo
            </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} PaperProps={{
      style: {
        minHeight: '75vh',
        minWidth: '75vw',
        color:'#00b894',
        background:'#f4f7f9'
      },
    }}>
        <DialogTitle>Partner with us for excellence in every endeavor</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Send us a message if you're ready to explore possibilities or
            request a demo.
          </DialogContentText>
          <form onSubmit={formik.handleSubmit} className="test">
            {/* <label className="contactusFormLabel">Name</label> */}
            <TextField
            //   variant="outlined"
              id="name"
              name="name"
            //   label="Name"
              placeholder="Enter your name ..."
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
                  marginBottom : '10px'
                },
              }}
            />
            {/* <label className="contactusFormLabel">Name</label>
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
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "30px",
                  background: "#f4f7f9",
                  border: "5px solid #f4f7f9",
                  
                },
              }}
            /> */}
            {/* <label className="contactusFormLabel">Email</label> */}
            <TextField
              variant="outlined"
              id="email"
              name="email"
              placeholder="Enter your Email here..."
            //   label="Email"
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
                  marginBottom : '10px'
                },
              }}
            />
            {/* <label className="contactusFormLabel">Message</label> */}
            <TextField
              // variant="outlined"
              id="message"
              name="message"
              // label="Message"
              type="message"
              placeholder="Enter your message here..."
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
                  marginBottom : '10px'
                },
              }}
            />
            <Button
              style={{
                borderRadius: 15,
                backgroundColor: '#00b894',
                color:'white',
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
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity="success"
              sx={{ width: "100%" }}
            >
              Mail sent successfully !
            </Alert>
          </Snackbar>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'#757e8c'}}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Bookdemo;

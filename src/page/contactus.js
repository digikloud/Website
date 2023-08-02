import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button ,TextField } from '@mui/material';
import axios from 'axios';


function ContactUs() {

  const [data,setData] = useState(null);

  // useEffect(() => {
  //   axios.get(`https://kbwnsgu7w9.execute-api.ap-south-1.amazonaws.com/default/emailSendingDigikloudWebsite`,{
  //     headers: {
  //       'x-api-key': 'ctysJwTyOa6DLJYlGWDHtaDcb3O1G9ll9zxdfjCf',
  //     },
  //   }).then((response) => {
  //     setData(response.data);
  //   });
  // }, []);


    
  console.log(data)

    const validationSchema = yup.object({
        name: yup
          .string('Enter your name here')
          .required("Name is required")
        ,
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        message: yup
          .string('Enter your password')
          .required('Message is required'),
      });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert("clicked")
    },
  });

  return (
    <div className="homeContainer" >
      <form onSubmit={formik.handleSubmit}>
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
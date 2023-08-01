import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button ,TextField } from '@mui/material';
import { async } from 'q';



function ContactUs() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

    //   try {
    //     const response = await fetch('/api/send-email', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         recipient,
    //         subject,
    //         message,
    //       }),
    //     });
  
    //     const data = await response.json();
  
    //     if (response.ok) {
    //       alert('Email sent successfully!');
    //     } else {
    //       alert('Failed to send email: ' + data.error);
    //     }
    //   } catch (error) {
    //     console.error('Error sending email:', error);
    //   }

        // console.log(values.email)
      alert(JSON.stringify(values, null, 2));
    //   alert(JSON.stringify(values, null, 2).email);
    //   Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "username",
    //     Password : "password",
    //     To : 'them@website.com',
    //     From : "you@isp.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
    if(window.Email){
        window.Email.send({
            Host : "smtp.gmail.com",
            Username : "solutions@digikloudsystems.com",
            Password : "hdwupwozzcwhqppx",
            To : 'vignesh96987@gmail.com',
            From : "vignesh.digikloud@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
        // alert("Hi")
    }
    else{
        alert("Nope")
    }
    },
  });

  return (
    <div className="homeContainer">
      <form onSubmit={formik.handleSubmit}>
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
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;

// import React, { useState } from 'react';

// const EmailForm = () => {
//   const [recipient, setRecipient] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           recipient,
//           subject,
//           message,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Email sent successfully!');
//       } else {
//         alert('Failed to send email: ' + data.error);
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Recipient Email"
//         value={recipient}
//         onChange={(e) => setRecipient(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//       />
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send Email</button>
//     </form>
//   );
// };

// export default EmailForm;



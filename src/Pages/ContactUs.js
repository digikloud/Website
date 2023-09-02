import React from "react";
import Navbar from "../page/home/navbar";
import Footer from "../page/home/Footer";
import "./contactus.css";
import img01 from "../assets/contactusbg.webp";
import { Typography } from "@mui/material";
import ContactUsForm from "../page/home/contactus";
import { Helmet } from "react-helmet";

function ContactUs() {
  return (
    <>
    <Helmet>
      <title>Contact Us</title>
    </Helmet>
      <Navbar />
      <section className="contactuspage_homepage">
        <img src={img01} alt="digikloud company" />
        <header className="top_inner_text">
            <Typography variant="h1" >
                Let's Connect with US !
            </Typography>
        </header>
      </section>
      <section>
            <ContactUsForm />
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
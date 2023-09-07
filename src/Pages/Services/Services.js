import React from "react";
import "./services.css";
import Navbar from "../../page/home/navbar";
import background from "../../assets/Services/services_bg.webp";
import services01 from "../../assets/Services/services01.webp";
import { Fade, Slide } from "react-awesome-reveal";
import { Grid,  Typography } from "@mui/material";

function Services() {
  return (
    <>
      <Navbar />
      <section className="homepage">
        <img
          src={background}
          alt="Digikloud Company"
          className="services_background_image"
        />
        <header className="servicesTopHead">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">
              IoT for Smart Workplace Management
            </Typography>
          </Fade>
        </header>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={6} className="byop_image_container">
            <Slide direction="right" triggerOnce={true}>
              <img src={services01} alt="" className="nextgen_images" />
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slide triggerOnce={true} duration={1500}>
              <h1 className="typography_heading">Trusted Platform</h1>
              <Typography variant="p" align="justify">
                Empower your business with the limitless possibilities of the
                Internet of Things (IoT). At NextGen IoT Services, we specialize
                in providing comprehensive and innovative solutions that enable
                you to connect, manage, and leverage data from your devices like
                never before.
              </Typography>
            </Slide>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Services;

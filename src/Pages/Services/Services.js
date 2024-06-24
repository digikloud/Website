import React from "react";
import "./services.css";
import Navbar from "../../page/home/navbar";
// import background from "../../assets/Services/services_bg.webp";
import background from "../../assets/Services/services_bg01.jpg";

import services01 from "../../assets/Services/services01.webp";
import services02 from "../../assets/Services/services02.webp";
import services03 from "../../assets/Services/services03.webp";
import services04 from "../../assets/Services/services04.webp";
import services05 from "../../assets/Services/services05.webp";
import services06 from "../../assets/Services/services06.webp";
import services07 from "../../assets/Services/services07.webp";
import services08 from "../../assets/Services/services08.webp";
import services09 from "../../assets/Services/services09.webp";
import services10 from "../../assets/Services/services10.webp";
import services11 from "../../assets/Services/services11.webp";
import { Fade, Slide } from "react-awesome-reveal";
import { Grid, Typography } from "@mui/material";
import Footer from "../../page/home/Footer";
import { Helmet } from "react-helmet";

function Services() {
  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="DiGiKloud is dedicated to providing businesses with secure, dependable, and cutting-edge IoT solutions, empowering them to overcome challenges and achieve their goals. We offer comprehensive services, from analyzing your business needs to implementing and securing your IoT ecosystem."
        />
        <meta name="msvalidate.01" content="E7C8450433A1B04E4DB234FBBCB4D282" />
        <meta
          name="keywords"
          content="digikloud,iot,dasboard,waste management dashboard using iot,solar monitoring dashboard using iot,workplace management using iot"
        ></meta>
        <link rel="canonical" href="https://digikloud.io/services" />
        <meta property="og:type" content="website" />
      </Helmet>
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
            <Slide triggerOnce={true}>
              <img src={services01} alt="" className="nextgen_images" />
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slide direction="right" triggerOnce={true} duration={1500}>
              <Typography variant="h3" className="typography_heading">Trusted Platform</Typography>
              <article className="iotServicesContent">
                <Typography variant="p" align="justify">
                  Unleash the limitless possibilities of the Internet of Things
                  (IoT) for your business. At NextGen IoT Services, we're your
                  one-stop shop for comprehensive and innovative solutions that
                  enable you to connect, manage, and leverage data from your
                  devices like never before.
                </Typography>
              </article>
            </Slide>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12} lg={12}>
            <Fade direction="left" duration={2000} triggerOnce={true}>
              <Typography
                variant="h3"
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Why Choose IoT Services?
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} className="our_iot_service">
            <Slide triggerOnce={true}>
              <Typography variant="h3" className="typography_heading">End-to-End Solutions</Typography>
              <Typography variant="p">
                We offer a complete suite of IoT services, from device
                connectivity to data analysis, to help you optimize operations
                and gain valuable insights.
              </Typography>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} className="byop_image_container">
            <Slide direction="right" triggerOnce={true}>
              <img src={services08} alt="" className="nextgen_images" />
            </Slide>
          </Grid>

          <Grid item xs={12} md={6} className="byop_image_container">
            <Slide triggerOnce={true}>
              <img src={services09} alt="" className="nextgen_images" />
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} className="our_iot_service">
            <Slide direction="right" triggerOnce={true} duration={1500}>
              <Typography variant="h3" className="typography_heading">Scalable Infrastructure</Typography>
              <Typography variant="p">
                Our services are designed to scale with you, ensuring your IoT
                ecosystem can expand seamlessly.
              </Typography>
            </Slide>
          </Grid>

          <Grid item xs={12} md={6} className="our_iot_service">
            <Slide triggerOnce={true}>
              <Typography variant="h3" className="typography_heading">Security First</Typography>
              <Typography variant="p">
                We prioritize the security of your data and devices, actively
                employing the latest encryption and authentication measures.
              </Typography>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} className="byop_image_container">
            <Slide direction="right" triggerOnce={true}>
              <img src={services10} alt="" className="nextgen_images" />
            </Slide>
          </Grid>

          <Grid item xs={12} md={6} className="byop_image_container">
            <Slide triggerOnce={true}>
              <img src={services11} alt="" className="nextgen_images" />
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} className="our_iot_service">
            <Slide direction="right" triggerOnce={true} duration={1500}>
              <Typography variant="h3" className="typography_heading">Expertise and Experience</Typography>
              <Typography variant="p">
                Our team of IoT experts provides hands-on guidance throughout
                your entire IoT journey.
              </Typography>
            </Slide>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12} lg={12}>
            <Fade direction="left" duration={2000} triggerOnce={true}>
              <Typography
              variant="h3"
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our Services
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Slide triggerOnce={true}>
              <article className="services_container">
                <img src={services02} alt="" className="services_images" />
                <article>
                  <Typography variant="h6">Device Connectivity</Typography>
                  <Typography variant="p">
                    Seamlessly integrate your devices into the IoT ecosystem for
                    unprecedented convenience and efficiency, enabling remote
                    monitoring and insightful data analysis.
                  </Typography>
                </article>
              </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Slide triggerOnce={true} direction="right">
              <article className="services_container">
                <img src={services03} alt="" className="services_images" />
                <article>
                  <Typography variant="h6">Personal Data Security</Typography>
                  <Typography variant="p">
                    Unlock the potential of data by integrating information from
                    various sources. Empower yourself with a holistic view of
                    your operations, enabling more informed decision-making.
                  </Typography>
                </article>
              </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Slide triggerOnce={true}>
              <article className="services_container">
                <img src={services04} alt="" className="services_images" />
                <article>
                  <Typography variant="h6">
                    Data Storage and Visualization
                  </Typography>
                  <Typography variant="p">
                    Unlock the power of predictive analytics and actionable
                    insights. Our scalable cloud solutions and visualization
                    tools turn complex data into clear understanding.
                  </Typography>
                </article>
              </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Slide triggerOnce={true} direction="right">
              <article className="services_container">
                <img src={services05} alt="" className="services_images" />
                <article>
                  <Typography variant="h6">API Development</Typography>
                  <Typography variant="p">
                    Empower a thriving ecosystem of connected devices and
                    third-party applications with our powerful APIs that drive
                    seamless communication.
                  </Typography>
                </article>
              </article>
            </Slide>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Slide triggerOnce={true}>
              <article className="services_container">
                <img src={services06} alt="" className="services_images" />
                <article>
                  <Typography variant="h6">
                    Alert & Notification System
                  </Typography>
                  <Typography variant="p">
                    Never miss a critical moment. Stay in the loop with
                    real-time alerts. Customize your notification triggers and
                    receive updates through your preferred channels.
                  </Typography>
                </article>
              </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Slide triggerOnce={true} direction="right">
              <article className="services_container">
                <img src={services07} alt="" className="services_images" />
                <article>
                  <Typography variant="h6">Reports and Analytics</Typography>
                  <Typography variant="p">
                    Uncover data-driven insights that empower informed
                    decisions. Our detailed reports and analytics guide you to
                    optimize processes and achieve excellence, ultimately
                    maximizing your ROI.
                  </Typography>
                </article>
              </article>
            </Slide>
          </Grid>
        </Grid>
      </section>

      <Footer />
    </>
  );
}

export default Services;

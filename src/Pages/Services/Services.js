import React from "react";
import "./services.css";
import Navbar from "../../page/home/navbar";
import background from "../../assets/Services/services_bg.webp";
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

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12} lg={12}>
            <Fade direction="left" duration={2000} triggerOnce={true}>
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Why Choose IoT Services?
              </h1>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
          <Slide triggerOnce={true}>
            <h1 className="typography_heading">End-to-End Solutions</h1>
            <Typography variant="p">
              From device connectivity to data analysis, we offer a complete
              suite of IoT services to address all your needs
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
          <Grid item xs={12} md={6}>
          <Slide direction="right" triggerOnce={true} duration={1500}>
            <h1 className="typography_heading">Scalable Infrastructure</h1>
            <Typography variant="p">
            Our services are designed to accommodate growth, ensuring your IoT ecosystem can expand seamlessly.
            </Typography>
            </Slide>
          </Grid>

          <Grid item xs={12} md={6}>
          <Slide triggerOnce={true}>
            <h1 className="typography_heading">Security First</h1>
            <Typography variant="p">
            We prioritize the security of your data and devices, implementing the latest encryption and authentication measures.
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
          <Grid item xs={12} md={6}>
          <Slide direction="right" triggerOnce={true} duration={1500}>
            <h1 className="typography_heading">Expertise and Experience</h1>
            <Typography variant="p">
            Our team of IoT experts brings years of experience to the table, guiding you through every step of the IoT journey.
            </Typography>
            </Slide>
          </Grid>
          
        </Grid>
        
      </section>


      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12} lg={12}>
            <Fade direction="left" duration={2000} triggerOnce={true}>
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our Services
              </h1>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
          <Slide triggerOnce={true} >
            <article className="services_container">
              <img src={services02} alt="" className="services_images" />
              <article>
                
                <Typography variant="h6">Device Connectivity</Typography>
                <Typography variant="p">
                  Seamlessly integrate your devices into the IoT ecosystem.
                  Monitor and control them remotely for unprecedented
                  convenience and efficiency.
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
                  various sources. Gain a holistic view of your operations for
                  more informed decision-making.
                </Typography>
              </article>
            </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
          <Slide triggerOnce={true} >
            <article className="services_container">
              <img src={services04} alt="" className="services_images" />
              <article>
                <Typography variant="h6">
                  Data Storage and Visualization
                </Typography>
                <Typography variant="p">
                  Store and visualize your data with ease. Our scalable cloud
                  solutions and visualization tools turn complex data into
                  actionable insights.
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
                  Foster collaboration and innovation by developing APIs that
                  enable seamless communication between devices and third-party
                  applications.
                </Typography>
              </article>
            </article>
            </Slide>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
          <Slide triggerOnce={true} >
            <article className="services_container">
              <img src={services06} alt="" className="services_images" />
              <article>
                <Typography variant="h6">
                  Alert & Notification System
                </Typography>
                <Typography variant="p">
                  Stay in the loop with real-time alerts. Set custom thresholds
                  and receive notifications through your preferred channels.
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
                  Make informed decisions based on data-driven insights. Our
                  detailed reports and analytics help you optimize processes and
                  drive excellence.
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

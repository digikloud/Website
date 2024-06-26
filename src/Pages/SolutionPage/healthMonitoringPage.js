import { Grid, Typography } from "@mui/material";
import React from "react";
import "./solutionpage.css";
import dashboard from "../../assets/health_dashboard_ref.gif";
import healthdetails from "../../assets/health_details.png";
import remote_monitoring from "../../assets/remote_monitoring.png";
import Navbar from "../../page/home/navbar";
import smartHospital from "../../assets/smart hospital.png";
import Footer from "../../page/home/Footer";
import { Helmet } from "react-helmet";
import { Fade, Slide } from "react-awesome-reveal";

function Healthpage() {
  return (
    <div>
      <Helmet>
        <title>Helath Management Solution</title>
        <meta
          name="description"
          content="DiGiKloud is dedicated to providing businesses with secure, dependable, and cutting-edge IoT solutions, empowering them to overcome challenges and achieve their goals. We offer comprehensive services, from analyzing your business needs to implementing and securing your IoT ecosystem."
        />
        <meta name="msvalidate.01" content="E7C8450433A1B04E4DB234FBBCB4D282" />
        <meta
          name="keywords"
          content="digikloud,iot,dasboard,waste management dashboard using iot,solar monitoring dashboard using iot,workplace management using iot"
        ></meta>
        <link rel="canonical" href="https://digikloud.io/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Grid container className="solution_container">
        <Grid className="solution_page_top_image">
          <div className=" health_text">
            <Fade triggerOnce={true} duration={2000} direction="up">
              <h1 className="solutionTopTag">
                Connecting Health for a Smarter Future IoT in Healthcare
                Management
              </h1>
            </Fade>
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid md={6} xs={12}>
            <Slide triggerOnce={true}>
              <h1 className="typography_heading_solution">
                Healthcare Management
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  IoT technology is revolutionizing healthcare management by
                  connecting devices for remote monitoring, data analysis, and
                  automation, ultimately improving patient outcomes, reducing
                  costs, and enhancing operational efficiency.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <img
              src={healthdetails}
              alt="health managemnt iot"
              className="images_rightside"
            /></Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <img
                src={remote_monitoring}
                alt="health managemnt iot"
                className="images"
              />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <h1 className="typography_heading_solution">
              Remote Patient Monitoring
            </h1>
            <div className="content_text">
              <Typography variant="p">
                IoT devices such as wearables and sensors collect and transmit
                patient health data to healthcare providers, enabling remote
                monitoring, real-time issue detection, and prompt intervention
                by healthcare professionals.
              </Typography>
            </div></Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <h1 className="typography_heading_solution">
                Smart Hospitals and Facilities
              </h1>

              <div className="content_text">
                <Typography variant="p">
                  IoT technology enables smart hospitals by integrating
                  interconnected devices and systems. This automation optimizes
                  resource allocation, streamlines routine tasks, and enhances
                  the patient experience.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <img
              src={smartHospital}
              alt="health managemnt iot"
              className="images_rightside"
            /></Slide>
          </Grid>
        </Grid>
        <Grid container className=" dashboardpage">
          <Fade triggerOnce={true} duration={2000} direction="up">
            <Grid item md={12} xs={12}>
              <h1 className="typography_heading_solution">
                Data Analytics and Predictive Insights
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  The vast data from IoT devices in healthcare allows for
                  advanced analytics and predictive insights, aiding in
                  real-time monitoring, treatment optimization, and proactive
                  patient care for improved outcomes and efficient healthcare
                  management.
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} xs={12}>
              <img
                src={dashboard}
                alt="iot helath management dahboard"
                className=" dashboard"
              />
            </Grid>
          </Fade>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Healthpage;

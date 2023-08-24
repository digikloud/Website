import React from "react";
import Navbar from "../../page/home/navbar";
import { Grid, Typography } from "@mui/material";
import workplace from "../../assets/workplace01.png";
import smart_workplace_sensors from "../../assets/smart_workplace_sensors.png";
import workplace_security from "../../assets/workplace_security.png";
import { Helmet } from "react-helmet";
import Footer from "../../page/home/Footer";

function Workplacemanagement() {
  return (
    <div>
      <Helmet>
        <title>Workplace IoT Dashboard</title>
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
        <Grid className="solution_workplace_page_top_image">
          <div className="worlplace_solution_home_head  ">
            <h1 className="solutionTopTag">
              IoT for Smart Workplace Management
            </h1>
          </div>
        </Grid>
        <Grid container className="solution_page_detail" >
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Smart Workplace Management
            </h1>
            <div className="content_text">
              <Typography variant="p">
                Office occupancy using IoT (Internet of Things) is a modern
                approach that leverages connected devices to monitor and manage
                the utilization of office spaces in real-time. IoT technology
                enables the collection and analysis of data, which helps
                businesses optimize office layouts, energy consumption, and
                overall efficiency. Here's a breakdown of how IoT can be
                utilized for office occupancy management.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={workplace} alt="workplace dashboard iot" className="images" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">Smart Sensors</h1>
            <img src={smart_workplace_sensors} alt="workplace dashboard iot"  className="images" />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="content_text">
              <Typography variant="p">
                IoT-enabled occupancy sensors can be placed throughout the
                office to detect the presence of people in various areas. These
                sensors can use different technologies, such as infrared,
                ultrasonic, or camera-based systems, to detect movement and
                occupancy accurately.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Real-time Data Collection & Data Analytics
            </h1>
            <div className="content_text">
              <Typography variant="p">
                The sensors continuously gather data on office occupancy,
                providing real-time insights into which areas are being used,
                when they are most active, and which spaces are vacant.
                Collected data is sent to a central platform or cloud for
                analysis. Advanced analytics can help identify patterns, peak
                hours, and trends in office usage, allowing management to make
                informed decisions about space optimization and resource
                allocation.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">Safety and Security</h1>
            <img src={workplace_security} alt="workplace dashboard iot"  className="images" />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="content_text">
              <Typography variant="p">
                IoT can enhance office security by detecting unauthorized access
                or unusual patterns of occupancy. In case of emergencies,
                real-time data can help evacuation procedures and ensure that
                all areas are evacuated.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Workplacemanagement;

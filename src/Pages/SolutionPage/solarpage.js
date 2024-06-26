import {  Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import "./solutionpage.css";
import solarenergy from "../../assets/solar energy management.png";
import iotsolar from "../../assets/IoTsolar.png";
import Navbar from "../../page/home/navbar";
import remoteMonitoring from "../../assets/remote monitoring solar.png";
import energyMonitoring from "../../assets/energy monitoring.png";
import solarDashboard from "../../assets/solar_dashboard_ref.gif";
import Footer from "../../page/home/Footer";
import { Fade, Slide } from "react-awesome-reveal";

function Solarpage() {
  const [button, setButton] = useState("livedemo_btn_home");

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScrollEvent = (e) => {
    if (window.scrollY > 700) {
      setButton("livedemo_btn");
    } else {
      setButton("livedemo_btn_home");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Solar Monitoring Solution</title>
        <meta
          name="description"
          content="Solar monitoring using IoT (Internet of Things) involves leveraging IoT technology to monitor, analyze, and manage solar energy systems in a more intelligent and connected manner."
        />
        <meta name="msvalidate.01" content="E7C8450433A1B04E4DB234FBBCB4D282" />
        <meta
          name="keywords"
          content="digikloud,iot,dasboard,solar monitoring dashboard using iot,solar dashboard,solar monitoring"
        ></meta>
        <link
          rel="canonical"
          href="https://digikloud.io/solution/solarmonitoring"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Grid container className="companyPagecontainer">
        <Grid className="solution_solar_page_top_image">
          <div className="solution_home_head ">
            <Fade triggerOnce={true} duration={2000} direction="up">
              <Typography variant="h1" className="solutionTopTag">
                Step into the Solar Revolution with Digikloud's IoT-enabled
                Solutions
              </Typography>
            </Fade>
          </div>
        </Grid>
        {/* <div className={`${button}`}>
          <Button
            target="_blank"
            href="https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d"
            variant="outlined"
            style={{
              backgroundColor: "#00b894",
              fontSize: "18px",
              color: "white",
            }}
          >
            Live Demo
          </Button>
        </div> */}
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <Typography variant="h3" className="typography_heading_solution">
                Solar Energy Management
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  Integrating Internet of Things (IoT) technology with solar
                  energy management is revolutionizing the global shift towards
                  sustainability by enabling more efficient utilization,
                  monitoring, and control of clean, abundant solar power systems
                  to reduce carbon emissions.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <img
                src={solarenergy}
                alt="iot solar dahboard"
                className="images_rightside"
              />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
          <Slide triggerOnce={true}>
            <img src={iotsolar} alt="iot solar dahboard" className="images" />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <Typography variant="h3" className="typography_heading_solution">
              IoT-enabled Solar Energy Monitoring
            </Typography>
            <div className="content_text">
              <Typography variant="p">
                IoT devices, such as sensors and smart meters, gather real-time
                data on solar panel performance and environmental conditions,
                sending it wirelessly to a central system for analysis, which
                enables operators to swiftly address issues and enhance system
                efficiency and maintenance.
              </Typography>
            </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
          <Slide triggerOnce={true}>
            <Typography variant="h3" className="typography_heading_solution">
              Remote Monitoring and Predictive Maintenance
            </Typography>
            <div className="content_text">
              <Typography variant="p">
                IoT technology enables remote monitoring of solar energy systems
                with real-time data access, while predictive maintenance
                algorithms detect potential issues, preventing downtime,
                reducing costs, and extending equipment lifespan.
              </Typography>
            </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <img
              src={remoteMonitoring}
              alt="solar iot"
              className="images_rightside"
            />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
          <Slide triggerOnce={true}>
            <img
              src={energyMonitoring}
              alt="iot solar dahboard"
              className="images"
            />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <Typography variant="h3" className="typography_heading_solution">
              Energy Monitoring and Analytics
            </Typography>
            <div className="content_text">
              <Typography variant="p">
                IoT provides real-time data on solar energy production,
                consumption, and storage, facilitating visualization of
                performance and usage patterns crucial for implementing
                cost-saving and efficiency optimization strategies.
              </Typography>
            </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="dashboardpage">
        <Fade triggerOnce={true} duration={2000} direction="up">
          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="typography_heading_solution">
              Digikloud Solar Energy Management Dashboard
            </Typography>
            <div className="content_text">
              <Typography variant="p">
                Digikloud's advanced analytics engine provides deep insights
                into your energy usage patterns. Analyze historical data,
                identify peak demand periods, and optimize energy consumption
                based on real-time and forecasted information. Discover
                opportunities for energy savings and efficiency improvements.
              </Typography>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <img
              src={solarDashboard}
              alt="iot solar dahboard"
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

export default Solarpage;

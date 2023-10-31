import { Button, Grid, Typography } from "@mui/material";
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
import { Slide } from "react-awesome-reveal";

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
            <Slide triggerOnce={true} direction="up">
              <h1 className="solutionTopTag">
                Step into the Solar Revolution with Digikloud's IoT-enabled
                Solutions
              </h1>
            </Slide>
          </div>
        </Grid>
        <div className={`${button}`}>
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
        </div>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true} >
            <h1 className="typography_heading_solution">
              Solar Energy Management
            </h1>
            <div className="content_text">
              <Typography variant="p">
                Solar energy has emerged as a key player in the global shift
                towards sustainable and renewable energy sources. As the world
                recognizes the importance of reducing carbon emissions and
                combatting climate change, solar power offers a clean and
                abundant alternative. To further optimize solar energy
                generation and consumption, the integration of Internet of
                Things (IoT) technology has revolutionized solar energy
                management. This article explores how IoT is transforming solar
                energy management, enabling more efficient utilization,
                monitoring, and control of solar power systems.
              </Typography>
            </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right" >
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
            <h1 className="typography_heading_solution">
              IoT-enabled Solar Energy Monitoring
            </h1>
            <img src={iotsolar} alt="iot solar dahboard" className="images" />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="content_text">
              <Typography variant="p">
                IoT devices, such as sensors and smart meters, can be deployed
                in solar power systems to gather real-time data on solar panel
                performance, energy production, and environmental conditions.
                This data can be transmitted wirelessly to a central management
                system for analysis and monitoring. By collecting and analyzing
                this data, operators can identify and rectify issues promptly,
                leading to increased overall system efficiency and improved
                maintenance.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Remote Monitoring and Predictive Maintenance
            </h1>
            <div className="content_text">
              <Typography variant="p">
                IoT technology enables remote monitoring of solar energy
                systems, allowing operators to access real-time performance data
                from anywhere. By utilizing predictive maintenance algorithms,
                IoT systems can detect anomalies or potential failures in the
                system components. This proactive approach helps prevent
                downtime, reduces maintenance costs, and extends the lifespan of
                solar panels and other equipment
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={remoteMonitoring} alt="solar iot" className="images_rightside" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Energy Monitoring and Analytics
            </h1>
            <img
              src={energyMonitoring}
              alt="iot solar dahboard"
              className="images"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="content_text">
              <Typography variant="p">
                With IoT, solar energy system owners and operators gain access
                to comprehensive energy monitoring and analytics tools.
                Real-time data on energy production, consumption, and storage
                can be visualized and analyzed to gain insights into system
                performance, energy usage patterns, and potential areas for
                improvement. These insights can inform energy optimization
                strategies, leading to increased cost savings and overall energy
                efficiency
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail dashboardpage">
          <Grid item md={12} xs={12}>
            <h1 className="typography_heading_solution">
              Digikloud Solar Energy Management Dashboard
            </h1>
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
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Solarpage;

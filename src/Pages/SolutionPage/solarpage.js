import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./solutionpage.css";
import healthcare from "../../assets/HealthCare.png";
import solarenergy from "../../assets/solar energy management.png";
import iotsolar from "../../assets/IoTsolar.png";
import Navbar from "../../page/home/navbar";
import remoteMonitoring from "../../assets/remote monitoring solar.png";
import energyMonitoring from "../../assets/energy monitoring.png"
import Footer from "../../page/home/Footer";

function Solutionpage() {
  return (
    <div>
      <Navbar />
      <Grid container className="solution_container" >
        <Grid className="solution_solar_page_top_image">
          <div className="solution_home_head">
            <h1 className="solutionTopTag">
            Step into the Solar Revolution with Digikloud's IoT-enabled Solutions
            </h1>
            {/* <h1 >
              IoT in Healthcare Management
            </h1> */}
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12} >  
            <h1 className="typography_heading_solution" >Solar energy management </h1>
          </Grid>
          <Grid md={6} xs={12} >
          <Typography variant="p" className="solutionpagecontent">
          Solar energy has emerged as a key player in the global shift towards sustainable and renewable energy sources. As the world recognizes the importance of reducing carbon emissions and combatting climate change, solar power offers a clean and abundant alternative. To further optimize solar energy generation and consumption, the integration of Internet of Things (IoT) technology has revolutionized solar energy management. This article explores how IoT is transforming solar energy management, enabling more efficient utilization, monitoring, and control of solar power systems.
            </Typography>
          </Grid>
          <Grid  md={6} xs={12}>
          <img src={solarenergy} className="images" />
          </Grid>
        </Grid> 
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>  
            <h1 className="typography_heading_solution">IoT-enabled Solar Energy Monitoring</h1>
          </Grid>
          <Grid  md={6} xs={12}>
          <img src={iotsolar} className="images" />
          </Grid>
          <Grid md={6} xs={12}>
          <Typography variant="p" className="solutionpagecontent">
          IoT devices, such as sensors and smart meters, can be deployed in solar power systems to gather real-time data on solar panel performance, energy production, and environmental conditions. This data can be transmitted wirelessly to a central management system for analysis and monitoring. By collecting and analyzing this data, operators can identify and rectify issues promptly, leading to increased overall system efficiency and improved maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>  
            <h1 className="typography_heading_solution">Remote Monitoring and Predictive Maintenance</h1>
          </Grid>
          <Grid md={6} xs={12}>
          <Typography variant="p" className="solutionpagecontent">
          IoT technology enables remote monitoring of solar energy systems, allowing operators to access real-time performance data from anywhere. By utilizing predictive maintenance algorithms, IoT systems can detect anomalies or potential failures in the system components. This proactive approach helps prevent downtime, reduces maintenance costs, and extends the lifespan of solar panels and other equipment
            </Typography>
          </Grid>
          <Grid  md={6} xs={12}>
          <img src={remoteMonitoring} className="images" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>  
            <h1 className="typography_heading_solution">Energy Monitoring and Analytics</h1>
          </Grid>
          <Grid  md={6} xs={12}>
          <img src={energyMonitoring} className="images" />
          </Grid>
          <Grid md={6} xs={12}>
          <Typography variant="p" className="solutionpagecontent">
          With IoT, solar energy system owners and operators gain access to comprehensive energy monitoring and analytics tools. Real-time data on energy production, consumption, and storage can be visualized and analyzed to gain insights into system performance, energy usage patterns, and potential areas for improvement. These insights can inform energy optimization strategies, leading to increased cost savings and overall energy efficiency
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>  
            <h1 className="typography_heading_solution">Digikloud Solar Energy Management Dashboard</h1>
          </Grid>
          <Grid item md={6} xs={12}>
          {/* <img src={energyMonitoring} className="images" /> */}
          </Grid>
          <Grid item md={6} xs={12}>
          <Typography variant="p" className="solutionpagecontent">
          Digikloud's advanced analytics engine provides deep insights into your energy usage patterns. Analyze historical data, identify peak demand periods, and optimize energy consumption based on real-time and forecasted information. Discover opportunities for energy savings and efficiency improvements.            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default Solutionpage;

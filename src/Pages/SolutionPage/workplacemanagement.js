import React from "react";
import Navbar from "../../page/home/navbar";
import { Grid, Typography } from "@mui/material";

function Workplacemanagement() {
  return (
    <div>
      <Navbar />
      <Grid container className="solution_container">
        <Grid className="solution_solar_page_top_image">
          <div className="solution_home_head">
            <h1 className="solutionTopTag">
              Step into the Solar Revolution with Digikloud's IoT-enabled
              Solutions
            </h1>
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">
              Smart Workplace Management
            </h1>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="p" className="solutionpagecontent">
              Office occupancy using IoT (Internet of Things) is a modern
              approach that leverages connected devices to monitor and manage
              the utilization of office spaces in real-time. IoT technology
              enables the collection and analysis of data, which helps
              businesses optimize office layouts, energy consumption, and
              overall efficiency. Here's a breakdown of how IoT can be utilized
              for office occupancy management.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            {/* <img src={solarenergy} className="images" /> */}
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">Smart Sensors</h1>
          </Grid>
          <Grid item md={6} xs={12}>
            {/* <img src={iotsolar} className="images" /> */}
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="p" className="solutionpagecontent">
              IoT-enabled occupancy sensors can be placed throughout the office
              to detect the presence of people in various areas. These sensors
              can use different technologies, such as infrared, ultrasonic, or
              camera-based systems, to detect movement and occupancy accurately.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">
              Real-time Data Collection & Data Analytics
            </h1>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="p" className="solutionpagecontent">
              The sensors continuously gather data on office occupancy,
              providing real-time insights into which areas are being used, when
              they are most active, and which spaces are vacant. Collected data
              is sent to a central platform or cloud for analysis. Advanced
              analytics can help identify patterns, peak hours, and trends in
              office usage, allowing management to make informed decisions about
              space optimization and resource allocation.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            {/* <img src={iotsolar} className="images" /> */}
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">Safety and Security</h1>
          </Grid>
          <Grid item md={6} xs={12}>
            {/* <img src={iotsolar} className="images" /> */}
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="p" className="solutionpagecontent">
              IoT can enhance office security by detecting unauthorized access
              or unusual patterns of occupancy. In case of emergencies,
              real-time data can help evacuation procedures and ensure that all
              areas are evacuated.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Workplacemanagement;

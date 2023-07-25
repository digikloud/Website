import { Grid, Typography } from "@mui/material";
import React from "react";
import resilence from "../../assets/resilience in iot (21).png";

function HomeAbout() {
  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="HomeAbout" >
        {/* <Grid item xs={12} md={12} className="homeHead">
          <h1 className="typography_heading">
            Resilience in IoT platform for your Business
          </h1>
        </Grid> */}
        <Grid item xs={12} md={6} >
        <h1 className="typography_heading">
            Resilience in IoT platform for your Business
          </h1>
          <Typography variant="p" align="justify">
            The Internet of Things (IoT) has revolutionized the way businesses
            operate, providing unprecedented connectivity and data-driven
            insights. However, resilience is paramount for an IoT platform to
            truly deliver value. Resilience ensures the stability, security, and
            continuous operation of your IoT infrastructure, safeguarding your
            business from disruptions and enabling long-term success.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
          <img src={resilence} height="400px" width="400px" />
        </Grid>
        <Grid item xs={12} md={12} className="projects_data">
          <div className="projectcard">
            <Typography variant="h1">20+</Typography>
            <Typography className="homepageSubhead">Projects Delivered</Typography>
          </div>
          <div className="projectcard">
            <Typography variant="h1">20+</Typography>
            <Typography className="homepageSubhead">Operating countries</Typography>
          </div>
          <div className="projectcard">
            <Typography variant="h1">20+</Typography>
            <Typography className="homepageSubhead">No of data getting published</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeAbout;

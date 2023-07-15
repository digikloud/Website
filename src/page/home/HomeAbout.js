import { Grid, Typography } from "@mui/material";
import React from "react";
import resilence from '../../assets/Resilience in IoT.png';

function HomeAbout() {
  return (
    <div>
      <Grid container className="HomeAbout">
        <Grid item sm={12} className="homeHead">
          <Typography  mt={'25px'} variant="h2" >Resilience in IoT platform for your</Typography> 
          <Typography variant="h2">Business</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6} >
         <div className="gfh">
         <Typography variant="p" align="justify">
         The Internet of Things (IoT) has revolutionized the way businesses operate, providing unprecedented connectivity and data-driven insights. However, resilience is paramount for an IoT platform to truly deliver value. Resilience ensures the stability, security, and continuous operation of your IoT infrastructure, safeguarding your business from disruptions and enabling long-term success.
          </Typography>
         </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}  className="testt">
          <img src={resilence} height='400px' width='500px'/>
        </Grid>
        <Grid item sm={12} md={12} lg={12} className="projects_data">
          <div className="projectcard">
            <Typography variant="h1">20+</Typography>
            <Typography>Projects Delivered</Typography>
          </div>
          <div className="projectcard">
          <Typography variant="h1">20+</Typography>
            <Typography>Operating countries</Typography>
          </div>
          <div className="projectcard">
          <Typography variant="h1">20+</Typography>
            <Typography>No of data getting published</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeAbout;

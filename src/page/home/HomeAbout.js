import { Grid, Typography } from "@mui/material";
import React from "react";
import resilence from '../../assets/Resilience in IoT.png';
import resilence1 from "../../assets/resilience in iot (2).png";

function HomeAbout() {
  return (
    <div>
      {/* <Grid container className="HomeAbout">
        <Grid item sm={12} className="homeHead">
          <Typography  mt={'25px'} variant="h2" >Resilience in IoT platform for your</Typography> 
          <Typography variant="h2">Business</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6} style={{background:'grey'}}>
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
      </Grid> */}
      <Grid container spacing={2} className="HomeAbout">
        <Grid item xs={12} md={12}  className="homeHead" >
          {/* <Typography  mt={'25px'} variant="h2" >Resilience in IoT platform for your</Typography> 
          <Typography variant="h2">Business</Typography> */}
          <h1 className="typography_heading">Resilience in IoT platform for your Business</h1>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="p" align="justify" >
         The Internet of Things (IoT) has revolutionized the way businesses operate, providing unprecedented connectivity and data-driven insights. However, resilience is paramount for an IoT platform to truly deliver value. Resilience ensures the stability, security, and continuous operation of your IoT infrastructure, safeguarding your business from disruptions and enabling long-term success.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
          <img src={resilence1}  height='400px' width='400px' />
        </Grid>
        <Grid item xs={12} md={12} className="projects_data"> 
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

import { Grid, Typography } from "@mui/material";
import React from "react";

function HomeAbout() {
  return (
    <div>
      <Grid container className="HomeAbout">
        <Grid item sm={12}>
          <Typography  mt={'15px'} variant="h2" >Let's grow </Typography> 
          {/* //align="center" */}
          <Typography variant="h2">Together</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6} >
         <div className="gfh">
         <Typography variant="p" align="justify">
            DiGiKloud was founded to deliver technology solution that positively
            impacted the business.Our Mission is to make it as easy as possible
            for everyone in a company to monitor a device, analyze and improve
            performance.We help our customers who require a better Internet of
            Things (IoT) performance. Our engineering practices and design
            methodologies exceed rigid environmental requirements and industry
            standards. Our IoT experts have an end-to-end system approach to
            ensure everything works together when connecting devices.We
            Implement smart solution with industrial customers with a wide range
            of support includes device management,data processing,security and
            privacy
          </Typography>
         </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          Image
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeAbout;

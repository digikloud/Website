import { Grid, Typography } from "@mui/material";
import React from "react";
import resilence from "../../assets/Home Page/resilence_in_iot.png";

function HomeAbout() {
  return (
    <article className="homeContainer">
      <Grid container className="HomeAbout">
        <Grid item xs={12} md={6}>
            <h1 className="typography_heading">
              Resilience in IoT platform for your Business
            </h1>
            <article className="content_text">
              <Typography variant="p" align="justify">
                The Internet of Things (IoT) has revolutionized the way
                businesses operate, providing unprecedented connectivity and
                data-driven insights. However, resilience is paramount for an
                IoT platform to truly deliver value. Resilience ensures the
                stability, security, and continuous operation of your IoT
                infrastructure, safeguarding your business from disruptions and
                enabling long-term success.
              </Typography>
            </article>
        </Grid>
        <Grid item xs={12} md={6} className="home_content_image">
            <img src={resilence} alt="Digikloud" className="homeAboutImages" />
        </Grid>
        <Grid item xs={12} md={12} className="projects_data">
            <div className="projectcard">
              <Typography variant="h1">50+</Typography>
              <Typography variant="body" className="homepageSubhead">
                Projects Delivered
              </Typography>
            </div>
            <div className="projectcard">
              <Typography variant="h1">200+</Typography>
              <Typography variant="body" className="homepageSubhead">
                Connected Devices
              </Typography>
            </div>
            <div className="projectcard">
              <Typography variant="h1">1000+</Typography>
              <Typography variant="body" className="homepageSubhead">
                Messages Per Second
              </Typography>
            </div>
        </Grid>
      </Grid>
    </article>
  );
}

export default HomeAbout;

import { Grid, Typography } from "@mui/material";
import React from "react";
import analyze from "../../assets/analyze.png";
import { Slide } from "react-awesome-reveal";

function Analyzehome() {
  return (
    <article className="homeContainer">
      <Grid container className="analyzehome">
        <Grid item xs={12} md={6}>
          <Slide direction="left" triggerOnce={true} duration={1500}>
            {/* <h1 className="typography_heading">Uncover, Analyze, Optimize</h1> */}
            <Typography variant="h3" className="typography_heading">Uncover, Analyze, Optimize</Typography>
            {/* <h3 className="homepageSubhead">
              Extracting Actionable Insights from Raw Data
            </h3> */}
            <Typography variant="h5" className="homepageSubhead">
            Extracting Actionable Insights from Raw Data
            </Typography>
            <img src={analyze} alt="iot analyze" className="homeAboutImages" />
          </Slide>
        </Grid>
        <Grid item xs={12} md={6} className="analyze_content">
          <Slide direction="right" triggerOnce={true} duration={1500}>
            <Typography variant="p" align="justify">
              The Internet of Things (IoT) has revolutionized the way businesses
              operate, providing unprecedented connectivity and data-driven
              insights. However, resilience is paramount for an IoT platform to
              truly deliver value. Resilience ensures the stability, security,
              and continuous operation of your IoT infrastructure, safeguarding
              your business from disruptions and enabling long-term success.
            </Typography>
            <ul style={{ lineHeight: "2" }}>
              <li><Typography variant="p">Identifying trends, patterns, and anomalies</Typography></li>
              <li><Typography variant="p">Real-time data collection and integration</Typography></li>
              <li><Typography variant="p">Improving resource allocation and cost efficiency</Typography></li>
            </ul>
          </Slide>
        </Grid>
      </Grid>
    </article>
  );
}

export default Analyzehome;

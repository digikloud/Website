import { Grid, Typography } from "@mui/material";
import React from "react";
import analyze from "../../assets/analyze.png";
// import Slide from "react-reveal/Slide";

function Analyzehome() {
  return (
    <article className="homeContainer">
      <Grid container className="analyzehome">
        <Grid item xs={12} md={6}>
          {/* <Slide left> */}
            <h1 className="typography_heading">Uncover, Analyze, Optimize</h1>
            <h3 className="homepageSubhead">
              Extracting Actionable Insights from Raw Data
            </h3>
            <img src={analyze} alt="iot analyze" className="homeAboutImages" />
          {/* </Slide> */}
        </Grid>
        <Grid item xs={12} md={6} className="analyze_content">
          {/* <Slide right> */}
            <Typography variant="p" align="justify">
              The Internet of Things (IoT) has revolutionized the way businesses
              operate, providing unprecedented connectivity and data-driven
              insights. However, resilience is paramount for an IoT platform to
              truly deliver value. Resilience ensures the stability, security,
              and continuous operation of your IoT infrastructure, safeguarding
              your business from disruptions and enabling long-term success.
            </Typography>
            <ul style={{ lineHeight: "2" }}>
              <li>Identifying trends, patterns, and anomalies</li>
              <li>Real-time data collection and integration</li>
              <li>Improving resource allocation and cost efficiency</li>
            </ul>
          {/* </Slide> */}
        </Grid>
      </Grid>
    </article>
  );
}

export default Analyzehome;

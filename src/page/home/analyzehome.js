import { Grid, Typography } from "@mui/material";
import React from "react";
import analyze from "../../assets/uncover,analyse.gif";
import analyze1 from "../../assets/2.png"

function Analyzehome() {
  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="analyzehome">
        {/* <Grid item xs={12} md={12}>
          <h1 className="typography_heading">Uncover, Analyze, Optimize</h1>
          <h3 className="homepageSubhead">
            Extracting Actionable Insights from Raw Data
          </h3>
        </Grid> */}
        <Grid item xs={12} md={6}>
        <h1 className="typography_heading">Uncover, Analyze, Optimize</h1>
          <h3 className="homepageSubhead">
            Extracting Actionable Insights from Raw Data
          </h3>
        <img src={analyze1}  width="80%" height="50%" style={{transform: "scaleX(-1)"}}/>
        </Grid>
        <Grid item xs={12} md={6} className="analyze_content">
          <Typography variant="p" align="justify">
            The Internet of Things (IoT) has revolutionized the way businesses
            operate, providing unprecedented connectivity and data-driven
            insights. However, resilience is paramount for an IoT platform to
            truly deliver value. Resilience ensures the stability, security, and
            continuous operation of your IoT infrastructure, safeguarding your
            business from disruptions and enabling long-term success.
          </Typography>
          <ul style={{ lineHeight: "2" }}>
              <li>Identifying trends, patterns, and anomalies</li>
              <li>Real-time data collection and integration</li>
              <li>Improving resource allocation and cost efficiency</li>
            </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default Analyzehome;
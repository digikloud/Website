import { Grid, Typography } from "@mui/material";
import React from "react";
import analyze from "../../assets/uncover,analyse.gif"

function Analyzehome() {
  return (
    <div className="analyzehome">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} className="analyzehomehead" >
          <h1 className="typography_heading">Uncover, Analyze, Optimize</h1>
          <h3>Extracting Actionable Insights from Raw Data</h3>
        {/* <div className="analyzehomehead">
            <Typography variant="h2">Uncover, Analyze, Optimize</Typography>
            <Typography variant="h3" mt={2}>
              Extracting Actionable Insights from Raw Data
            </Typography>
          </div> */}
        </Grid>
        <Grid item md={6} lg={6} xs={12}>
          <img src ={analyze} width='100%' height='80%' />
        </Grid>
        <Grid item md={6} lg={6} xs={12}>
          {/* <div className="analyzehomehead">
            <Typography variant="h2">Uncover, Analyze, Optimize</Typography>
            <Typography variant="h3" mt={2}>
              Extracting Actionable Insights from Raw Data
            </Typography>
          </div> */}
          <div>
            <Typography variant="p" align="justify">The power of IoT lies not only in connecting devices but also in extracting actionable insights from raw data. By uncovering, analyzing, and optimizing IoT-generated data, organizations can gain valuable insights that drive efficiency, improve decision-making, and optimize operations.</Typography>
          </div>
          <div>
            <ul style={{lineHeight:'2'}}>
                <li>Identifying trends, patterns, and anomalies</li>
                <li>Real-time data collection and integration</li>
                <li>Improving resource allocation and cost efficiency</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Analyzehome;

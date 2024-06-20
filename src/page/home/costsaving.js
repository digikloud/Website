import { Grid, Typography } from "@mui/material";
import React from "react";
import cost from "../../assets/cost saving insight.png";
import { Slide } from "react-awesome-reveal";

function Costsaving() {
  return (
    <article className="homeContainer">
      <Grid container className="costSaving">
        <Grid item xs={12} md={6}>
        <Slide direction="left" triggerOnce={true} duration={1500}>
            {/* <h1 className="typography_heading">Cost-Saving Insights</h1> */}
            <Typography variant="h3" className="typography_heading">Cost-Saving Insights</Typography>
            {/* <h3 className="homepageSubhead">
              Minimize Downtimes, Optimize Operations with IoT Analytics
            </h3> */}
            <Typography variant="h5" className="homepageSubhead">
            Minimize Downtimes, Optimize Operations with IoT Analytics
            </Typography>
            <article className="content_text">
              <Typography variant="p" align="justify">
                IoT analytics offers businesses the opportunity to unlock
                cost-saving insights by minimizing downtimes and optimizing
                operations. By leveraging real-time data, predictive
                maintenance, data-driven decision-making, and supply chain
                optimization, organizations can drive efficiency, reduce costs,
                and gain a competitive edge.
              </Typography>
            </article>
            </Slide>
        </Grid>
        <Grid item xs={12} md={6} className="costsaving_content_image">
        <Slide direction="right" triggerOnce={true} duration={1000}>
            <img
              src={cost}
              alt="iot costsaving_image"
              height="300px"
              width="300px"
            />
            </Slide>
        </Grid>
      </Grid>
    </article>
  );
}

export default Costsaving;

import { Grid, Typography } from "@mui/material";
import React from "react";
import db from "../../assets/From developmnt to distribution (1).gif"

function Digikloudplatform() {
  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="digikloudPlatform">
        <Grid item xs={12} md={6}>
          <h1 className="typography_heading">
            Unlock the Full Potential of Your Business with Digikloud
          </h1>
          <Typography variant="p" align="justify">
            The platform offers flexibility in data storage options, allowing
            businesses to choose between cloud-based or on-premises solutions
            based on their requirements.With its scalable and flexible
            architecture, Digikloud empowers businesses to grow and adapt to
            changing market dynamics.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={db}  className="dashboard_platformPage"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Digikloudplatform;

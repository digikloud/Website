import React from "react";
import Navbar from "../page/home/navbar";
import { Grid, Typography } from "@mui/material";
import "./company.css";

function Company() {
  return (
    <div>
      <Navbar />
      <Grid container className="companyPagecontainer">
        <Grid item xs={12} md={12} className="companyHomepage">
          <div className="companypage_tophead">
            <Typography variant="h1">
              Empowering a Connected World Through IoT Innovation
            </Typography>
            <div className="companypage_subhead">
              <Typography variant="h3">Let's get started with yours</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Company;

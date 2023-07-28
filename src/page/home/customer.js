import { Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import React from "react";
import logo from "../../assets/technosoft logo (2).png";
import ambit from "../../assets/ambit.png";
import axis from "../../assets/axis.png";
import axs from "../../assets/axs.png";
import maxbyte from "../../assets/maxbyte.png";
import sasa from "../../assets/sasa.png";
import smartfi from "../../assets/smartfi.png";

function Customer() {
  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="customers" >
      <Grid item lg={12} md={12} p={5} align="center">
          <h1>20+ Clients rely on us</h1>
        </Grid>
        <Grid item lg={12} xs={12} style={{ display: "flex" }} p={5}>
          <Marquee>
            <div className="image_wrapper">
              <img src={sasa} height='150px' width='150px'/>
            </div>
            <div className="image_wrapper">
              <img src={ambit} height='150px' width='150px'/>
            </div>
            <div className="image_wrapper">
              <img src={axis} height='150px' width='150px'/>
            </div>
            <div className="image_wrapper">
              <img src={axs} height='150px' width='150px'/>
            </div>
            <div className="image_wrapper">
              <img src={smartfi} height='150px' width='150px'/>
            </div>
            <div className="image_wrapper">
              <img src={maxbyte} height='150px' width='150px'/>
            </div>
            <div className="image_wrapper">
              <img src={logo} height='150px' width='150px'/>
            </div>
          </Marquee>
        </Grid>
      </Grid>
    </div>
  );
}

export default Customer;

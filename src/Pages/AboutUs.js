import React from "react";
import "../page/home/index.css";
import Navbar from "../page/home/navbar";
import { Typography } from "@mui/material";

function AboutUs(props) {
  return (
    <div style={{position:'relative'}}>
      <Navbar />
      <div className="aboutUsHead">
        <Typography variant="h1" className="aboutUsSubhead">ABOUT US</Typography>
      </div>
    </div>
  );
}

export default AboutUs;

import { Grid, Typography } from "@mui/material";
import React from "react";
import protocols from "../../assets/IotProtocols.png";

function ProtocolsHome() {
  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="iotProtocols">
        <Grid item xs={12} md={6}>
          <h1 className="typography_heading">SUPPORTED IoT PROTOCOLS</h1>
          <h3 className="homepageSubhead">Seamless Connectivity, Boundless Possibilities</h3>
          <Typography variant="p" align="justify">
            At DiGiKloud, we specialize in delivering cutting-edge Internet of
            Things (IoT) solutions that empower businesses and individuals to
            succeed in an interconnected world. With our expertise and
            commitment to staying at the forefront of technology, we support a
            range of industry-leading IoT protocols. These protocols serve as
            the foundation of our IoT ecosystem, facilitating smooth
            communication, data exchange, and seamless integration between
            devices and applications.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="iotProtocols_content_image">
          <img src={protocols} height="400px" width="400px" />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProtocolsHome;

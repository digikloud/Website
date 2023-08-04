import { Grid, Typography } from "@mui/material";
import React from "react";
import protocols from "../../assets/IotProtocols.png";
import protocols1 from "../../assets/IotProtocols1.png";
import protocols23 from "../../assets/Accelerate Your IoT Journey with MQTT's Lightweight Power.png";
import protocols2 from "../../assets/iotprotocols_image.png";

function ProtocolsHome() {
  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="iotProtocols">
        <Grid item xs={12} md={6} >
          <h1 className="typography_heading">Supported IoT protocols</h1>
          <h3 className="homepageSubhead">Seamless Connectivity, Boundless Possibilities</h3>
          <img src={protocols2} className="iotprotocols_image"/>
          
        </Grid>
        <Grid item xs={12} md={6} className="iotProtocols_content_image">
        <div className="content_text">
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
        </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProtocolsHome;

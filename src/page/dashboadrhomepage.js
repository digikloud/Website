import { Grid, Typography } from "@mui/material";
import React from "react";
import building from "../assets/smart building.png";
import solar from "../assets/solar1.png";
import waste from "../assets/waste management.png";
import hospital from "../assets/health management.png";
import irrigation from "../assets/smart irrigation.png";


function Dashboadrhomepage() {
  return (
    <div className="Dashboadrhomepage">
      <div className="Dashboadrhomepagediv">
        <div className="Dashboadrhomepagehead">
          <Typography variant="h2">Harness IoT to aggregate</Typography>
          <Typography variant="h2">data from every asset</Typography>
        </div>
        <div className="Dashboadrhomepagecontent">
          <Typography
            variant="p"
            align="justify"
            className="dashboard_paragraph"
          >
            Collect and consolidate data from a wide range of assets, including
            machinery, equipment, devices, and infrastructure. This process
            enables organizations to gain a comprehensive and unified view of
            their operations, facilitating betterdecision
            making,optimization,andefficiency improvements.
          </Typography>
        </div>
      </div>
      <div className="Dashboadrhomepagediv1 ">
        <div style={{ width: "40%" }}>
          <div className="Dashboadrhomecard" mt={'10px'}>
            <img src={building} height='80%' width='100%'/>
            <Typography align="center">Smart Building </Typography>
          </div>
          <div className="Dashboadrhomecard">
            <img src={irrigation} height='80%' width='100%'/>
            <Typography align="center">Smart Irrigation </Typography>
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <div className="Dashboadrhomecard">
            <img src={hospital} height='80%' width='100%'/>
            <Typography align="center">Health Management </Typography>
          </div>
          <div className="Dashboadrhomecard">
            <img src={waste} height='80%' width='100%'/>
            <Typography align="center">Waste Management</Typography>
          </div>
          <div className="Dashboadrhomecard">
            <img src={solar} height='80%' width='100%'/>
            <Typography align="center">Solar Panel </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboadrhomepage;

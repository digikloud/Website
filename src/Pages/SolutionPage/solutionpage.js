import { Grid, Typography } from "@mui/material";
import React from "react";
import "./solutionpage.css";
import healthcare from "../../assets/HealthCare.png";
import healthdetails from "../../assets/health_details.png";
import remote_monitoring from "../../assets/remote_monitoring.png"
import Navbar from "../../page/home/navbar";

function Solutionpage() {
  return (
    <div>
    <Navbar />
      <Grid container>
        <Grid className="solution_page_top_image">
          <div className="solution_home_head">
            <Typography variant="h1">
              Connecting Health for a Smarter Future
            </Typography>
            <Typography variant="h1" align="center">
              IoT in Healthcare Management
            </Typography>
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
            {/* <Grid item sx={12} lg={12} md={12} className="solution_page_detail_head"> */}
                {/* <Typography variant="h2" >Healthcare Management</Typography> */}
            {/* </Grid> */}
            <Grid item sx={12} md={6} lg={6} className="solution_page_detail_p">
            <Typography variant="h2" className="solution_page_detail_head">Healthcare Management</Typography>
                <Typography variant="p">
                    The healthcare industry is undergoing a significant transformation with the integration of Internet of Things (IoT) technology. IoT refers to the network of interconnected devices that communicate and exchange data, enabling remote monitoring, data analysis, and automation. In healthcare management, IoT has the potential to revolutionize the way healthcare is delivered, improving patient outcomes, reducing costs, and enhancing operational efficiency.
                </Typography>
            </Grid>
            <Grid item sx={12} md={6} lg={6} className="solution_page_detail_image">
                <img src={healthdetails} height='400px' width='400px'/>
            </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
        {/* <Grid item sx={12} lg={12} md={12} className="solution_page_detail_head">
                <Typography variant="h2" align="end">Remote Patient Monitoring</Typography>
            </Grid> */}
            <Grid item sx={12} md={6} lg={6} className="solution_page_detail_image">
                <img src={remote_monitoring} height='400px' width='400px' class="center"/>
            </Grid>
            <Grid item sx={12} md={6} lg={6} className="solution_page_detail_p">
            <Typography variant="h2" className="solution_page_detail_head">Remote Patient Monitoring</Typography>
                <Typography variant="p">
                    One of the primary applications of IoT in healthcare management is remote patient monitoring (RPM). IoT devices, such as wearables, sensors, and connected medical devices, can continuously collect and transmit patient health data to healthcare providers. This enables healthcare professionals to monitor patients remotely, identify potential health issues in real-time, and intervene promptly
                </Typography>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Solutionpage;

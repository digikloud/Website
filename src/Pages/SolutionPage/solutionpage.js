import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./solutionpage.css";
import healthcare from "../../assets/HealthCare.png";
import healthdetails from "../../assets/health_details.png";
import remote_monitoring from "../../assets/remote_monitoring.png";
import Navbar from "../../page/home/navbar";
import smartHospital from "../../assets/smart hospital.png";
import Footer from "../../page/home/Footer";

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
            <Typography variant="h2" className="solution_page_detail_head">
              Healthcare Management
            </Typography>
            <Typography variant="p">
              The healthcare industry is undergoing a significant transformation
              with the integration of Internet of Things (IoT) technology. IoT
              refers to the network of interconnected devices that communicate
              and exchange data, enabling remote monitoring, data analysis, and
              automation. In healthcare management, IoT has the potential to
              revolutionize the way healthcare is delivered, improving patient
              outcomes, reducing costs, and enhancing operational efficiency.
            </Typography>
          </Grid>
          <Grid
            item
            sx={12}
            md={6}
            lg={6}
            className="solution_page_detail_image"
          >
            <img src={healthdetails} height="400px" width="400px" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          {/* <Grid item sx={12} lg={12} md={12} className="solution_page_detail_head">
                <Typography variant="h2" align="end">Remote Patient Monitoring</Typography>
            </Grid> */}
          <Grid
            item
            sx={12}
            md={6}
            lg={6}
            className="solution_page_detail_image"
          >
            <img
              src={remote_monitoring}
              height="400px"
              width="400px"
              class="center"
            />
          </Grid>
          <Grid item sx={12} md={6} lg={6} className="solution_page_detail_p">
            <Typography variant="h2" className="solution_page_detail_head">
              Remote Patient Monitoring
            </Typography>
            <Typography variant="p">
              One of the primary applications of IoT in healthcare management is
              remote patient monitoring (RPM). IoT devices, such as wearables,
              sensors, and connected medical devices, can continuously collect
              and transmit patient health data to healthcare providers. This
              enables healthcare professionals to monitor patients remotely,
              identify potential health issues in real-time, and intervene
              promptly
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item sx={12} md={6} lg={6} className="solution_page_detail_p">
            <Typography variant="h2" className="solution_page_detail_head">
              Smart Hospitals and Facilities
            </Typography>
            <Typography variant="p">
              IoT technology enables the creation of smart hospitals and
              healthcare facilities. Various interconnected devices and systems
              can be integrated to automate routine tasks, optimize resource
              allocation, and enhance patient experience.{" "}
            </Typography>
          </Grid>
          <Grid
            item
            sx={12}
            md={6}
            lg={6}
            className="solution_page_detail_image"
          >
            <img src={smartHospital} height="400px" width="400px" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          {/* <Grid item sx={12} lg={12} md={12} className="solution_page_detail_head">
                <Typography variant="h2" align="end">Remote Patient Monitoring</Typography>
            </Grid> */}
          <Grid
            item
            sx={12}
            md={6}
            lg={6}
            className="solution_page_detail_image"
          >
            {/* <img
              src={remote_monitoring}
              height="400px"
              width="400px"
              class="center"
            /> */}
          </Grid>
          <Grid item sx={12} md={6} lg={6} className="solution_page_detail_p">
            <Typography variant="h2" className="solution_page_detail_head">
              Data Analytics and Predictive Insights
            </Typography>
            <Typography variant="p">
              The massive amounts of data generated by IoT devices in healthcare
              provide an opportunity for advanced analytics and predictive
              insights. By collecting and analyzing real-time data, healthcare
              providers can gain valuable insights into patient conditions,
              treatment effectiveness, and disease trends. Predictive analytics
              can help identify patients at risk of deterioration, optimize
              treatment plans, and improve resource allocation. These insights
              enable proactive and personalized care, leading to better patient
              outcomes and more efficient healthcare management.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={12} lg={12} xs={12} className="solution_page_detail_head">
            <Typography variant="h2" align="center">
              Streamline, Simplify, Succeed DigiKloud's Healthcare Management
              Excellence
            </Typography>
          </Grid>
          <Grid item md={12} lg={12} xs={12}>
              <Typography variant="h3" align="center"> Tag lines</Typography>
          </Grid> 
          <Grid item md={12} lg={12} xs={12} style={{padding: '0 45%'}}>
              <Button variant="contained">Book Demo</Button>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Solutionpage;

import { Grid, Typography } from "@mui/material";
import React from "react";
import "./solutionpage.css";
import dashboard from "../../assets/health_dashboard_ref.gif";
import healthdetails from "../../assets/health_details.png";
import remote_monitoring from "../../assets/remote_monitoring.png";
import Navbar from "../../page/home/navbar";
import smartHospital from "../../assets/smart hospital.png";
import Footer from "../../page/home/Footer";
import { Helmet } from "react-helmet";

function Healthpage() {
  return (
    <div>
       <Helmet>
        <title>Helath Management Solution</title>
        <meta
          name="description"
          content="DiGiKloud is dedicated to providing businesses with secure, dependable, and cutting-edge IoT solutions, empowering them to overcome challenges and achieve their goals. We offer comprehensive services, from analyzing your business needs to implementing and securing your IoT ecosystem."
        />
        <meta name="msvalidate.01" content="E7C8450433A1B04E4DB234FBBCB4D282" />
        <meta
          name="keywords"
          content="digikloud,iot,dasboard,waste management dashboard using iot,solar monitoring dashboard using iot,workplace management using iot"
        ></meta>
        <link rel="canonical" href="https://digikloud.io/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Grid container className="solution_container">
        <Grid className="solution_page_top_image">
          <div className=" health_text">
            <h1 className="solutionTopTag">
              Connecting Health for a Smarter Future IoT in Healthcare Management
            </h1>
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Healthcare Management
            </h1>
            <div className="content_text">
              <Typography variant="p">
                The healthcare industry is undergoing a significant
                transformation with the integration of Internet of Things (IoT)
                technology. IoT refers to the network of interconnected devices
                that communicate and exchange data, enabling remote monitoring,
                data analysis, and automation. In healthcare management, IoT has
                the potential to revolutionize the way healthcare is delivered,
                improving patient outcomes, reducing costs, and enhancing
                operational efficiency.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={healthdetails} alt="health managemnt iot"  className="images_rightside" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            
            <img src={remote_monitoring} alt="health managemnt iot" className="images" />
          </Grid>
          <Grid item md={6} xs={12}>
          <h1 className="typography_heading_solution">
              Remote Patient Monitoring
            </h1>
            <div className="content_text">
              <Typography variant="p">
                One of the primary applications of IoT in healthcare management
                is remote patient monitoring (RPM). IoT devices, such as
                wearables, sensors, and connected medical devices, can
                continuously collect and transmit patient health data to
                healthcare providers. This enables healthcare professionals to
                monitor patients remotely, identify potential health issues in
                real-time, and intervene promptly.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Smart Hospitals and Facilities
            </h1>
            <div className="content_text">
              <Typography variant="p">
                IoT technology enables the creation of smart hospitals and
                healthcare facilities. Various interconnected devices and
                systems can be integrated to automate routine tasks, optimize
                resource allocation, and enhance patient experience.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={smartHospital} alt="health managemnt iot"  className="images_rightside" />
          </Grid>
        </Grid>
        <Grid container className=" dashboardpage">
          <Grid item md={12} xs={12}>
            <h1 className="typography_heading_solution">
              Data Analytics and Predictive Insights
            </h1>
            <div className="content_text">
              <Typography variant="p">
                The massive amounts of data generated by IoT devices in
                healthcare provide an opportunity for advanced analytics and
                predictive insights. By collecting and analyzing real-time data,
                healthcare providers can gain valuable insights into patient
                conditions, treatment effectiveness, and disease trends.
                Predictive analytics can help identify patients at risk of
                deterioration, optimize treatment plans, and improve resource
                allocation. These insights enable proactive and personalized
                care, leading to better patient outcomes and more efficient
                healthcare management.
              </Typography>
              </div>
          </Grid>
          <Grid item md={12} xs={12} >
            <img src={dashboard} alt="iot helath management dahboard" className=" dashboard" />        
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Healthpage;

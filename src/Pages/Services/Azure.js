import React from "react";
import Navbar from "../../page/home/navbar";
import azure_bg from "../../assets/Services/Azure/azure_bg.webp";
import azure01 from "../../assets/Services/Azure/azure01.webp";
import azure02 from "../../assets/Services/Azure/azure02.webp";
import azure03 from "../../assets/Services/Azure/azure03.webp";
import azure04 from "../../assets/Services/Azure/azure04.webp";
import azure05 from "../../assets/Services/Azure/azure05.webp";
import azure_avt01 from "../../assets/Services/Azure/azure_avt01.webp";
import azure_avt02 from "../../assets/Services/Azure/azure_avt02.webp";
import azure_avt03 from "../../assets/Services/Azure/azure_avt03.webp";
import azure_avt04 from "../../assets/Services/Azure/azure_avt04.webp";
import azure_avt05 from "../../assets/Services/Azure/azure_avt05.webp";
import { Fade, Slide } from "react-awesome-reveal";
import { Avatar, Grid, Typography } from "@mui/material";
// import { useState } from "react";
// import DialogOpen from "../../components/DialogOpen";
import Footer from "../../page/home/Footer";

function Azure() {
  return (
    <>
      <Navbar />
      <section className="homepage">
        <img
          src={azure_bg}
          alt="Digikloud Company"
          className="services_background_image"
        />
        <header className="servicesTopHead">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">
              Welcome to DiGiKloud- Your Gateway to Azure IoT Excellence
            </Typography>
          </Fade>
        </header>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="azure_services_container">
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={1000}>
              <article className="awsIot_services_container">
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={azure_avt01}
                />
                <Typography variant="h6"> Azure IoT Hub</Typography>
                <Typography variant="p">
                  Azure IoT Hub is the cornerstone of your IoT deployment.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={azure_avt02}
                />
                <Typography variant="h6">Azure Stream Analytics</Typography>
                <Typography variant="p">
                  Leverage the power of Azure Stream Analytics to process data
                  from your IoT devices
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={azure_avt03}
                />
                <Typography variant="h6">Azure Functions</Typography>
                <Typography variant="p">
                  Efficiency is paramount in IoT operations.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={azure_avt04}
                />
                <Typography variant="h6">Azure Time Series Insights</Typography>
                <Typography variant="p">
                  Azure Time Series Insights is your solution for analyzing, and
                  visualizing data generated by IoT devices
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={azure_avt05}
                />
                <Typography variant="h6">Azure API Management</Typography>
                <Typography variant="p">
                  Azure API Management acts as the bridge between your IoT
                  devices and external applications.
                </Typography>
              </article>
            </Fade>
          </Grid>
        </Grid>
      </section>
      <section>
        <article className="byoppagecontainer">
          <Grid container className="azure_services_container">
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slide direction="left" triggerOnce={true} duration={1500}>
                <img src={azure01} alt="" />
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="right" triggerOnce={true} duration={1500}>
                <h3 className="homepageSubhead azure_heading">
                  Azure IoT Hub Seamless Device Connectivity at Scale
                </h3>
                <article className="azureServicesContent">
                  <Typography variant="p" align="justify">
                    We help you connect and manage devices securely and
                    effortlessly. From industrial machinery to consumer gadgets,
                    our experts ensure robust security and seamless
                    communication between devices and the cloud.
                  </Typography>
                </article>

                <article className="azure_list">
                  <ul style={{ lineHeight: "2" }}>
                    <li>Device provisioning and registration.</li>
                    <li>
                      Secure bi-directional communication with MQTT and AMQP.
                    </li>
                    <li>
                      Device twin management for real-time synchronization.
                    </li>
                    <li>
                      Integration with Azure Active Directory for access
                      control.
                    </li>
                  </ul>
                </article>
              </Slide>
            </Grid>
          </Grid>
        </article>
      </section>

      <section>
        <article className="byoppagecontainer">
          <Grid container className="azure_services_container">
            <Grid item xs={12} md={6}>
              <Slide direction="left" triggerOnce={true} duration={1500}>
                <h3 className="homepageSubhead azure_heading">
                  Azure API Management Secure and Scalable APIs for Your IoT
                  Ecosystem
                </h3>
                <article className="azureServicesContent">
                  <Typography variant="p" align="justify">
                    Azure API Management bridges your IoT devices and external
                    applications. We help you create, publish, and manage
                    secure, scalable, and reliable APIs for controlled access to
                    your IoT data.
                  </Typography>
                </article>

                <article className="azure_list">
                  <ul style={{ lineHeight: "2" }}>
                    <li>API design and creation to expose IoT data.</li>
                    <li>Secure API authentication and authorization.</li>
                    <li>Rate limiting and throttling to control access.</li>
                    <li>
                      Integration with Azure Functions for real-time data
                      processing.
                    </li>
                  </ul>
                </article>
              </Slide>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slide direction="right" triggerOnce={true} duration={1500}>
                <img src={azure02} alt="" />
              </Slide>
            </Grid>
          </Grid>
        </article>
      </section>

      <section>
        <article className="byoppagecontainer">
          <Grid container className="azure_services_container">
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slide direction="left" triggerOnce={true} duration={1500}>
                <img src={azure03} alt="" />
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="right" triggerOnce={true} duration={1500}>
                <h3 className="homepageSubhead azure_heading">
                  Azure Stream Analytics Real-Time Data Processing for IoT
                  Insights
                </h3>
                <article className="azureServicesContent">
                  <Typography variant="p" align="justify">
                    Leverage Azure Stream Analytics to process and analyze
                    real-time IoT data. Our expertise helps you design and
                    deploy scalable pipelines for swift, informed
                    decision-making.
                  </Typography>
                </article>

                <article className="azure_list">
                  <ul style={{ lineHeight: "2" }}>
                    <li>
                      Pipeline design and deployment for real-time data
                      processing.
                    </li>
                    <li>
                      Integration with Azure Event Hubs and IoT Hub for data
                      ingestion.
                    </li>
                    <li>Complex event processing and anomaly detection.</li>
                    <li>
                      Integration with Azure Machine Learning for predictive
                      analytics.
                    </li>
                  </ul>
                </article>
              </Slide>
            </Grid>
          </Grid>
        </article>
      </section>

      <section>
        <article className="byoppagecontainer">
          <Grid container className="azure_services_container">
            <Grid item xs={12} md={6}>
              <Slide direction="left" triggerOnce={true} duration={1500}>
                <h3 className="homepageSubhead azure_heading">
                  Azure Functions Event-Driven Automation for IoT Workflows
                </h3>
                <article className="azureServicesContent">
                  <Typography variant="p" align="justify">
                    Automate IoT operations with our Azure Functions development
                    services. We create custom functions for seamless
                    integration, ensuring streamlined workflows and optimized
                    efficiency.
                  </Typography>
                </article>

                <article className="azure_list">
                  <ul style={{ lineHeight: "2" }}>
                    <li>
                      Event-driven function development for IoT workflows.
                    </li>
                    <li>Data transformation, validation, and enrichment.</li>
                    <li>
                      Integration with Azure services such as Azure Storage and
                      Cosmos DB.
                    </li>
                    <li>
                      Real-time data analytics using Azure Functions and other
                      services.
                    </li>
                  </ul>
                </article>
              </Slide>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slide direction="right" triggerOnce={true} duration={1500}>
                <img src={azure04} alt="" />
              </Slide>
            </Grid>
          </Grid>
        </article>
      </section>

      <section>
        <article className="byoppagecontainer">
          <Grid container className="azure_services_container">
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slide direction="left" triggerOnce={true} duration={1500}>
                <img src={azure05} alt="" />
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="right" triggerOnce={true} duration={1500}>
                <h3 className="homepageSubhead azure_heading">
                  Azure Time Series Insights Uncover Insights from Time-Series
                  Data
                </h3>
                <article className="azureServicesContent">
                  <Typography variant="p" align="justify">
                    Manage, analyze, and visualize time-stamped IoT data with
                    Azure Time Series Insights. Our experts help set up and
                    configure environments for efficient storage, exploration,
                    and interpretation, yielding actionable insights.
                  </Typography>
                </article>

                <article className="azure_list">
                  <ul style={{ lineHeight: "2" }}>
                    <li>
                      Environment setup and schema design for time-series data.
                    </li>
                    <li>Data ingestion and exploration configuration.</li>
                    <li>
                      Integration with visualization tools and Power BI for
                      insightful dashboards.
                    </li>
                    <li>Query optimization for fast data retrieval.</li>
                  </ul>
                </article>
              </Slide>
            </Grid>
          </Grid>
        </article>
      </section>

      <Footer />
    </>
  );
}

export default Azure;

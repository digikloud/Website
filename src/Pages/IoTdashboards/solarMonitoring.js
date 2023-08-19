import React from "react";
import Navbar from "../../page/home/navbar";
import "./iotdashboard.css";
import { Button, Grid, Typography } from "@mui/material";
import solar012 from "../../assets/iotDashboard/solar01.webp";
import solar01 from "../../assets/iotDashboard/solar02.png";
import bulb from "../../assets/iotDashboard/bulb01.png";

function SolarMonitoring() {
  return (
    <>
      <Navbar />
      <section className="heading">
        <h1>IoT Solar Monitoring solution</h1>
        <h2>
          Digikloud's new template feature as a starting point to develop your
          solar monitoring solution
        </h2>
        <Button
          target="_blank"
          href="https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d&state=https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d%253D"
          style={{
            borderRadius: 15,
            backgroundColor: "#00b894",
            color: "white",
            margin: "5px",
            fontSize: "18px",
          }}
        >
          See Live Dashboard
        </Button>
      </section>
      <section className="iotdashboard_container">
        <article className="iotdashboard_image_container">
          <img src={solar01} alt="solar iot" className="img-iotDashboard" />
        </article>
      </section>
      <section className="iotdashboard_container">
        <article className="solar_info">
          <h2>What is solar monitoring?</h2>
          <Typography variant="h6">
            Solar monitoring using IoT (Internet of Things) involves leveraging
            IoT technology to monitor, analyze, and manage solar energy systems
            in a more intelligent and connected manner.
          </Typography>
          <Typography variant="p">
            IoT-enabled solar monitoring enhances the capabilities of
            traditional monitoring by providing real-time data collection,
            remote management, and advanced analytics.
          </Typography>
        </article>
      </section>
      <section className="iotdashboard_container">
        <article className="key_elements_solar">
          <h2>
            Here are the key elements that constitute a solar management
            scenario for businesses aiming to streamline their operational costs
            and enhance efficiency
          </h2>
          <Grid container spacing={1}>
            <Grid
              style={{
                display: "grid",
                justifyItems: "center",
                justifyContent: "space-evenly",
                alignContent: "space-evenly",
                alignItems: "center",
              }}
              item
              xs={12}
              md={6}
            >
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Utilize IoT data and analytics to predict maintenance needs
                  for system components.
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Deploy IoT sensors on solar panels, inverters, batteries, and
                  other relevant components to monitor performance in real time.
                </Typography>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Assess the business's energy needs, load profiles, and energy
                  cost structure.
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Utilize IoT platforms and data analytics tools to process
                  collected data.
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Implement remote diagnostics to identify and address issues
                  promptly.
                </Typography>
              </article>
            </Grid>
          </Grid>
        </article>
      </section>
      {/* <section className="iotdashboard_container">
        <article className="solarManagementSolution">
          <h2>
            IoT-based solar management solutions typically consist of multiple
            layers of technology
          </h2>
          <Grid container>
            <Grid item xs={12}>
              <Typography>Sensors and Data Collection Layer</Typography>
              <Typography>
                These sensors capture data at regular intervals and transmit it
                wirelessly to the central cloud platform for further processing
              </Typography>
            </Grid>
          </Grid>
        </article>
      </section> */}
    </>
  );
}
export default SolarMonitoring;

export function Img() {
  return (
    <>
      <img src={bulb} alt="iot solar" height="75px" width="75px" />
    </>
  );
}

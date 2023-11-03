import React from "react";
import Navbar from "../../page/home/navbar";
import "./iotdashboard.css";
import { Button, Grid, Stack, Typography } from "@mui/material";
import solar01 from "../../assets/iotDashboard/solar01.webp";
import solar02 from "../../assets/iotDashboard/solar02.webp";
import bulb from "../../assets/iotDashboard/bulb01.png";
import star02 from "../../assets/iotDashboard/star02.png";
import Footer from "../../page/home/Footer";
import { Helmet } from "react-helmet";

function SolarMonitoring() {
  return (
    <>
      <Helmet>
        <title>Solar Monitoring IoT Dashboard </title>
      </Helmet>
      <Navbar />
      <section className="heading">
        <h1>IoT Solar Monitoring Solution</h1>
        <h2>
          Digikloud's new template feature as a starting point to develop your
          Solar monitoring solution
        </h2>
        <Button
          target="_blank"
          href="https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d&state=https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d%253D"
          style={{
            borderRadius: 15,
            backgroundColor: "#00b894",
            color: "white",
            fontSize: "18px",
          }}
        >
          See Live Dashboard
        </Button>
      </section>
      <section className="iotdashboard_container">
        <article className="iotdashboard_image_container">
          <img
            src={solar01}
            alt="solar monitoring iot solution"
            className="img-iotDashboard"
          />
        </article>
      </section>
      <section className="iotdashboard_container">
        <article className="solar_info">
          <Typography variant="h3">What is solar monitoring?</Typography>
          <Typography variant="h4">
            Solar monitoring using IoT (Internet of Things) involves leveraging
            IoT technology to monitor, analyze, and manage solar energy systems
            in a more intelligent and connected manner.
          </Typography>
          <Typography variant="h5">
            IoT-enabled solar monitoring enhances the capabilities of
            traditional monitoring by providing real-time data collection,
            remote management, and advanced analytics.
          </Typography>
        </article>
      </section>
      <section className="iotdashboard_container key_elements_solar_container">
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
          <article className="solar_layer_technology">
            <h2>
              IoT-based solar management solutions typically consist of multiple
              layers of technology
            </h2>
            <Grid container>
              <Grid item xs={12} md={4}>
                <article className="key_element_card">
                  <Typography variant="h6">
                    Sensors and Data Collection Layer
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={8}>
                <article className="key_element_card">
                  <Typography variant="p">
                    These sensors capture data at regular intervals and transmit
                    it wirelessly to the central cloud platform for further
                    processing
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={4}>
                <article className="key_element_card">
                  <Typography variant="h6">Communication Layer</Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={8}>
                <article className="key_element_card">
                  <Typography variant="p">
                    Wireless communication technologies like Wi-Fi, cellular
                    networks, Zigbee, LoRa are commonly used to transmit data.
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={4}>
                <article className="key_element_card">
                  <Typography variant="h6">Data Storage Layer</Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={8}>
                <article className="key_element_card">
                  <Typography variant="p">
                    Data collected from sensors is sent to a cloud-based
                    platform for storage and analysis.
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={4}>
                <article className="key_element_card">
                  <Typography variant="h6">
                    Data Processing and Analytics Layer
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={8}>
                <article className="key_element_card">
                  <Typography variant="p">
                    Within the cloud platform, collected data is processed and
                    analyzed to extract meaningful insights.
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={4}>
                <article className="key_element_card">
                  <Typography variant="h6">
                    Visualization and User Interface Layer
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={8}>
                <article className="key_element_card">
                  <Typography variant="p">
                    A user-friendly dashboard or interface provides users with
                    real-time access to the system's performance metrics, energy
                    production, consumption, savings, and health status.
                  </Typography>
                </article>
              </Grid>
            </Grid>
          </article>
        </article>
      </section>
      <section className="iotdashboard_container white_bg_container">
        <article className="solar_features">
          <Typography variant="h4">Features</Typography>
          <Typography variant="h3">Solar Monitoring with DiGiKloud</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Personalize the IoT dashboard to your preferences by including
                  additional widgets.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Utilize our comprehensive solar monitoring template.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Configure alerts and notifications.
                </Typography>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Review historical data and analyze patterns.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Establish a connection between solar monitoring and the cloud.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Monitor real-time consumption data.
                </Typography>
              </article>
            </Grid>
          </Grid>
        </article>
      </section>
      <section className="iotdashboard_container">
        <article className="iotdashboardContainer">
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <article>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={3}
                  className="iotdashboard_info"
                >
                  <Typography variant="h2">
                    IoT Solar Monitoring Dashboard
                  </Typography>
                  <article className="dashboardinfoContent">
                    <Typography variant="p">
                      The pre-built IoT solar monitoring dashboard available on
                      Digikloud offers a comprehensive solution. By integrating
                      your sensor into the platform, you can seamlessly begin
                      managing your solar-related data. Take advantage of this
                      opportunity by signing up for a complimentary trial and
                      initiating your journey with ease.
                    </Typography>
                  </article>
                  <Button
                    target="_blank"
                    href="https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d&state=https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d%253D"
                    style={{
                      borderRadius: 10,
                      backgroundColor: "#00b894",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    GET STARTED
                  </Button>
                </Stack>
              </article>
            </Grid>
            <Grid item xs={12} md={6}>
              <article>
                <img
                  src={solar02}
                  alt="solar monitor"
                  height="100%"
                  width="100%"
                />
              </article>
            </Grid>
          </Grid>
        </article>
      </section>
      <Footer />
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

export function StarIcon() {
  return (
    <>
      <img src={star02} alt="iot solar" />
    </>
  );
}

import React from "react";
import Navbar from "../../page/home/navbar";
import "./iotdashboard.css";
import { Button, Grid, Stack, Typography } from "@mui/material";
import health01 from "../../assets/iotDashboard/Health01.webp";
import health02 from "../../assets/iotDashboard/Health02.webp";
import bulb from "../../assets/iotDashboard/bulb01.png";
import star02 from "../../assets/iotDashboard/star02.png";
import Footer from "../../page/home/Footer";
import { Helmet } from "react-helmet";

function HealthManagementIoT() {
  return (
    <>
      <Helmet>
        <title>Helath Monitoring IoT Dashboard</title>
      </Helmet>
      <Navbar />
      <section className="heading">
        <h1>IoT Health Monitoring solution</h1>
        <h2>
          Utilize Digikloud's latest template feature as a foundation for
          building your health monitoring solution
        </h2>
        <Button
          //   target="_blank"
          //   href="https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d&state=https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d%253D"
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
            src={health01}
            alt="solar monitoring iot solution"
            className="img-iotDashboard"
          />
        </article>
      </section>
      <section className="iotdashboard_container">
        <article className="solar_info">
          <Typography variant="h3">What is Health Management?</Typography>
          <Typography variant="h4">
            Health monitoring using IoT (Internet of Things) refers to the use
            of connected devices and sensors to collect and transmit
            health-related data from individuals or patients to healthcare
            providers, caregivers, or individuals themselves.
          </Typography>
          <Typography variant="h5">
            IoT technology enables continuous and remote monitoring of various
            health parameters, allowing for timely interventions, better disease
            management, and improved overall health outcomes
          </Typography>
        </article>
      </section>
      <section className="iotdashboard_container key_elements_solar_container">
        <article className="key_elements_solar">
          <h2>
            Here are the key elements that constitute a Health Monitoring
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
                  Implement health monitoring software or mobile apps that allow
                  employees to log their health data and receive personalized
                  insights and recommendations.
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Continuously collect health data from employees using IoT
                  sensors and wearable devices. Ensure that this data is
                  securely transmitted to a centralized system for analysis.
                </Typography>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  IoT-enabled sensors can be embedded in various medical devices
                  or placed in the environment to collect data.
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  The received data is processed and analyzed using advanced
                  algorithms and machine learning techniques to detect patterns,
                  trends, and anomalies.
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  IoT health monitoring systems can generate alerts and
                  notifications in real-time when critical health parameters
                  deviate from the normal range.
                </Typography>
              </article>
            </Grid>
          </Grid>
          <article className="solar_layer_technology">
            <h2>
              IoT-based Health Monitoring solutions typically consist of
              multiple layers of technology
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
                    This layer includes IoT devices and sensors such as
                    wearables, health monitors, and medical sensors.
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
                    IoT devices transmit the collected data using various
                    communication protocols like Wi-Fi, Bluetooth, Zigbee, or
                    cellular networks.
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
                    Patterns, trends, and anomalies are identified in the data,
                    leading to actionable information.
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
                    Web or mobile applications provide an interface for
                    patients, caregivers, and healthcare professionals to access
                    health data.
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
          <Typography variant="h3">Health Management with DiGiKloud</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">Real-time remote monitoring</Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">Personalized insights</Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">Emergency response</Typography>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">Alerts and notifications</Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Family and caregiver access{" "}
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
                    IoT Health Management Dashboard
                  </Typography>
                  <article className="dashboardinfoContent">
                    <Typography variant="p">
                      The IoT health management dashboard available through
                      Digikloud offers a seamless resolution for monitoring
                      health-related data after integrating sensors. Seize this
                      opportunity by signing up for a complimentary trial and
                      embarking on your journey with ease.
                    </Typography>
                  </article>

                  <Button
                    // target="_blank"
                    // href="https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d&state=https://app-demo.digikloudsystems.com/dashboard/512ba870-22fd-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d%253D"
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
                  src={health02}
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
export default HealthManagementIoT;

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

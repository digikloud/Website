import React from "react";
import Navbar from "../../page/home/navbar";
import "./iotdashboard.css";
import { Button, Grid, Stack, Typography } from "@mui/material";
import waste01 from "../../assets/iotDashboard/waste01.png";
import waste02 from "../../assets/iotDashboard/waste02.png";
import bulb from "../../assets/iotDashboard/bulb01.png";
import star02 from "../../assets/iotDashboard/star02.png";
import Footer from "../../page/home/Footer";

function WasteManagementIoT() {
  return (
    <>
      <Navbar />
      <section className="heading">
        <h1>IoT Waste management solution</h1>
        <h2>
          Utilize Digikloud's innovative template feature as a foundation to
          kickstart the development of your waste management solution.
        </h2>
        <Button
          target="_blank"
          href="https://app-demo.digikloudsystems.com/dashboard/923a4bc0-2148-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d"
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
            src={waste01}
            alt="solar monitoring iot solution"
            className="img-iotDashboard"
          />
        </article>
      </section>
      <section className="iotdashboard_container">
        <article className="solar_info">
          <Typography variant="h3">What is Waste Managment ?</Typography>
          <Typography variant="h4">
            A waste management solution using IoT (Internet of Things) involves
            integrating sensors, devices, and data analytics to enhance the
            efficiency and effectiveness of waste collection, monitoring, and
            processing.
          </Typography>
          <Typography variant="h5">
            IoT-enabled waste management systems can provide real-time data on
            waste bin fill levels, optimize collection routes, monitor landfill
            conditions, track recycling progress, and enable remote management
            and control. This technology-driven approach aims to reduce
            operational costs, minimize environmental impact, and improve
            overall waste management practices.
          </Typography>
        </article>
      </section>
      <section className="iotdashboard_container key_elements_solar_container">
        <article className="key_elements_solar">
          <h2>
            Below are the fundamental components comprising a waste management
            scenario designed for businesses seeking to optimize operational
            expenses and improve overall efficiency.
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
                  Utilizing IoT-enabled sensors to monitor waste bin fill levels
                  in real-time, optimizing collection schedules, and reducing
                  unnecessary pickups
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Employing advanced data analysis to identify trends, patterns,
                  and areas for improvement within the waste management process.
                </Typography>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Generating detailed reports on waste generation, collection,
                  and disposal for transparency and continuous improvement.
                </Typography>
              </article>
              <article className="key_element_card">
                <Img />
                <Typography variant="p">
                  Analyzing the costs associated with waste collection,
                  transportation, disposal, and recycling to identify potential
                  savings.
                </Typography>
              </article>
            </Grid>
          </Grid>
        </article>
      </section>
      <section className="iotdashboard_container white_bg_container">
        <article className="solar_features">
          <Typography variant="h4">Features</Typography>
          <Typography variant="h3">Waste Management with DiGiKloud</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Real-time IoT Sensor Monitoring for Waste Bin Fill Levels.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Intuitive Dashboard Visualizations for Decision-making.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Data Analytics and Reporting for Insights into Waste Trends.
                </Typography>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Continuous Improvement through Data-driven Insights.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Smart Notifications and Alerts for Timely Collection.
                </Typography>
              </article>
              <article className="key_element_card">
                <StarIcon />
                <Typography variant="p">
                  Cost Analysis and Optimization Opportunities.
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
                    IoT Waste Management Dashboard
                  </Typography>
                  <Typography variant="p">
                    The pre-built IoT waste management monitoring dashboard
                    offered by Digikloud provides a holistic solution. By
                    connecting your sensor devices to the platform, you can
                    effortlessly commence the management of your waste-related
                    data. Seize this chance by enrolling in a complimentary
                    trial and embarking on your journey with simplicity.
                  </Typography>
                  <Button
                    target="_blank"
                    href="https://app-demo.digikloudsystems.com/dashboard/923a4bc0-2148-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d"
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
                  src={waste02}
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
export default WasteManagementIoT;

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

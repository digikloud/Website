import React from "react";
import Navbar from "../../page/home/navbar";
import "./iotdashboard.css";
import { Grid, Stack, Typography } from "@mui/material";
import waste01 from "../../assets/iotDashboard/waste01.webp";
import waste02 from "../../assets/iotDashboard/waste02.webp";
import bulb from "../../assets/iotDashboard/bulb01.png";
import star02 from "../../assets/iotDashboard/star02.png";
import Footer from "../../page/home/Footer";
import { Helmet } from "react-helmet";
// import { Fade } from "react-awesome-reveal";

function WasteManagementIoT() {
  return (
    <>
      <Helmet>
        <title>Waste Monitoring IoT Dashboard</title>
      </Helmet>
      <Navbar />
      <section className="heading">
        {/* <Fade triggerOnce={true} duration={2000} direction="up"> */}
        <Typography variant="h1">IoT Waste Managment Solution</Typography>
        <Typography variant="h4">
          Utilize Digikloud's innovative template feature as a foundation to
          kickstart the development of your waste management solution.
        </Typography>
        {/* <Button
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
        </Button> */}
        {/* </Fade> */}
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
            Waste management using IoT (Internet of Things) integrates sensors,
            devices, and data analytics to improve the efficiency and
            effectiveness of waste collection, monitoring, and processing.
          </Typography>
          <Typography variant="h5">
            IoT waste management systems offer real-time data on bin fill
            levels, optimize collection routes, monitor landfill conditions,
            track recycling progress, and enable remote management. Goals
            include cost reduction, environmental impact minimization, and
            improved waste management practices.
          </Typography>
        </article>
      </section>
      <section className="iotdashboard_container key_elements_solar_container">
        <article className="key_elements_solar">
          <Typography variant="h5">
            Below are the fundamental components comprising a waste management
            scenario designed for businesses seeking to optimize operational
            expenses and improve overall efficiency.
          </Typography>
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
                  <article className="dashboardinfoContent">
                    <Typography variant="p">
                      Digikloud's pre-built IoT waste management monitoring
                      dashboard offers a comprehensive solution. Connect your
                      sensor devices to the platform to effortlessly manage
                      waste-related data. Start your journey with ease by
                      signing up for a complimentary trial.
                    </Typography>
                  </article>
                  {/* <Button
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
                  </Button> */}
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

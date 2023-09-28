import React from "react";
import Navbar from "../../page/home/navbar";
import background_img from "../../assets/Services/Feautured/feautured_bg.webp";
import nodered_bg from "../../assets/Services/Feautured/nodered_bg.webp";
import nodered01 from "../../assets/Services/Feautured/nodered01.webp";
import telegraf01 from "../../assets/Services/Feautured/telegraf01.webp";
import telegraf02 from "../../assets/Services/Feautured/telegraf02.webp";
import grafana01 from "../../assets/Services/Feautured/grafan01.webp";
import grafana02 from "../../assets/Services/Feautured/grafana02.png";
import influxDB from "../../assets/Services/Feautured/influxDB.webp";
import tick from "../../assets/Services/Feautured/tick.webp";
import { Fade, Slide } from "react-awesome-reveal";
import { Grid, Typography } from "@mui/material";
import Footer from "../../page/home/Footer";

function FeaturedServices() {
  const nodered_services = [
    "Flow creation and deployment for device communication.",
    "Integration with various protocols, including MQTT and HTTP.",
    "Real-time data processing and transformation within Node-RED.",
    "Cloud service integration for data exchange and storage.",
  ];
  const telegraf_services = [
    "Agent configuration for data collection from edge devices.",
    " Integration with different data sources, including APIs and databases.",
    "Data preprocessing and transformation for consistent data formats.",
    "Real-time data streaming to downstream storage solutions.",
  ];
  const influxDB_services = [
    "Database setup and configuration for efficient data storage.",
    "Schema design and optimization for fast query performance.",
    "Retention policies and data lifecycle management.",
    "Integration with data analytics tools and visualization platforms.",
  ];
  const grafana_services = [
    "Dashboard creation tailored to your IoT data and KPIs.",
    "Real-time visualization of incoming data streams.",
    "Integration with data sources, including InfluxDB and other databases.",
    "Alerting and notification setup for critical events.",
  ];
  return (
    <>
      <Navbar />
      <section className="homepage">
        <img
          src={background_img}
          alt="Digikloud Company"
          className="services_background_image"
        />
        <header className="feauturedTopHead">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1"> Welcome to DiGiKloud </Typography>
            <Typography variant="h4">
              Simplifying IoT Connectivity and Monitoring
            </Typography>
          </Fade>
        </header>
      </section>
      <section className="productpagecontainer">
        <Fade direction="up" duration={2000} triggerOnce={true}>
          <article className="thingskloud_info" style={{ height: "50vh" }}>
            <Typography variant="h6">
              At DiGiKloud , we specialize in delivering fundamental IoT
              services that streamline edge device connectivity, data storage,
              and monitoring. With our expertise in Node-RED, Telegraf,
              InfluxDB, and Grafana, we provide you with the essential tools to
              build efficient, connected solutions that drive insights,
              efficiency, and control.
            </Typography>
          </article>
        </Fade>
      </section>

      <section className="node_red">
        <article className="nodered_header">
          <Typography variant="h1" textAlign={"center"} color={"white"}>
            Edge Device Connectivity with Node-RED
          </Typography>
          <img src={nodered_bg} alt="" className="nodered_bg_img" />
        </article>
      </section>

      <section className="nodered_container">
        <section className="nodered_details">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <article className="nodered_details_info">
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Empower Your Devices to Communicate
              </h1>
              <Typography variant="h6">
                Node-RED is your gateway to seamless edge device connectivity.
                We help you create and manage flows that enable devices to
                communicate, process data, and interact with cloud services.
                From simple sensors to complex devices, our experts ensure your
                devices are interconnected and ready to transmit crucial
                information.
              </Typography>
              <img src={nodered01} alt="" className="nodered_image" />
            </article>
          </Fade>
          <article className="nodered_services_info">
            <Fade direction="up" duration={2000} triggerOnce={true}>
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our Node-RED Services
              </h1>
              <ul style={{ lineHeight: "3" }}>
                {nodered_services.map((data, ind) => {
                  return <li key={ind}>{data}</li>;
                })}
              </ul>
            </Fade>
          </article>
        </section>
      </section>

      <section className="telegraf">
        <article className="telegraf_header">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1" textAlign={"center"} color={"white"}>
              Efficient Data Collection with Telegraf
            </Typography>
          </Fade>
        </article>
      </section>

      <section className="nodered_container">
        <section className="nodered_details">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <article className="telegraf_details_info">
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Gather Data with Precision
              </h1>
              <Typography variant="h6">
                Telegraf is the backbone of efficient data collection. Our
                Telegraf integration services enable you to gather data from
                diverse sources and prepare it for storage and analysis. We
                assist you in configuring Telegraf agents to collect data from
                edge devices, sensors, and various endpoints, ensuring accurate
                and reliable data transmission.
              </Typography>
              <img src={telegraf01} alt="" className="telegraf_image" />
            </article>

            <article className="nodered_services_info">
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our Telegraf Services
              </h1>
              <ul style={{ lineHeight: "3" }}>
                {telegraf_services.map((data, ind) => {
                  return <li key={ind}>{data}</li>;
                })}
              </ul>
            </article>
          </Fade>
        </section>
      </section>

      <section className="influxDB">
        <article className="influxDB_header">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1" textAlign={"center"} color={"white"}>
              Data Storage Using InfluxDB
            </Typography>
          </Fade>
        </article>
        <article className="influxDB_header-image">
          <img src={telegraf02} alt="" />
        </article>
      </section>

      <section className="nodered_container">
        <section className="nodered_details">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <article className="nodered_details_info">
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                A Robust Repository for Your Data
              </h1>
              <Typography variant="h6">
                InfluxDB is the cornerstone of your data storage strategy. Our
                InfluxDB services guide you in setting up databases that
                efficiently store and organize incoming data. We assist you in
                optimizing database schemas and ensuring that your data is
                readily accessible for analysis and visualization.
              </Typography>
              <img src={influxDB} alt="" className="nodered_image" />
            </article>

            <article className="nodered_services_info">
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our InfluxDB Services
              </h1>
              <ul style={{ lineHeight: "3" }}>
                {influxDB_services.map((data, ind) => {
                  return <li key={ind}>{data}</li>;
                })}
              </ul>
            </article>
          </Fade>
        </section>
      </section>
      <section className="grafana">
        <article className="grafana_header">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1" textAlign={"center"} color={"white"}>
              Monitoring and Visualization with Grafana
            </Typography>
          </Fade>
        </article>
        <article className="influxDB_header-image">
          <img src={grafana01} alt="" />
        </article>
      </section>

      <section className="grafana_container">
        <Grid container className="grafana_detatils">
          <Grid item xs={12} md={12}>
            <h1
              className="typography_heading"
              style={{ textAlign: "center", paddingTop: "50px" }}
            >
              Visualize Insights, Empower Decisions
            </h1>
          </Grid>
          <Grid item xs={12} md={6} className="grafana_info">
            <Slide direction="left" triggerOnce={true} duration={1500}>
              <article className="content_text">
                <Typography variant="p" align="justify">
                  Grafana transforms raw data into actionable insights. Our
                  Grafana services enable you to visualize, analyze, and monitor
                  your IoT data with customizable dashboards. We help you create
                  meaningful visualizations that provide real-time insights,
                  empowering you to make informed decisions.
                </Typography>
              </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} className="costsaving_content_image">
            <Slide direction="right" triggerOnce={true} duration={1000}>
              <img
                src={grafana02}
                alt="iot costsaving_image"
                height="300px"
                width="300px"
              />
            </Slide>
          </Grid>
          <Grid item xs={12}>
            <article className="nodered_services_info">
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our Grafana Services
              </h1>
              <ul style={{ lineHeight: "3" }}>
                {grafana_services.map((data, ind) => {
                  return <li key={ind}>{data}</li>;
                })}
              </ul>
            </article>
          </Grid>
        </Grid>
      </section>

      <Grid container className="feautured">
        <Grid item xs={12} md={6} style={{background : '#00b894'}} >
          <article>
          <h1
                className="typography_heading"
                style={{ textAlign: "center" ,padding:'50px' ,color : 'white'}}
              >
                Why Choose DiGiKloud?
              </h1>
            {/* <Typography variant="h1">Why Choose DiGiKloud?</Typography> */}
          </article>
        </Grid>
        <Grid item xs={12} md={6} className="feautured_data">
          <article className="feautured_info">
            <Img />
            <Typography variant="p">
              Our team consists of experts with deep knowledge of IoT
              technologies.
            </Typography>
          </article>
          <article className="feautured_info">
            <Img />
            <Typography variant="p">
              We offer essential IoT services to kickstart your IoT
              initiatives.Our services are customized to align with your
              specific use cases and goals.
            </Typography>
          </article>
          <article className="feautured_info">
            <Img />
            <Typography variant="p">
              We empower you to extract insights from your IoT data for better
              decision-making.
            </Typography>
          </article>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default FeaturedServices;

export function Img() {
  return <img src={tick} height="50px" width="50px" alt="" />;
}

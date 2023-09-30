import React from "react";
import Navbar from "../../page/home/navbar";
import { Fade, Slide } from "react-awesome-reveal";
import { Grid, Typography } from "@mui/material";
import thingsboard_bg from "../../assets/Services/thingsboard/thingsboard_bg.webp";
import thingsboard01 from "../../assets/Services/thingsboard/thingsboard01.webp";
import thingsboard02 from "../../assets/Services/thingsboard/thingsboard02.webp";
import thingsboard03 from "../../assets/Services/thingsboard/thingsboard03.webp";
import thingsboard04 from "../../assets/Services/thingsboard/thingsboard04.webp";
import tick from "../../assets/Services/Feautured/tick.webp";
import Footer from "../../page/home/Footer";

function Thingsboard() {
  const thingsboard_services = [
    "Device provisioning and registration.",
    "Remote device configuration and control.",
    "Firmware updates and management.",
    "Real-time device monitoring and alerts.",
  ];

  const thingsboard_dataServices = [
    "Data ingestion from diverse sources.",
    "Data preprocessing and transformation.",
    "Integration with external data sources.",
    "Real-time analytics and processing.",
  ];

  const thingsboard_visualization = [
    "Custom dashboard design and development.",
    "Real-time data visualization.",
    "Historical data analysis and trends.",
    "Integration with external visualization tools.",
  ];
  const thingsboard_automationServices = [
    "Rule engine configuration and setup.",
    "Condition-based triggers and alerts.",
    "Integration with external systems.",
    "Workflow automation for efficiency.",
  ];
  return (
    <>
      <Navbar />
      <section className="homepage">
        <img
          src={thingsboard_bg}
          alt="Digikloud Company"
          className="services_background_image"
        />
        <header className="servicesTopHead">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">
              Explore the Power of ThingsBoard IoT Services with DiGiKloud
            </Typography>
          </Fade>
        </header>
      </section>
      <section className="productpagecontainer">
        <Fade direction="up" duration={2000} triggerOnce={true}>
          <article
            className="thingskloud_info"
            style={{ height: "50vh", textAlign: "center" }}
          >
            <Typography variant="h6">
              At DiGikloud, we are your trusted partner in harnessing the full
              potential of ThingsBoard's comprehensive IoT services. Our
              expertise in ThingsBoard offers you a complete ecosystem to
              connect, manage, and optimize your devices and data. With services
              ranging from device management to data visualization, we empower
              you to create intelligent, data-driven solutions that drive
              efficiency, insights, and growth.
            </Typography>
          </article>
        </Fade>
      </section>

      <section>
        <article className="homeContainer">
          <Grid container className="thingsboard_container">
            <Grid item xs={12} md={6}>
              <Slide direction="left" triggerOnce={true} duration={1500}>
                <h1 className="typography_heading">
                  Device Management with ThingsBoard
                </h1>
                <h3 className="homepageSubhead">
                  Effortless Connectivity, Maximum Control
                </h3>
                <article className="content_text">
                  <Typography variant="p" align="justify">
                    Our ThingsBoard Device Management services provide you with
                    the tools to seamlessly connect and manage your IoT devices.
                    Whether it's remote device configuration, firmware updates,
                    or real-time monitoring, we ensure your devices are secure,
                    efficient, and always accessible.
                  </Typography>
                </article>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6} className="costsaving_content_image">
              <Slide direction="right" triggerOnce={true} duration={1000}>
                <img
                  src={thingsboard01}
                  alt="iot costsaving_image"
                  height="300px"
                  width="300px"
                />
              </Slide>
            </Grid>
            <Grid item xs={12} md={12}>
              <article className="nodered_services_info">
                <Fade direction="up" duration={2000} triggerOnce={true}>
                  <h1
                    className="typography_heading"
                    style={{ textAlign: "center" }}
                  >
                    Our ThingsBoard Device Management Services
                  </h1>
                  <ul style={{ lineHeight: "3" }}>
                    {thingsboard_services.map((data, ind) => {
                      return <li key={ind}>{data}</li>;
                    })}
                  </ul>
                </Fade>
              </article>
            </Grid>
          </Grid>
        </article>
      </section>
      <section>
        <article className="homeContainer">
          <Grid container className="thingsboard_container">
            <Grid item xs={12} md={6} className="costsaving_content_image">
              <Slide direction="left" triggerOnce={true} duration={1000}>
                <img
                  src={thingsboard02}
                  alt="iot costsaving_image"
                  height="300px"
                  width="300px"
                />
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="right" triggerOnce={true} duration={1500}>
                <h1 className="typography_heading">
                  Data Ingestion and Processing with ThingsBoard
                </h1>
                <h3 className="homepageSubhead">Data at Your Fingertips</h3>
                <article className="content_text">
                  <Typography variant="p" align="justify">
                    Our Thingsboard Data Ingestion and Processing services allow
                    you to collect, store, and process data from your devices
                    seamlessly. With our expertise, your data becomes a valuable
                    asset, ready to be transformed into insights that drive your
                    business decisions.
                  </Typography>
                </article>
              </Slide>
            </Grid>

            <Grid item xs={12} md={12}>
              <article className="nodered_services_info">
                <Fade direction="up" duration={2000} triggerOnce={true}>
                  <h1
                    className="typography_heading"
                    style={{ textAlign: "center" }}
                  >
                    Our ThingsBoard Data Services
                  </h1>
                  <ul style={{ lineHeight: "3" }}>
                    {thingsboard_dataServices.map((data, ind) => {
                      return <li key={ind}>{data}</li>;
                    })}
                  </ul>
                </Fade>
              </article>
            </Grid>
          </Grid>
        </article>
      </section>
      <section>
        <article className="homeContainer">
          <Grid container className="thingsboard_container">
            <Grid item xs={12} md={6}>
              <Slide direction="left" triggerOnce={true} duration={1500}>
                <h1 className="typography_heading">
                  Advanced Data Visualization with ThingsBoard
                </h1>
                <h3 className="homepageSubhead">
                  Visualize Insights, Drive Action
                </h3>
                <article className="content_text">
                  <Typography variant="p" align="justify">
                    Unlock the power of data visualization with our ThingsBoard
                    services. We create customized dashboards that allow you to
                    monitor, analyze, and interpret your IoT data effortlessly.
                    Whether it's real-time metrics, historical trends, or
                    predictive insights, our dashboards offer you clear,
                    actionable information.
                  </Typography>
                </article>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6} className="costsaving_content_image">
              <Slide direction="right" triggerOnce={true} duration={1000}>
                <img
                  src={thingsboard03}
                  alt="iot costsaving_image"
                  height="300px"
                  width="300px"
                />
              </Slide>
            </Grid>
            <Grid item xs={12} md={12}>
              <article className="nodered_services_info">
                <Fade direction="up" duration={2000} triggerOnce={true}>
                  <h1
                    className="typography_heading"
                    style={{ textAlign: "center" }}
                  >
                    Our ThingsBoard Visualization Services:
                  </h1>
                  <ul style={{ lineHeight: "3" }}>
                    {thingsboard_visualization.map((data, ind) => {
                      return <li key={ind}>{data}</li>;
                    })}
                  </ul>
                </Fade>
              </article>
            </Grid>
          </Grid>
        </article>
      </section>

      <section>
        <article className="homeContainer">
          <Grid container className="thingsboard_container">
            <Grid item xs={12} md={6} className="costsaving_content_image">
              <Slide direction="left" triggerOnce={true} duration={1000}>
                <img
                  src={thingsboard04}
                  alt="iot costsaving_image"
                  height="300px"
                  width="300px"
                />
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="right" triggerOnce={true} duration={1500}>
                <h1 className="typography_heading">
                  Rule Engine and Automation with ThingsBoard
                </h1>
                <h3 className="homepageSubhead">
                  Smart Automation for Efficiency
                </h3>
                <article className="content_text">
                  <Typography variant="p" align="justify">
                    Our ThingsBoard Rule Engine and Automation services enable
                    you to set up automated workflows and trigger actions based
                    on predefined conditions. From simple alerts to complex
                    automation, we help you create intelligent systems that
                    respond dynamically to your IoT data.
                  </Typography>
                </article>
              </Slide>
            </Grid>

            <Grid item xs={12} md={12}>
              <article className="nodered_services_info">
                <Fade direction="up" duration={2000} triggerOnce={true}>
                  <h1
                    className="typography_heading"
                    style={{ textAlign: "center" }}
                  >
                    Our ThingsBoard Automation Services
                  </h1>
                  <ul style={{ lineHeight: "3" }}>
                    {thingsboard_automationServices.map((data, ind) => {
                      return <li key={ind}>{data}</li>;
                    })}
                  </ul>
                </Fade>
              </article>
            </Grid>
          </Grid>
        </article>
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
            ThingsBoard Expertise: Our team of professionals is well-versed in the intricacies of ThingsBoard IoT services.
            </Typography>
          </article>
          <article className="feautured_info">
            <Img />
            <Typography variant="p">
            Comprehensive Solutions: We offer end-to-end services, covering device management, data processing, visualization, and automation.
            </Typography>
          </article>
          <article className="feautured_info">
            <Img />
            <Typography variant="p">
            Custom Tailoring: Our solutions are customized to meet your unique business needs and challenges.
            </Typography>
          </article>
          <article className="feautured_info">
            <Img />
            <Typography variant="p">
            Data-Driven Decisions: We empower you to extract actionable insights from your IoT data
            </Typography>
          </article>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default Thingsboard;

export function Img() {
  return <img src={tick} height="50px" width="50px" alt="" />;
}
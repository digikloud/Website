import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../page/home/navbar";
import { Avatar, Grid, Typography } from "@mui/material";
import video from "../../assets/Product/byop_video.mp4";
import byop01 from "../../assets/Product/byop01.webp";
import byop02 from "../../assets/Product/byop02.png";
import services01 from "../../assets/Product/services01.png";
import services02 from "../../assets/Product/services02.png";
import services03 from "../../assets/Product/services03.png";
import "../product.css";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../page/home/Footer";
import styled from "styled-components";

const Buttons = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Buttons)`
  opacity: 0.9;
  background: #f4f7f9;
  width: 20%;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    background : #00b894;
    width : 20%
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const BYOP = [
  {
    id: "1",
    title: "Customization at Its Best",
    img: "../images/products/BYOP/byop01.webp",
    data: "Our BYOP services revolve around your specific requirements, ensuring a platform that mirrors your goals and objectives.",
  },
  {
    id: "2",
    title: "Expert Consultancy",
    img: "../images/products/BYOP/byop02.webp",
    data: "Our seasoned consultants collaborate closely with you to understand your needs, objectives, and challenges, guiding you towards the ideal IoT architecture.",
  },
  {
    id: "3",
    title: "Engineering Excellence",
    img: "../images/products/BYOP/byop03.webp",
    data: "Our engineering team is well-versed in a multitude of IoT technologies. From device connectivity to data management, we construct each layer with precision.",
  },
  {
    id: "4",
    title: "Scalable Solutions",
    img: "../images/products/BYOP/byop04.webp",
    data: "Your IoT platform should grow as your business does. Our solutions are designed with scalability in mind, accommodating your evolving needs.",
  },
  {
    id: "5",
    title: "Unparalleled Maintenance and Support",
    img: "../images/products/BYOP/byop05.webp",
    data: "Building an IoT platform is just the beginning. We're here for the long haul, providing ongoing maintenance, updates, and support.",
  },
];
function Byop() {
  const [active, setActive] = useState(BYOP[0]);
  const [BYOPdata, setBYOPdata] = useState(
    "Our BYOP services revolve around your specific requirements, ensuring a platform that mirrors your goals and objectives."
  );
  const [img, setImg] = useState("../images/products/BYOP/byop01.webp");

  return (
    <>
      <Helmet>
        <title>Product | BYOP</title>
        <meta
          name="description"
          content="Empower your IoT solution with the versatility of Thingskloud"
        />
        <meta
          name="keywords"
          content="iot thingskloud , digikloud , iot , dashboards , "
        />
      </Helmet>
      <Navbar />
      <section className="homepage">
        <video
          className="backgroundvideo"
          style={{ objectFit: "cover" }}
          muted
          autoPlay
          loop
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className="byop_top_innertext">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">Build your Own Platform</Typography>
            <Typography variant="h4">
              Empower Your Vision with "Build Your Own IoT Platform" (BYOP)
              Services
            </Typography>
          </Fade>
        </header>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <div className="content_text">
                <Typography variant="p" align="justify">
                  At DiGiKloud, we understand that every business is unique, and
                  your IoT needs may demand a tailored solution. That's why
                  we're proud to introduce our "Build Your Own IoT Platform"
                  (BYOP) services. With our expert consultancy, engineering
                  prowess, and steadfast support, we empower you to bring your
                  IoT vision to life, one step at a time.
                </Typography>
              </div>
              <article className="byop_image_container">
                <img src={byop01} alt="" className="byop_images" />
              </article>
            </Fade>
          </Grid>
        </Grid>
      </section>

      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item md={12} style={{ padding: "10px 0" }}>
            <Fade direction="left" duration={2000} triggerOnce={true}>
              <Typography variant="h3" className="typography_heading">
                Why Choose BYOP with DiGiKloud ?
              </Typography>
            </Fade>
          </Grid>
          <Grid item md={12} lg={12} style={{ paddingBottom: "10px" }}>
            <Fade direction="up" duration={1500} triggerOnce={true}>
              <ButtonGroup>
                {BYOP.map((type, ind) => (
                  <ButtonToggle
                    key={ind}
                    active={active === type}
                    style={{
                      cursor: "pointer",
                      width: "20%",
                      fontSize: "15px",
                      fontWeight: "600",
                      padding: "10px 0",
                      border: "1px solid #cdf5ed",
                    }}
                    onClick={() => {
                      setActive(type);
                      setBYOPdata(type.data);
                      setImg(type.img);
                    }}
                  >
                    {type.title}
                  </ButtonToggle>
                ))}
              </ButtonGroup>
            </Fade>
          </Grid>
          <Grid item md={12}>
            <Slide direction="right" triggerOnce={true}>
              <article className="product_info" style={{ height: "500px" }}>
                <img src={img} alt="" className="byop_image" />
                <Typography variant="h5">{BYOPdata}</Typography>
              </article>
            </Slide>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <Typography
                variant="h3"
                style={{ textAlign: "center" }}
                className="typography_heading"
              >
                Our BYOP Services
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Slide triggerOnce={true}>
              <article className="biop_services_container">
                <Avatar
                  sx={{ width: 100, height: 100, bgcolor: "#00b894" }}
                  src={services01}
                />
                <Typography variant="h6">Consultancy Services</Typography>
                <Typography variant="p">
                  We lay the foundation for your IoT success, defining strategy,
                  architecture, and technology stack. With our guidance,
                  navigate complexities and align decisions with business
                  objectives.
                </Typography>
              </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" duration={2000} triggerOnce={true}>
              <article className="biop_services_container">
                <Avatar
                  sx={{ width: 100, height: 100, bgcolor: "#00b894" }}
                  src={services02}
                />
                <Typography variant="h6">Engineering Services</Typography>
                <Typography variant="p">
                  We make your IoT platform a reality, handling device
                  connectivity, data storage, analytics, and visualization for
                  seamless integration and actionable insights.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Slide triggerOnce={true} direction="right">
              <article className="biop_services_container">
                <Avatar
                  sx={{ width: 100, height: 100, bgcolor: "#00b894" }}
                  src={services03}
                />
                <Typography variant="h6">
                  Maintenance and Support Services
                </Typography>
                <Typography variant="p">
                  Our services keep your IoT platform robust, updated, and
                  secure with proactive issue resolution, updates, and
                  responsive assistance.
                </Typography>
              </article>
            </Slide>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <Typography
                variant="h3"
                style={{ textAlign: "center" }}
                className="typography_heading"
              >
                Getting Started
              </Typography>
              <Typography
                variant="h5"
                style={{ textAlign: "center" }}
                className="homepageSubhead"
              >
                Technology brings impactful changes that can make business
                flourish.
              </Typography>
            </Fade>

            <Grid item xs={12} md={12} className="iotx_realtime_card_container">
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  style={{ position: "relative" }}
                >
                  <div className="iotx_realtime_card_innerhead">
                    <Typography variant="p">Track Performance</Typography>
                  </div>
                  {/* <Slide triggerOnce={true}> */}
                  <article className="iotx_realtime_card">
                    <Typography variant="p">
                      Monitor machine performance, production rates, and process
                      parameters in real time to identify trends, patterns, and
                      anomalies for optimizing efficiency.
                    </Typography>
                  </article>
                  {/* </Slide> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  style={{ position: "relative" }}
                >
                  <div className="iotx_realtime_card_innerhead">
                    <Typography variant="p">Quality Assurance</Typography>
                  </div>
                  <article className="iotx_realtime_card">
                    <Typography variant="p">
                      Monitor and analyze data throughout the production process
                      to ensure product quality. Implement real-time corrective
                      actions for consistent quality maintenance.
                    </Typography>
                  </article>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  style={{ position: "relative" }}
                >
                  <div className="iotx_realtime_card_innerhead">
                    <Typography variant="p">Predictive Maintenance</Typography>
                  </div>
                  <article className="iotx_realtime_card">
                    <Typography variant="p">
                      Use IoT device, PLC, and SCADA system data for predictive
                      equipment maintenance. Prevent costly downtimes and extend
                      critical asset lifespan.
                    </Typography>
                  </article>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  style={{ position: "relative" }}
                >
                  <div className="iotx_realtime_card_innerhead">
                    <Typography variant="p">Operational Visibility</Typography>
                  </div>
                  <article className="iotx_realtime_card">
                    <Typography variant="p">
                      Use intuitive dashboards and visualization tools for a
                      comprehensive view of operations. Monitor KPIs to drive
                      continuous improvement.
                    </Typography>
                  </article>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={6}>
            <Slide triggerOnce={true} duration={1500}>
              <Typography variant="h3" className="typography_heading">
                Experience the Future Today
              </Typography>
              <Typography variant="p" align="justify">
                With DiGiKloud's BYOP services, build an IoT platform that
                transforms your business, optimizes processes, and unlocks new
                opportunities. Let's take the first step together.
              </Typography>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6} className="byop_image_container">
            <Slide direction="right" triggerOnce={true}>
              <img src={byop02} alt="" className="nextgen_images" />
            </Slide>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12} className="byop_contact">
            <Fade direction="up" triggerOnce={true}>
              <article className="byop_contact_info">
                <Typography variant="h4">
                  Empower your vision with "Build Your Own IoT Platform"
                  services from Digikloud. Together, we'll make your IoT dreams
                  a reality.
                </Typography>
              </article>
              {/* <Button
                aria-label="book demo"
                style={{
                  borderRadius: 35,
                  backgroundColor: "#00b894",
                  color: "white",
                  margin: "5px",
                  fontSize: "18px",
                }}
                variant="contained"
                onClick={handleClickOpen}
              >
                Book Demo
              </Button> */}
            </Fade>
          </Grid>
        </Grid>
      </section>

      <Footer />
    </>
  );
}

export default Byop;

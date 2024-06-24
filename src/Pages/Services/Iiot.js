import React from "react";
import Navbar from "../../page/home/navbar";
import background from "../../assets/Services/iiot_services_bg.webp";
import { Fade, Slide } from "react-awesome-reveal";
import { Avatar, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import iiot09 from "../../assets/Services/iiot09.webp";
import iiot10 from "../../assets/Services/iiot10.webp";
import iiot11 from "../../assets/Services/iiot11.webp";
import iiot12 from "../../assets/Services/iiot12.webp";
import iiot13 from "../../assets/Services/iiot13.webp";
import iiot14 from "../../assets/Services/iiot14.webp";
import iiot15 from "../../assets/Services/iiot15.webp";
import Footer from "../../page/home/Footer";


const Buttons = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Buttons)`
  opacity: 0.9;
  background: #f4f7f9;
  width: 20%;
  height: 100px;
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

const iiot = [
  {
    id: "1",
    title: "Expertise",
    img: "../images/services/iiot/iiot01.webp",
    data: " Our experienced team of IIoT professionals guides you through every step, ensuring a smooth and successful implementation.",
  },
  {
    id: "2",
    title: "Security",
    img: "../images/services/iiot/iiot02.webp",
    data: "Your data's security is our priority. We implement advanced measures to protect your devices and information.",
  },
  {
    id: "3",
    title: "Scalability",
    img: "../images/services/iiot/iiot03.webp",
    data: "Whether you're a small startup or a large enterprise, our solutions can scale to meet your growing needs.",
  },
  {
    id: "4",
    title: "Customization",
    img: "../images/services/iiot/iiot04.webp",
    data: "We understand that your business is unique. Our services are tailored to fit your specific requirements and goals.",
  },
  {
    id: "5",
    title: "Innovation",
    img: "../images/services/iiot/iiot05.webp",
    data: "Embrace innovation with our cutting-edge Industry 4.0 solutions that keep you ahead in the fast-evolving world of IoT.",
  },
  {
    id: "6",
    title: "Holistic Approach",
    img: "../images/services/iiot/iiot06.webp",
    data: "Our solutions combine real-time monitoring, data integration, and advanced notification systems to provide a complete IoT experience.",
  },
  {
    id: "7",
    title: "Proven Expertise",
    img: "../images/services/iiot/iiot07.webp",
    data: "We excel in MQTT, Modbus, OPC UA, PLC, and SCADA technologies, ensuring seamless implementation and maximum functionality.",
  },
  {
    id: "8",
    title: "Operational Efficiency",
    img: "../images/services/iiot/iiot08.webp",
    data: "Achieve higher efficiency, reduced downtime, and enhanced productivity through our real-time monitoring and notification solutions.",
  },
];

function Iiot() {
  const [active, setActive] = useState(iiot[0]);
  const [iiotdata, setIiotdata] = useState(
    "Our BYOP services revolve around your specific requirements, ensuring a platform that mirrors your goals and objectives."
  );
  const [img, setImg] = useState("../images/services/iiot/iiot01.webp");
  return (
    <>
      <Navbar />
      <section className="homepage">
        <img
          src={background}
          alt="Digikloud Company"
          className="services_background_image"
        />
        <header className="iiotTopHead">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">IIoT Services</Typography>
            <Typography variant="h4">
              Welcome to NextGen IIoT Services: Pioneering Industry 4.0 with
              Cutting-Edge Technologies
            </Typography>
          </Fade>
        </header>
      </section>

      <section>
        <Fade direction="up" duration={1500} triggerOnce={true}>
          <ButtonGroup>
            {iiot.map((type, ind) => (
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
                  setIiotdata(type.data);
                  setImg(type.img);
                }}
              >
                {type.title}
              </ButtonToggle>
            ))}
          </ButtonGroup>
        </Fade>
        <Slide direction="right" triggerOnce={true}>
          <article className="teue" style={{ height: "500px" }}>
            <img src={img} alt="" className="" style={{ height: "80%" }} />
            <Typography variant="h5">{iiotdata}</Typography>
          </article>
        </Slide>
      </section>

      <section className="byoppagecontainer">
        <Grid container style={{ width: "90%" }}>
          <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <Typography variant="h3" className="typography_heading" style={{ textAlign: "center" }}>Our Services</Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
          <Fade direction="up" triggerOnce={true} duration={1000}>
              <article className="biop_services_container">
                <Avatar sx={{ width: "80%", height: "80%" }} src={iiot09} />
                <Typography variant="h6">Industry 4.0 Solutions</Typography>
                <Typography variant="p">
                  Seamlessly integrate the physical and digital realms of your
                  business with our Industry 4.0 solutions. Enhance efficiency,
                  automate processes, and achieve unprecedented levels of
                  productivity.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
          <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="biop_services_container">
                <Avatar sx={{ width: "80%", height: "80%" }} src={iiot10} />
                <Typography variant="h6">Device Connectivity</Typography>
                <Typography variant="p">
                  We specialize in MQTT, Modbus, and OPC UA protocols, enabling
                  seamless and secure device connectivity. Connect disparate
                  devices, sensors, and equipment for real-time data exchange.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="biop_services_container">
                <Avatar sx={{ width: "80%", height: "80%" }} src={iiot11} />
                <Typography variant="h6">Data Integration</Typography>
                <Typography variant="p">
                  Integrate data from various sources using industry-standard
                  protocols. Our expertise in MQTT and Modbus ensures seamless
                  integration, creating a unified data ecosystem.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="biop_services_container">
                <Avatar sx={{ width: "80%", height: "80%" }} src={iiot12} />
                <Typography variant="h6">
                  Data Storage and Visualization
                </Typography>
                <Typography variant="p">
                  Leverage our cloud-based storage solutions to securely manage
                  your data. Visualize complex data sets through SCADA systems
                  and other advanced visualization tools.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="biop_services_container">
                <Avatar sx={{ width: "60%", height: "60%" }} src={iiot13} />
                <Typography variant="h6">
                API Development
                </Typography>
                <Typography variant="p">
                Facilitate cross-platform communication with our API development services. Unlock the potential of data exchange between IoT devices, PLCs, and external applications.
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="biop_services_container">
                <Avatar sx={{ width: "60%", height: "60%" }} src={iiot14} />
                <Typography variant="h6">
                Alert & Notification System
                </Typography>
                <Typography variant="p">
                Utilize MQTT's publish-subscribe model for instant alerts. Receive notifications through MQTT-enabled devices, ensuring timely responses to critical events.                                    
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="biop_services_container">
                <Avatar sx={{ width: "60%", height: "60%" }} src={iiot15} />
                <Typography variant="h6">
                Reports and Analytics
                </Typography>
                <Typography variant="p">
                Enhance decision-making with comprehensive reports and analytics. Extract insights from your IoT data, PLCs, and SCADA systems for optimized operations.
                </Typography>
              </article>
            </Fade>
          </Grid>
        </Grid>
      </section>
      <Footer />
    </>
  );
}

export default Iiot;

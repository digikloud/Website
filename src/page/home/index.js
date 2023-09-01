import React from "react";
import Navbar from "./navbar";
import "./index.css";
import { Typography } from "@mui/material";
import Footer from "./Footer";
import HomeAbout from "./HomeAbout";
import Customer from "./customer";
import Costsaving from "./costsaving";
import Analyzehome from "./analyzehome";
import Dashboadrhomepage from "./dashboadrhomepage";
import video from "../../assets/home1.gif";
import ProtocolsHome from "./IotProtocols";
import Bookdemo from "./bookdemo";
import { Helmet } from "react-helmet";
import Dashboard from "./dashboard";
import { Fade } from "react-awesome-reveal";

function HomeIndex() {
  return (
    <main>
      <Helmet>
        <title>DiGiKloud | IoT Solutions that Transform your Business</title>
        <meta
          name="description"
          content="DiGiKloud is dedicated to providing businesses with secure, dependable, and cutting-edge IoT solutions, empowering them to overcome challenges and achieve their goals. We offer comprehensive services, from analyzing your business needs to implementing and securing your IoT ecosystem."
        />
        <meta name="msvalidate.01" content="E7C8450433A1B04E4DB234FBBCB4D282" />
        <meta
          name="keywords"
          content="digikloud,iot,dasboard,waste management dashboard using iot,solar monitoring dashboard using iot,workplace management using iot,dashboard iot,waste management,solar monitoring,solar dashboard,health management dashboard"
        ></meta>
        <link rel="canonical" href="https://digikloud.io/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <section className="homepage">
        <img
          src={video}
          alt="Digikloud Company"
          className="backgroundvideo"
          muted
          autoPlay
          loop
        />
        <header className="home_top_innertext">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">
              IoT Solutions that Transform your Business
            </Typography>
          </Fade>
        </header>
      </section>

      <HomeAbout />
      <Customer />
      <Dashboadrhomepage />
      <Dashboard />
      <Analyzehome />
      <Costsaving />
      <ProtocolsHome />
      <Bookdemo />
      <Footer />
    </main>
  );
}

export default HomeIndex;

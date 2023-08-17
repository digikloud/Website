import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import "./index.css";
import { Button, Grid, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Footer from "./Footer";
import HomeAbout from "./HomeAbout";
import Customer from "./customer";
import Costsaving from "./costsaving";
import Analyzehome from "./analyzehome";
import Dashboadrhomepage from "./dashboadrhomepage";
import video from "../../assets/home1.gif";
import ProtocolsHome from "./IotProtocols";
import ContactUs from "./contactus";
import Bookdemo from "./bookdemo";
import { Helmet } from "react-helmet";

function HomeIndex() {
  const videoref = useRef();

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
          content="digikloud,iot,dasboard,waste management dashboard using iot,solar monitoring dashboard using iot,workplace management using iot"
        ></meta>
        <link rel="canonical" href="https://digikloud.io/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <section className="homepage">
        <img src={video} className="backgroundvideo" muted autoPlay loop />
        {/* <video autoPlay loop muted className="backgroundvideo">
          <source
          src="https://digikloudwebsite.s3.ap-south-1.amazonaws.com/home.mp4"
            type="video/mp4"
            ref={videoref}
          />
          Your browser does not support the video tag.
        </video> */}
        <header className="home_top_innertext">
          <Typography variant="h1">
            IoT Solutions that Transform your Business
          </Typography>
        </header>
      </section>

      <HomeAbout />
      <Customer />
      <Dashboadrhomepage />
      <Analyzehome />
      <Costsaving />
      <ProtocolsHome />
      <Bookdemo />
      <Footer />
    </main>
  );
}

export default HomeIndex;

function SolutionstoBuild({ title, margin, index, direction }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition =
      document.getElementsByClassName("fade-in-element")[index].offsetTop;

    if (scrollPosition > elementPosition) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visibleclassName = () => {
    if (direction == "left") {
      if (margin) {
        return "visible_margin";
      }
      return "visible";
    } else {
      if (margin) {
        return "visible_right_margin";
      }
      return "visible_right";
    }
  };

  return (
    <>
      <div
        className={`service_content fade-in-element fade-in ${
          isVisible ? visibleclassName() : "invisible"
        }
 `}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          {/* <img src={solar} /> */}
          <Typography variant="h5">{title}</Typography>
        </Stack>
      </div>
    </>
  );
}

SolutionstoBuild.prototype = {
  title: PropTypes.string,
  margin: PropTypes.bool,
  index: PropTypes.number,
  direction: "right" | "left",
};

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import "./index.css";
import { Button, Grid, Stack, Typography } from "@mui/material";
// import gif1 from "../../assets/company presentation.gif";
import a from "../../assets/home.gif";
import home from "../../assets/home.gif";
import PropTypes from "prop-types";
import Footer from "./Footer";
import HomeAbout from "./HomeAbout";
import Customer from "./customer";
import Costsaving from "./costsaving";
import Analyzehome from "./analyzehome";
import Dashboadrhomepage from "./dashboadrhomepage";
import Digikloudplatform from "./digikloudplatform";
import video from "../../assets/company presentation.mp4";
import ProtocolsHome from "./IotProtocols";
import ContactUs from "./contactus";
import Bookdemo from "./bookdemo";

function HomeIndex() {
  const videoref = useRef();

  return (
    <div>
      <div
        // style={{ height: videoref?.current?.clientHeight }}
        className="background_nav"
      >
        <Navbar />
        {/* <img
          // src="https://digikloudwebsite.s3.ap-south-1.amazonaws.com/homePageVideo.gif"
          src={a}
          ref={videoref}
          className="backgroundvideo"
          muted
          autoPlay
          loop
        /> */}
        <video autoPlay loop muted className="backgroundvideo">
          <source
            src="https://digikloudwebsite.s3.ap-south-1.amazonaws.com/digikloud_home.mp4"
            type="video/mp4"
            ref={videoref}
          />
          Your browser does not support the video tag.
        </video>

        <div className="home_top_innertext">
          <Typography variant="h1">
            IoT Solutions that Transform your Business
          </Typography>
        </div>
      </div>
      <HomeAbout />
      <Customer />
      <Dashboadrhomepage />
      <Analyzehome />
      <Costsaving />
      {/* <Digikloudplatform /> */}
      <ProtocolsHome />
      <Bookdemo />
      {/* <ContactUs /> */}
      <Footer />
    </div>
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

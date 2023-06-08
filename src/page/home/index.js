import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import "./index.css";
import video from "../../assets/videonew.webp";
import solar from "../../assets/solar.webp";
import { Grid, Stack, Typography } from "@mui/material";
import Robusthardware from "./robusthardware";
import Integratingwothbrown from "./integratingwothbrown";
import sun from "../../assets/sun.png";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Connect_page from "./connect_page";

function HomeIndex() {
  const videoref = useRef();

  return (
    <div>
      <div
        style={{ height: videoref?.current?.clientHeight }}
        className="background_nav"
      >
        <Navbar />
        <img
          src={video}
          ref={videoref}
          className="backgroundvideo"
          muted
          autoPlay
          loop
        />

        <div className="home_top_innertext">
          <Typography variant="h1" marginBottom={1}>
            Envisaging a brighter future...
          </Typography>
          <Typography variant="h3">
            March towards a sustainable environment will be propelled when
            communities decipher the problems using the potential of data, that
            is available around us in abundance
          </Typography>
        </div>
      </div>

      <div className={`solutions_home`}>
        <Grid container width={"75%"} margin={"auto"} spacing={3}>
          <Grid item md={6}>
            <Typography variant="h2">
              Solutions build to give the meaningful Insights
            </Typography>
          </Grid>
          <Grid item md={6}>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Myriad digital solutions using the IOT, Cloud & Analytics in
                  the utmost efficient way.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Seamless integration of our digital solutions with your
                  existing assets thereby:
                  <br /> Optimizing operations and in turn enhancing the overall
                  value of the underlying asset
                </Typography>
              </li>
            </ul>
          </Grid>

          <Grid item md={4}>
            <Stack spacing={4} className={`service_container`}>
              <SolutionstoBuild
                title="Local PV & Substation SCADA"
                margin
                index={0}
                direction="left"
              />
              <SolutionstoBuild
                title="IOT Based Cloud Scada"
                index={1}
                direction="left"
              />
              <SolutionstoBuild
                title="Portfolio Aggregation"
                index={2}
                direction="left"
              />
              <SolutionstoBuild
                title="Asset Management"
                margin
                index={3}
                direction="left"
              />
            </Stack>
          </Grid>

          <Grid item md={4}>
            <Stack
              alignItems={"center"}
              height="100%"
              justifyContent="center"
              className="sun"
            >
              <img src={sun} className="sun_rotate" />
              <Typography variant="h5">
                UTILITY <br /> C&I
                <br /> RESIDENTIAL
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={4}>
            <Stack spacing={4} className="service_container1">
              <SolutionstoBuild
                title="Predictive Analytics"
                index={0}
                margin
                direction="right"
              />
              <SolutionstoBuild
                title="AI & ML Driven Algorithms"
                index={1}
                direction="right"
              />
              <SolutionstoBuild
                title="Precise Forecast And Scheduling"
                index={2}
                direction="right"
              />
              <SolutionstoBuild
                title="Precise Forecast And Scheduling"
                index={3}
                margin
                direction="right"
              />
            </Stack>
          </Grid>
        </Grid>
      </div>
      <Robusthardware />
      <Integratingwothbrown />
      <Connect_page />
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
          <img src={solar} />
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

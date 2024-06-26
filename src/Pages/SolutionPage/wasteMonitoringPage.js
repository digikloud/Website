import React from "react";
import Navbar from "../../page/home/navbar";
import { Grid,  Typography } from "@mui/material";
import bin from "../../assets/smart waste bin.png";
import smartbin from "../../assets/smart bin sensor.png";
import wasteSorting from "../../assets/waste sorting.png";
import wastedashboard from "../../assets/waste_dashboard_ref.gif";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../page/home/Footer";
import { Fade , Slide} from "react-awesome-reveal";

function WasteMonitoringPage() {
  const [button, setButton] = useState("livedemo_btn_home");

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScrollEvent = (e) => {
    if (window.scrollY > 700) {
      setButton("livedemo_btn");
    } else {
      setButton("livedemo_btn_home");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Waste Management Solution</title>
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
      <Grid container className="solution_container">
        <Grid className="solution_wasteMonitor_page_top_image">
          <div className="solution_home_head health_quote">
          <Fade triggerOnce={true} duration={2000} direction="up">
            <h1 className="solutionTopTag">
              Driving the Future of Waste Management IoT Innovations for Cleaner
              Communities
            </h1>
            </Fade>
          </div>
        </Grid>
        {/* <div className={`${button}`}>
          <Button
            target="_blank"
            href="https://app-demo.digikloudsystems.com/dashboard/923a4bc0-2148-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d"
            variant="outlined"
            style={{
              backgroundColor: "#00b894",
              fontSize: "18px",
              color: "white",
            }}
          >
            Live Demo
          </Button>
        </div> */}
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={6} lg={6}>
          <Slide triggerOnce={true}>
            <h1 className="typography_heading_solution">
              Smart Waste Management
            </h1>
            <div className="content_text">
              <Typography variant="p">
                Smart waste management leverages IoT technology to collect data
                on waste generation patterns, empowering municipalities and
                waste collectors to optimize operations, promote sustainability,
                and make informed decisions.
              </Typography>
            </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <img
              src={bin}
              alt="waste dashboard iot"
              className="images_rightside"
              style={{ width: "300px", height: "300px" }}
            />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={6} lg={6}>
          <Slide triggerOnce={true}>
            <img src={smartbin} alt="waste dashboard iot" className="images" />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <h1 className="typography_heading_solution">Smart Bin Sensor</h1>
            <article className="content_text">
              <Typography variant="p">
                IoT sensors in waste bins use ultrasonic, infrared, or weight
                measurement technologies to monitor real-time fill levels,
                transmitting data wirelessly to a central platform that enables
                waste management authorities to optimize collection routes based
                on current demand rather than fixed schedules.
              </Typography>
            </article>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={6} lg={6}>
          <Slide triggerOnce={true}>
            <h1 className="typography_heading_solution">
              Waste Sorting and Recycling
            </h1>
            <article className="content_text">
              <Typography variant="p">
                IoT-enabled smart bins guide users to sort waste correctly. The
                data collected identifies recycling trends, helping authorities
                improve recycling rates through targeted campaigns.
              </Typography>
            </article></Slide>
          </Grid>
          <Grid item md={6} xs={12}>
          <Slide duration={1500} triggerOnce={true} direction="right">
            <img
              src={wasteSorting}
              alt="waste dashboard iot"
              className="images_rightside"
            />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className=" dashboardpage">
        <Fade triggerOnce={true} duration={2000} direction="up">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">
              Data-Driven Decision-Making and Continuous Improvement
            </h1>
            <article className="content_text">
              <Typography variant="p">
                IoT-enabled smart waste management systems leverage real-time
                data to optimize operations, identify trends, and implement
                targeted waste reduction strategies, advancing efficiency and
                sustainability in urban environments.
              </Typography>
            </article>
          </Grid>
          <Grid item md={12} xs={12}>
            <img
              src={wastedashboard}
              alt="waste dashboard iot"
              className=" dashboard"
            />
          </Grid>
          </Fade>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default WasteMonitoringPage;

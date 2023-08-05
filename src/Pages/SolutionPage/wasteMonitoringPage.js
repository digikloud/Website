import React from "react";
import Navbar from "../../page/home/navbar";
import { Button, Grid, Typography } from "@mui/material";
import bin from "../../assets/smart waste bin.png";
import smartbin from "../../assets/smart bin sensor.png";
import wasteSorting from "../../assets/waste sorting.png";
import binFuture from "../../assets/binFuture.png";
import wastedashboard from "../../assets/wastedashboard.gif";
import { useState } from "react";
import { useEffect } from "react";

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
      <Navbar />
      <Grid container className="solution_container">
        <Grid className="solution_wasteMonitor_page_top_image">
          <div className="solution_home_head health_quote">
            <h1 className="solutionTopTag">
              Driving the Future of Waste Management IoT Innovations for Cleaner
              Communities
            </h1>
          </div>
        </Grid>
        <div className={`${button}`}>
          <Button
            target="_blank"
            href="https://app-demo.digikloudsystems.com/dashboard/923a4bc0-2148-11ee-a07d-712618d34042?publicId=6fe3ef60-1bba-11ee-beec-d9863dec950d"
            variant="outlined"
            style={{
              // borderRadius: 35,
              backgroundColor: "#00b894",
              // color:'black',
              // padding: "18px 36px",
              fontSize: "18px",
            }}
          >
            Live Demo
          </Button>
        </div>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">
              Smart Waste Management{" "}
            </h1>
            <h3>Enhancing Efficiency and Environmental Responsibility</h3>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="p">
              Smart waste management represents a cutting-edge approach to waste
              handling and collection. By leveraging IoT (Internet of Things)
              technology, smart waste management systems gather data on waste
              generation patterns and behaviors. This data empowers
              municipalities, cities, and waste collectors to optimize their
              waste operations, enhance sustainability, and make informed
              business decisions.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={bin} className="images" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">Smart Bin Sensor</h1>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={smartbin} className="images" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="p">
              IoT sensors can be installed in waste bins to monitor their fill
              levels in real-time. These sensors can use ultrasonic, infrared,
              or weight measurement technologies to accurately gauge the fill
              levels of the bins. The data collected by these sensors is
              transmitted wirelessly to a central platform, enabling waste
              management authorities to proactively plan collection routes based
              on actual needs rather than fixed schedules.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">
              Waste Sorting and Recycling
            </h1>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="p">
              IoT technology can facilitate waste sorting and recycling
              processes. Smart bins equipped with IoT sensors and cameras can
              guide users to deposit waste in the correct compartments for
              recycling. This data can be analyzed to identify trends and
              patterns in recycling habits, enabling waste management
              authorities to design targeted education and awareness campaigns
              to improve recycling rates
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={wasteSorting} className="images" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail dashboardpage">
          <Grid item xs={12} md={12} lg={12} >
            <h1 className="typography_heading_solution">
              Data-Driven Decision-Making and Continuous Improvement
            </h1>
          </Grid>
          <Grid item md={6} xs={12} >
            <img src={wastedashboard} className=" dashboard" />
          </Grid>
          <Grid item md={6} xs={12} >
            <Typography variant="p">
              The data generated by IoT-enabled smart waste management systems
              serves as a valuable resource for data-driven decision-making. By
              analyzing trends, patterns, and performance metrics, waste
              management authorities can identify areas for improvement,
              optimize processes, and implement targeted waste reduction
              initiatives. This continuous improvement approach ensures the
              evolution of waste management practices towards greater efficiency
              and sustainability.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item xs={12} md={12} lg={12}>
            <h1 className="typography_heading_solution">
              Embrace the Future of Waste Management with Digikloud
            </h1>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <img src={binFuture} className="images_future" />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button variant="contained">Book Demo</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default WasteMonitoringPage;

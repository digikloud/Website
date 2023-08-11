import React from "react";
import Navbar from "../page/home/navbar";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import "./company.css";
import video from "../assets/CompanyPage/Digikloud Systems.mp4";

function Company() {
  return (
    <div>
      <Navbar />
      <Grid container className="companyPagecontainer">
        <Grid item xs={12} md={12} className="companyHomepage">
          <div className="companypage_tophead">
            <Typography variant="h1">
              Empowering a Connected World Through IoT Innovation
            </Typography>
            <div className="companypage_subhead">
              <Typography variant="h3">Let's get started with yours</Typography>
            </div>
          </div>
        </Grid>
        <Grid container className="company_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">Who we are</h1>
            <div className="content_text">
              <Typography variant="p">
                Welcome to Digikloud, where we're dedicated to revolutionizing
                industries through our cutting-edge IoT platform. Our mission is
                to bridge the gap between the physical and digital realms,
                empowering businesses to harness the power of the Internet of
                Things (IoT) and drive unprecedented innovation, efficiency, and
                growth.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12} className="companyVideo">
            <video
              height="300px"
              width="300px"
              controls
              style={{ borderRadius: "10px" }}
            >
              <source src="https://digikloudwebsite.s3.ap-south-1.amazonaws.com/Digikloud+Systems.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
        </Grid>
        <Grid container className="company_page_detail">
          <Grid item md={12} xs={12}>
            <h1 className="typography_heading_solution">Our IoT Journey</h1>
            <div className="content_text">
              <Typography variant="p">
                In 2022 , Digikloud systems embarked on a journey to reshape the
                way businesses interact with the world around them. From the
                outset, our focus has been on creating a seamless and
                intelligent ecosystem where devices, data, and insights converge
                to create transformative solutions. Today, we stand as pioneers
                in the IoT landscape, helping companies across
                [Industries/Verticals] realize the full potential of
                connectivity.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="company_page_detail">
          <Grid item md={12} xs={12}>
            <h1 className="typography_heading_solution">
              Why Choose Our IoT Platform?
            </h1>
            <div className="content_text">
              <Typography variant="p">
                At Digikloud, we understand that selecting the right IoT
                platform is a critical decision.Beyond providing a platform, we
                offer comprehensive support throughout your IoT journey. From
                consultation and implementation to monitoring and continuous
                innovation, we're here for you every step of the way..
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} className="company_platform_container">
            <Grid item xs={12} md={4} lg={4} className="company_platform">
              <div className="inner_head">
                <Avatar>01</Avatar>
                <Typography variant="h6">Data-Driven Insights</Typography>
              </div>
              <div className="text">
                <Typography variant="p">
                  Write here a key feature of the app or software that is being
                  advertised here.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4} className="company_platform">
              <div className="inner_head">
                <Avatar>02</Avatar>
                <Typography variant="h6">Scalability and Security</Typography>
              </div>
              <div className="text">
                <Typography variant="p">
                  Write here a key feature of the app or software that is being
                  advertised here.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4} className="company_platform">
              <div className="inner_head">
                <Avatar>03</Avatar>
                <Typography variant="h6">Cross-Industry Expertise</Typography>
              </div>
              <div className="text">
                <Typography variant="p">
                  Write here a key feature of the app or software that is being
                  advertised here.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="company_page_detail vision_bg">
          <Grid item xs={12} md={12}>
            <h1 className="typography_heading" style={{color:'white'}}>Our Vision and Values</h1>
            <h3 className="homepageSubhead" style={{color:'white'}}>
              At Digikloud, our vision is clear: to create a connected world
              where innovation knows no bounds. Our values guide us along this
              path
            </h3>
          </Grid>
          <Grid item xs={12} md={12} className="company_vision_container">
            <div className="vision_card">
              <Typography variant="h6">Collaboration</Typography>
              <div className="text">
              <Typography variant="p">
                We believe in the power of collaboration. By working hand in
                hand with clients, partners,and industry leaders, we amplify our
                collective impact.
              </Typography>
              </div>
            </div>
            <div className="vision_card">
              <Typography variant="h6">Reliability</Typography>
              <div className="text">
                <Typography variant="p">
                  Depend on us to deliver reliable solutions that meet your
                  needs today and scale to meet the demands of tomorrow.
                </Typography>
              </div>
            </div>
            <div className="vision_card">
              <Typography variant="h6">Ethics and Integrity</Typography>
              <div className="text">
              <Typography variant="p">
                Our commitment to ethical conduct and integrity ensures that we
                operate with honesty, transparency, and respect in all our
                interactions.
              </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Company;

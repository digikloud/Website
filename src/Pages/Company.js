import React from "react";
import Navbar from "../page/home/navbar";
import { Avatar, Grid, Typography } from "@mui/material";
import "./company.css";
import consultation from "../assets/CompanyPage/consultation.png";
import maintenance from "../assets/CompanyPage/maintanence.png";
import innovation from "../assets/CompanyPage/innovation.png";
import video from "../assets/CompanyPage/Digikloud Systems (1).mp4";
import Footer from "../page/home/Footer";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

function Company() {
  return (
    <div>
      <Helmet>
        <title>Company | DiGiKloud</title>
      </Helmet>
      <Navbar />
      <Grid container className="companyPagecontainer">
        <Grid item xs={12} md={12} className="companyHomepage">
          <div className="companypage_tophead">
            <Fade triggerOnce={true} duration={2000} direction="up">
              <Typography variant="h1">
                Empowering a Connected World Through IoT Innovation
              </Typography>
              <div className="companypage_subhead">
                <Typography variant="h3">
                  Let's get started with yours
                </Typography>
              </div>
            </Fade>
          </div>
        </Grid>
        <Grid container className="company_page_detail company_top01">
          <Grid item md={6} xs={12}>
            <Typography variant="h3" className="typography_heading_solution">
              Who we are
            </Typography>
            <div className="content_text">
              <Typography variant="p">
                Welcome to DiGiKloud, pioneering industry revolution with our
                advanced IoT platform. We bridge the physical and digital
                realms, empowering businesses to leverage IoT for innovation,
                efficiency, and growth.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12} className="companyVideo">
            <video
              className="compny_video_ref"
              controls
              style={{ borderRadius: "10px" }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
        </Grid>
        <Grid container className="company_page_detail company_top01">
          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="typography_heading_solution">
              Our IoT Journey
            </Typography>
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

        <Grid container className="companyPagePlatformandValues">
          <section className="companyPlatformContainer">
            <Grid item xs={12}>
              <Typography
                variant="h3"
                className="typography_heading_solution"
                style={{ color: "white" }}
              >
                Why Choose Our IoT Platform?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <h3 className="homepageSubhead" style={{ color: "white" }}>
                At Digikloud, we understand that selecting the right IoT
                platform is a critical decision.Beyond providing a platform, we
                offer comprehensive support throughout your IoT journey. From
                consultation and implementation to monitoring and continuous
                innovation, we're here for you every step of the way..
              </h3>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12} md={12} className="company_vision_container">
                <div className="vision_card">
                  <div className="inner_head">
                    <Avatar>01</Avatar>
                    <Typography variant="h6">Data-Driven Insights</Typography>
                  </div>
                  <div className="text">
                    <Typography variant="p">
                      IoT devices intelligently connect everyday objects,
                      equipping them with sensors and software to collect and
                      transmit data online.
                    </Typography>
                  </div>
                </div>
                <div className="vision_card">
                  <div className="inner_head">
                    <Avatar>02</Avatar>
                    <Typography variant="h6">
                      Scalability and Security
                    </Typography>
                  </div>
                  <div className="text">
                    <Typography variant="p">
                      Fortify your network and data with robust authentication.
                      We utilize unique device IDs, secure keys, and
                      certificates to guarantee only authorized devices gain
                      access.
                    </Typography>
                  </div>
                </div>
                <div className="vision_card">
                  <div className="inner_head">
                    <Avatar>03</Avatar>
                    <Typography variant="h6">
                      Cross-Industry Expertise
                    </Typography>
                  </div>
                  <div className="text">
                    <Typography variant="p">
                      Cross-industry expertise promotes the transfer of ideas,
                      technologies, and best practices, leading to breakthroughs
                      and advancements.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>
          <section className="companyValuesContainer">
            <Grid item xs={12}>
              <Typography
                variant="h3"
                className="typography_heading_solution"
                style={{ color: "white" }}
              >
                Our Vision and Values
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <h3 className="homepageSubhead" style={{ color: "white" }}>
                At Digikloud, our vision is clear: to create a connected world
                where innovation knows no bounds. Our values guide us along this
                path
              </h3>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12} md={12} className="company_vision_container">
                <div className="vision_card">
                  <Typography variant="h6">Collaboration</Typography>
                  <div className="text">
                    <Typography variant="p">
                      Collaboration with clients, partners, and industry leaders
                      amplifies our collective impact.
                    </Typography>
                  </div>
                </div>
                <div className="vision_card">
                  <Typography variant="h6">Reliability</Typography>
                  <div className="text">
                    <Typography variant="p">
                      Unlock the potential of your business with reliable,
                      scalable solutions.
                    </Typography>
                  </div>
                </div>
                <div className="vision_card">
                  <Typography variant="h6">Ethics and Integrity</Typography>
                  <div className="text">
                    <Typography variant="p">
                      We operate with honesty, transparency, and respect in all
                      interactions.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>
        </Grid>

        <Grid container className="company_page_detail company_top01">
          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="typography_heading_solution">
              Our Promise
            </Typography>
            <div className="content_text">
              <article>
                <Typography variant="p">
                  At Digikloud, we offer more than solutions; we offer a
                  partnership. From conceptualization through implementation to
                  ongoing management, our end-to-end support ensures you're
                  never alone in your IoT journey. Our team of experts is
                  dedicated to addressing your questions, providing guidance,
                  and delivering tailored solutions that align with your unique
                  objectives, challenges, and requirements.
                </Typography>
              </article>
            </div>
          </Grid>
          <Grid item md={12} xs={12} className="promise_image_container">
            <div className="support_info">
              <img
                src={consultation}
                alt="consultation"
                height="50px"
                width="50px"
              />
              <Typography variant="h6">Consultation</Typography>
            </div>
            <div className="support_info">
              <img
                src={maintenance}
                alt="maintanence"
                height="50px"
                width="50px"
              />
              <Typography variant="h6">Monitoring and Maintenance</Typography>
            </div>
            <div className="support_info">
              <img
                src={innovation}
                alt="innovation"
                height="50px"
                width="50px"
              />
              <Typography variant="h6">Continuous Innovation</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="company_page_detail company_top01">
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h3" className="typography_heading_solution">
              What We've Done
            </Typography>
            <div className="content_text">
              <Typography variant="p">
                When you choose DigiKloud IoT, you're choosing a partner with a
                proven track record of success. Let's embark on a journey
                together, harnessing the power of IoT to shape the future of
                your business
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} className="projects_data">
            <div className="projectcard">
              <Typography variant="h1">50+</Typography>
              <Typography variant="body" className="homepageSubhead">
                Projects Delivered
              </Typography>
            </div>
            <div className="projectcard">
              <Typography variant="h1">200+</Typography>
              <Typography variant="body" className="homepageSubhead">
                Connected Devices
              </Typography>
            </div>
            <div className="projectcard">
              <Typography variant="h1">1000+</Typography>
              <Typography variant="body" className="homepageSubhead">
                Messages Per Second
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
export default Company;

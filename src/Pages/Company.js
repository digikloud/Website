import React from "react";
import Navbar from "../page/home/navbar";
import { Avatar, Grid, Typography } from "@mui/material";
import "./company.css";
import consultation from "../assets/CompanyPage/consultation.png";
import maintenance from "../assets/CompanyPage/maintanence.png";
import innovation from "../assets/CompanyPage/innovation.png";
import video from "../assets/CompanyPage/Digikloud Systems (1).mp4";
import Footer from "../page/home/Footer";

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
        <Grid container className="company_page_detail company_top01">
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
        <Grid container className="companyPagecontainer vision_bg">
          <section className="comapny_vision_platform_container">
            <article className="iotPlatformContainer">
              <Grid item xs={12} md={12}>
                <h1 className="typography_heading" style={{ color: "white" }}>
                  Why Choose Our IoT Platform?
                </h1>
                <h3 className="homepageSubhead" style={{ color: "white" }}>
                  At Digikloud, we understand that selecting the right IoT
                  platform is a critical decision.Beyond providing a platform,
                  we offer comprehensive support throughout your IoT journey.
                  From consultation and implementation to monitoring and
                  continuous innovation, we're here for you every step of the
                  way..
                </h3>
              </Grid>
              <Grid item xs={12} md={12} className="company_vision_container">
                <div className="vision_card">
                  <div className="inner_head">
                    <Avatar>01</Avatar>
                    <Typography variant="h6">Data-Driven Insights</Typography>
                  </div>
                  <div className="text">
                    <Typography variant="p">
                      IoT devices are interconnected smart devices embedded with
                      sensors, software, and other technologies that enable them
                      to collect and exchange data over the internet.
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
                      Implement strong authentication mechanisms to ensure that
                      only authorized devices can access the network and data.
                      This can involve using unique device identifiers, secure
                      keys, and certificates.
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
                      Cross-industry expertise encourages the transfer of ideas,
                      technologies, and best practices that can lead to
                      breakthroughs and advancements.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </article>
            <article className="iotPlatformContainer">
              <Grid item xs={12} md={12}>
                <h1 className="typography_heading" style={{ color: "white" }}>
                  Our Vision and Values
                </h1>
                <h3 className="homepageSubhead" style={{ color: "white" }}>
                  At Digikloud, our vision is clear: to create a connected world
                  where innovation knows no bounds. Our values guide us along
                  this path
                </h3>
              </Grid>
              <Grid item xs={12} md={12} className="company_vision_container">
                <div className="vision_card">
                  <Typography variant="h6">Collaboration</Typography>
                  <div className="text">
                    <Typography variant="p">
                      We believe in the power of collaboration. By working hand
                      in hand with clients, partners,and industry leaders, we
                      amplify our collective impact.
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
                      Our commitment to ethical conduct and integrity ensures
                      that we operate with honesty, transparency, and respect in
                      all our interactions.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </article>
          </section>
        </Grid>
        <Grid container className="company_page_detail company_top01">
          <Grid item md={12} xs={12}>
            <h1 className="typography_heading_solution">Our Promise</h1>
            <div className="content_text">
              <article>
                <Typography variant="p">
                  We don't just provide solutions; we provide a partnership.
                  From the conceptualization stage to implementation, and from
                  deployment to ongoing management, our end-to-end support
                  ensures that you're never alone in your IoT journey. Our team
                  of experts will be there to address your questions, provide
                  guidance, and offer solutions tailored to your specific needs.
                </Typography>
              </article>
              <article>
                <Typography variant="p">
                  We understand that every organization's IoT needs are unique.
                  Our approach is not one-size-fits-all. Instead, we collaborate
                  closely with you to understand your objectives, challenges,
                  and requirements. This allows us to craft customized IoT
                  solutions that align with your goals and drive meaningful
                  results.
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
            <h1 className="typography_heading_solution">What We've Done</h1>
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

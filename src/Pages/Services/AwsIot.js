import React from "react";
import Navbar from "../../page/home/navbar";
import aws01 from "../../assets/Services/AWS/aws_01.webp";
import aws02 from "../../assets/Services/AWS/aws02.webp";
import aws03 from "../../assets/Services/AWS/aws03.webp";
import aws04 from "../../assets/Services/AWS/aws04.webp";
import aws05 from "../../assets/Services/AWS/aws05.webp";
import aws06 from "../../assets/Services/AWS/aws06.webp";
import { Fade } from "react-awesome-reveal";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import Footer from "../../page/home/Footer";

function AwsIot() {
  return (
    <div>
      <Navbar />

      <section className="homepage">
        <img
          src={aws01}
          alt="Digikloud Company"
          className="services_background_image"
        />
        <header className="awsiotTopHead">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">AWS IOT Services</Typography>
            <Typography variant="h4">
              Welcome to DiGiKloud - Your Gateway to AWS IoT Excellence
            </Typography>
          </Fade>
        </header>
      </section>

      <section className="productpagecontainer">
        <article className="thingskloud_info">
          <Typography variant="h3" className="highlight_text">
            Deliver smart, connected solutions for growth
          </Typography>
          <Typography variant="h6">
            At DiGiKloud , we specialize in providing a comprehensive suite of
            AWS IoT services that empower businesses to harness the full
            potential of the Internet of Things (IoT) technology. With our
            expertise in AWS IoT Core, DynamoDB, Python Lambda functions, Amazon
            Timestream, and API Gateway, we offer you a seamless path towards
            building smart, connected solutions that drive innovation,
            efficiency, and growth.
          </Typography>
        </article>
      </section>

      <section className="byoppagecontainer">
        <Grid container style={{ width: "80%" }}>
          {/* <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our Services
              </h1>
            </Fade>
          </Grid> */}
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={1000}>
              <article className="awsIot_services_container">
                <Avatar sx={{ width: "50%", height: "50%" }} src={aws02} />
                <Typography variant="h6"> AWS IoT Core</Typography>
                <Typography variant="p">
                  Unleash the Power of Connected Devices
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar sx={{ width: "50%", height: "50%" }} src={aws03} />
                <Typography variant="h6"> DynamoDB</Typography>
                <Typography variant="p">
                  Efficient Data Storage for IoT
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar sx={{ width: "50%", height: "50%" }} src={aws04} />
                <Typography variant="h6">Python Lambda Functions</Typography>
                <Typography variant="p">Automate Your IoT Workflows</Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar sx={{ width: "40%", height: "40%" }} src={aws05} />
                <Typography variant="h6">Amazon Timestream</Typography>
                <Typography variant="p">
                  Time-Series Data Made Simple
                </Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <article className="awsIot_services_container">
                <Avatar sx={{ width: "40%", height: "40%" }} src={aws06} />
                <Typography variant="h6">API Gateway</Typography>
                <Typography variant="p">
                  Seamless Connectivity for Your IoT Ecosystem
                </Typography>
              </article>
            </Fade>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12} className="awsIoT_contact">
            <Fade direction="up" triggerOnce={true}>
              <article>
                <Typography variant="h3" style={{textAlign : 'center'}} className="highlight_text">
                  Get Connected Today
                </Typography>
                <Typography variant="h4">
                  Elevate your Industry 4.0 journey with NextGen IoT Services.
                  Experience the power of real-time monitoring and stay in
                  control with instant email and SMS notifications. Contact us
                  to explore how our tailored solutions can drive your business
                  forward.
                </Typography>
              </article>
              <Button
                aria-label="book demo"
                style={{
                  borderRadius: 35,
                  backgroundColor: "#00b894",
                  color: "white",
                  margin: "5px",
                  fontSize: "18px",
                }}
                variant="contained"
                // onClick={handleClickOpen}
              >
                Book Demo
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </section>
      <Footer />
    </div>
  );
}

export default AwsIot;

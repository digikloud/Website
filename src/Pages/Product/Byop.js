import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../page/home/navbar";
import { Avatar, Grid, Typography } from "@mui/material";
import video from "../../assets/Product/byop_video.mp4";
import byop01 from "../../assets/Product/byop01.webp";
import services01 from "../../assets/Product/services01.png";
import services02 from "../../assets/Product/services02.png";
import services03 from "../../assets/Product/services03.png";
import "../product.css";
import { Fade, Slide } from "react-awesome-reveal";

function Byop() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product | BYOP</title>
        <meta
          name="description"
          content="Empower your IoT solution with the versatility of Thingskloud"
        />
        <meta
          name="keywords"
          content="iot thingskloud , digikloud , iot , dashboards , "
        />
      </Helmet>
      <Navbar />
      <section className="homepage">
        <video className="backgroundvideo" muted autoPlay loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className="byop_top_innertext">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <Typography variant="h1">Build your Own Platform</Typography>
            <Typography variant="h4">
              Empower Your Vision with "Build Your Own IoT Platform" (BYOP)
              Services
            </Typography>
          </Fade>
        </header>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <div className="content_text">
                <Typography variant="p" align="justify">
                  At DiGiKloud, we understand that every business is unique, and
                  your IoT needs may demand a tailored solution. That's why
                  we're proud to introduce our "Build Your Own IoT Platform"
                  (BYOP) services. With our expert consultancy, engineering
                  prowess, and steadfast support, we empower you to bring your
                  IoT vision to life, one step at a time.
                </Typography>
              </div>
              <article className="byop_image_container">
                <img src={byop01} alt="" className="byop_images" />
              </article>
            </Fade>
          </Grid>
        </Grid>
      </section>

      <section className="byoppagecontainer">
        <Grid container className="byop_deails">
          <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce={true} duration={2000}>
              <h1
                className="typography_heading"
                style={{ textAlign: "center" }}
              >
                Our BYOP Services
              </h1>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Slide triggerOnce={true}>
            <article className="biop_services_container">
              <Avatar sx={{ width: 100, height: 100 ,bgcolor : '#00b894'}} src={services01} />
              <Typography variant="h6">Consultancy Services</Typography>
              <Typography variant="p">
                Our consultancy services lay the foundation for your IoT
                success. We work closely with you to define your IoT strategy,
                architecture, and technology stack. With our guidance, you'll
                navigate complexities and make informed decisions that align
                with your business objectives.
              </Typography>
            </article>
            </Slide>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <article className="biop_services_container">
              <Avatar sx={{ width: 100, height: 100 ,bgcolor : '#00b894' }} src={services02} />
              <Typography variant="h6">Engineering Services</Typography>
              <Typography variant="p">
                Our engineering services bring your IoT platform to life. From
                device connectivity and data storage to analytics and
                visualization, we meticulously design and develop each
                component, ensuring they seamlessly integrate and deliver
                actionable insights.
              </Typography>
            </article>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
          <Slide triggerOnce={true} direction="right">
            <article className="biop_services_container">
              <Avatar sx={{ width: 100, height: 100 ,bgcolor : '#00b894' }} src={services03} />
              <Typography variant="h6">
                Maintenance and Support Services
              </Typography>
              <Typography variant="p">
                An IoT platform demands continuous attention. Our maintenance
                and support services ensure your platform remains robust,
                up-to-date, and secure. We proactively address issues, perform
                updates, and offer swift assistance whenever you need it.
              </Typography>
            </article>
            </Slide>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Byop;

import React from "react";
import Navbar from "../page/home/navbar";
import "./product.css";
import { Button, Grid, Stack, Typography } from "@mui/material";
import prod from "../assets/Product/product_home.mp4";
import prod01 from "../assets/Product/prod01.webp";
import prod02 from "../assets/Product/prod02.webp";
import prod03 from "../assets/Product/prod03.webp";
import prod04 from "../assets/Product/prod04.webp";
import Footer from "../page/home/Footer";

function Product() {
  return (
    <>
      <Navbar />
      <section className="product_homepage">
        <article>
        <video
         className="prod_page_video"
         muted autoPlay loop
            >
              <source
                src={prod}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          <header className="product_top_innertext">
            {/* <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={6}
            > */}
              <Typography variant="h1">ThingsKloud</Typography>
              <Typography variant="h3" style={{textAlign :'center'}}>
                Open-source IoT Platform Simplified device handling, data
                compilation, data analysis, and graphical representation to
                empower your IoT solution
              </Typography>
              <Button
                style={{
                  borderRadius: 10,
                  backgroundColor: "#00b894",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Learn More
              </Button>
            {/* </Stack> */}
          </header>
        </article>
      </section>
      <section className="productpagecontainer">
        <article className="thingskloud_info">
          <Typography variant="h3" className="highlight_text">
          Empower your IoT solution with the versatility of Thingskloud
          </Typography>
          <Typography variant="h6">
            Our
            platform enables effortless device connectivity through widely
            recognized IoT protocols, including MQTT, CoAP, and HTTP. With
            support for both cloud and on-premises deployments, Thingskloud
            ensures you're in full control of your data, backed by scalability,
            fault-tolerance, and uncompromised performance.
          </Typography>
        </article>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails" >
          <Grid item xs={12} md={6} lg={6}>
            <h1 className="typography_heading">
              Provision and Manage Devices and Assets with Ease
            </h1>
            <Typography variant="p">
              Welcome to a world of simplified device and asset management
              powered by Thingskloud. Our platform empowers you to effortlessly
              provision, monitor, and manage a wide array of devices and assets,
              creating a seamless IoT ecosystem.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  className="product_images_container">
            <img src={prod01} className="product_image"/>
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails" >
        <Grid item xs={12} md={6} lg={6} className="product_images_container" >
          <img src={prod03} className="product_image" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <h1 className="typography_heading">
              Data at Your Fingertips with Thingskloud
            </h1>
            <Typography variant="p">
              Ensure you never miss a beat with real-time data collection and
              visualization. Thingskloud brings your IoT data to life,
              empowering you with the information you need.
            </Typography>
          </Grid>
          
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails" >
          <Grid item xs={12} md={6} lg={6} >
            <h1 className="typography_heading">
              Data Processing and Intelligent Reaction with Thingskloud
            </h1>
            <Typography variant="p">
              Our platform allows you to take control of your device data like
              never before, offering capabilities to transform, normalize, and
              enrich incoming data. Additionally, you can raise alarms on
              various events, ensuring proactive monitoring and actionable
              insights.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="product_images_container" >
          <img src={prod02} className="product_image" />
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails" >
        <Grid item xs={12} md={6} lg={6} className="product_images_container">
          <img src={prod04} className="product_image" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <h1 className="typography_heading">IoT Rule Engine</h1>
            <Typography variant="p">
              Our platform empowers you to create custom, intricate Rule Chains
              that process data directly from your devices, tailored to
              precisely match your application's unique requirements.
            </Typography>
          </Grid>
         
        </Grid>
      </section>
      <Footer />
    </>
  );
}
export default Product;
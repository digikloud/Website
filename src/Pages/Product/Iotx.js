// import React from "react";
// import Navbar from "../../page/home/navbar";
import iotx_video from "../../assets/Product/product_iotx.mp4";
import iotx02 from "../../assets/Product/iotx02.png";
import iotx03 from "../../assets/Product/iotx03.webp";
import iotx04 from "../../assets/Product/iotx04.png";
import iotx05 from "../../assets/Product/iotx05.png";
import iotx06 from "../../assets/Product/iotx06.png";
import iotx07 from "../../assets/Product/iotx07.png";
// import { Button, Grid, Typography } from "@mui/material";
// import { useState } from "react";
// import Footer from "../../page/home/Footer";
// import styled from 'styled-components';

// const Buttons = styled.button`
//   /* Same as above */
// `;
// const ButtonToggle = styled(Buttons)`
//   opacity: 0.6;
//   ${({ active }) =>
//     active &&
//     `
//     opacity: 1;
//     background : green
//   `}
// `;
// const ButtonGroup = styled.div`
//   display: flex;
// `;

// function Iotx() {
//   const [NextGenData, setNextGenData] = useState(
//     "Our team of experts specializes in MQTT, Modbus, OPC UA, PLCs, and SCADA, ensuring seamless integration and transformation."
//   );
//   const [img, setImg] = useState("./images/products/nextGen/nxtgen01.webp");

//   const NextGenBtn = [
//     {
//       id: 1,
//       title: "IoT Expertise",
//       data: "Our team of experts specializes in MQTT, Modbus, OPC UA, PLCs, and SCADA, ensuring seamless integration and transformation.",
//       img: "./images/products/nextGen/nxtgen01.webp",
//     },
//     {
//       id: 2,
//       title: "IoT ExpertiseIndustry 4.0 Pioneers",
//       data: "Embrace the future of manufacturing with our Industry 4.0 solutions, driving innovation and competitiveness.",
//       img: "./images/products/nextGen/nxtgen02.webp",
//     },
//     {
//       id: 3,
//       title: "Secure Connectivity",
//       data: "Our proficiency in MQTT, Modbus, and OPC UA ensures your data remains secure during transmission and storage.",
//       img: "./images/products/nextGen/nxtgen03.webp",
//     },
//     {
//       id: 4,
//       title: "Tailored Solutions",
//       data: "We understand the unique needs of different industries. Our solutions are customized to align with your business goals.",
//       img: "./images/products/nextGen/nxtgen04.webp",
//     },
//     {
//       id: 5,
//       title: " Global Reach",
//       data: "Regardless of your location, our services are designed to be accessible and adaptable on a global scale.",
//       img: "./images/products/nextGen/nxtgen05.webp",
//     },
//   ];

//   const [active, setActive] = useState(NextGenBtn[0]);
//   console.log(active);

//   return (
//     <>
//       <Navbar />
// <section className="product_homepage">
//   <video className="prod_page_video" muted autoPlay loop>
//     <source src={iotx_video} type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
//   <header className="iotx_top_innertext">
//       <h1>
//         Get your device connected for just $1 per month! <br />
//         Connected your device for &#8377;  100 per month
//       </h1>
//   </header>
// </section>
      // <section className="productpagecontainer">
      //   <Grid container className="product_deails">
      //     <Grid item xs={12} md={6} lg={6} className="iotx-tf">
      //       <article>
      //         <h1 className="typography_heading">
      //           Unlock the Power of IoT with Our Comprehensive Services
      //         </h1>
      //         <article className="content_text">
      //           <Typography variant="p">
      //             In a world driven by technology, harnessing the potential of
      //             the Internet of Things (IoT) has become essential for
      //             businesses and individuals alike. Our NextGen IoT Services
      //             offer a seamless and holistic solution to bring your devices
      //             to life, enabling you to collect, analyze, and utilize data
      //             like never before.
      //           </Typography>
      //         </article>
      //         <Button
      //           style={{
      //             borderRadius: 15,
      //             backgroundColor: "#00b894",
      //             color: "white",
      //             margin: "5px",
      //             fontSize: "18px",
      //           }}
      //           variant="contained"
      //           type="submit"
      //         >
      //           Learn More
      //         </Button>
      //       </article>
      //     </Grid>
      //     <Grid item xs={12} md={6} className="iotx_images_container">
      //       <img src={iotx02} alt="" className="iotx_images" />
      //     </Grid>
      //   </Grid>
      // </section>
//       <section className="productpagecontainer">
//         <Grid container className="product_deails">
//           <Grid item md={12} lg={12} className="nextgen_btns">
//           <ButtonGroup>
//       {NextGenBtn.map((type , ind) => (
//         <ButtonToggle
//           key={ind}
//           active={active === type}
//           onClick={() => setActive(type)}
//         >
//           {type.title}
//         </ButtonToggle>
//       ))}
//     </ButtonGroup>
//           </Grid>
//           <Grid item md={12}>
//             <article className="teue">
//               <img src={img} alt="" className="nextgen_images" />
//               <Typography variant="h6">{NextGenData}</Typography>
//             </article>
//           </Grid>
//         </Grid>
//       </section>
      // <section className="productpagecontainer">
      //   <Grid container className="product_deails">
      //     <Grid item xs={12} md={6} className="iotx_images_container">
      //       <img src={iotx03} alt="" className="iotx_images" />
      //     </Grid>
      //     <Grid item xs={12} md={6} lg={6} className="iotx-tf">
      //       <article>
      //         <h1 className="typography_heading">Device Connectivity</h1>
      //         <h3 className="homepageSubhead">
      //           Seamless Integration, Boundless Possibilities
      //         </h3>
      //         <article className="content_text">
      //           <Typography variant="p">
      //             Our Device Connectivity services ensure that your IoT devices
      //             are seamlessly connected to the network, enabling real-time
      //             data transmission. Whether it's sensors, wearables, industrial
      //             equipment, or smart appliances, we ensure a reliable and
      //             secure connection, giving you the power to monitor and control
      //             your devices remotely.
      //           </Typography>
      //         </article>
      //       </article>
      //     </Grid>
      //   </Grid>
      // </section>
      // <section className="productpagecontainer">
      //   <Grid container className="product_deails">
      //     <Grid item xs={12} md={6} lg={6} className="iotx-tf">
      //       <article>
      //         <h1 className="typography_heading">Data Integration</h1>
      //         <h3 className="homepageSubhead">Unify Data, Unleash Insights</h3>
      //         <article className="content_text">
      //           <Typography variant="p">
      //             Unlock the true potential of your data with our Data
      //             Integration services. We bring together data from diverse
      //             sources, allowing you to create a unified view of your
      //             operations. Our robust integration framework supports various
      //             data protocols, ensuring compatibility and enhancing your
      //             decision-making process.
      //           </Typography>
      //         </article>
      //       </article>
      //     </Grid>
      //     <Grid item xs={12} md={6} className="iotx_images_container">
      //       <img src={iotx04} alt="" className="iotx_images" />
      //     </Grid>
      //   </Grid>
      // </section>
      // <section className="productpagecontainer">
      //   <Grid container className="product_deails">
      //     <Grid item xs={12} md={12} lg={12} className="iotx-tf">
      //       <article>
      //         <h1 className="typography_heading">Real-Time Monitoring</h1>
      //         <article className="content_text">
      //           <Typography variant="p">
      //             Real-time monitoring lies at the heart of Industry 4.0,
      //             enabling businesses to capture data as it's generated and make
      //             immediate, informed choices. With our MQTT, Modbus, OPC UA,
      //             PLC, and SCADA expertise
      //           </Typography>
      //         </article>
      //       </article>
      //     </Grid>
      //     <Grid item xs={12} md={12} className="iotx_realtime_card_container">
      //       <Grid container spacing={1}>
      //         <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
      //           <div className="iotx_realtime_card_innerhead">
      //             <h4>Track Performance</h4>
      //           </div>
      //           <article className="iotx_realtime_card">
      //             <Typography variant="p">
      //               Monitor machine performance, production rates, and process
      //               parameters in real time. Identify trends, patterns, and
      //               anomalies to optimize efficiency.
      //             </Typography>
      //           </article>
      //         </Grid>
      //         <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
      //         <div className="iotx_realtime_card_innerhead">
      //             <h4>Quality Assurance</h4>
      //           </div>
      //           <article className="iotx_realtime_card">
      //             <Typography variant="p">
      //               Ensure product quality by monitoring and analyzing data at
      //               every stage of the production process. Implement corrective
      //               actions in real time to maintain consistent quality.
      //             </Typography>
      //           </article>
      //         </Grid>
      //         <Grid
      //           item
      //           xs={12}
      //           md={6}
      //           lg={6}
      //           style={{ position: "relative" }}
      //         >
      //           <div className="iotx_realtime_card_innerhead">
      //             <h4>Predictive Maintenance</h4>
      //           </div>
      //           <article className="iotx_realtime_card">
      //             <Typography variant="p">
      //               Utilize data from IoT devices, PLCs, and SCADA systems to
      //               predict equipment maintenance needs. Prevent costly
      //               downtimes and extend the lifespan of critical assets..
      //             </Typography>
      //           </article>
      //         </Grid>

      //         <Grid
      //           item
      //           xs={12}
      //           md={6}
      //           lg={6}
      //           style={{ position: "relative" }}
      //         >
      //           <div className="iotx_realtime_card_innerhead">
      //             <h4>Operational Visibility</h4>
      //           </div>
      //           <article className="iotx_realtime_card">
      //             <Typography variant="p">
      //               Gain a comprehensive view of your operations through
      //               intuitive dashboards and visualization tools. Monitor key
      //               performance indicators (KPIs) to drive continuous
      //               improvement.
      //             </Typography>
      //           </article>
      //         </Grid>
      //       </Grid>
      //     </Grid>
      //   </Grid>
      // </section>
      // <section className="productpagecontainer">
      //   <Grid container className="product_deails">
      //     <Grid item xs={12} md={6} lg={6} className="iotx-tf">
      //       <article>
      //         <h1 className="typography_heading">
      //           Alert & Notification System
      //         </h1>
      //         <h3 className="homepageSubhead">Stay Informed, Act Swiftlys</h3>
      //         <article className="content_text">
      //           <Typography variant="p">
      //             Respond promptly to critical events with our Alert &
      //             Notification System. Configure custom alerts based on
      //             real-time data thresholds, ensuring that you're always aware
      //             of changes in your environment. Whether it's a temperature
      //             spike, a security breach, or an operational anomaly, you'll
      //             receive timely alerts via your preferred communication
      //             channel.
      //           </Typography>
      //         </article>
      //       </article>
      //     </Grid>
      //     <Grid item xs={12} md={6} className="iotx_images_container">
      //       <img src={iotx05} alt="" className="iotx_images" />
      //     </Grid>
      //   </Grid>
      // </section>
      // <section className="productpagecontainer">
      //   <Grid container className="product_deails">
      //     <Grid item xs={12} md={6} className="iotx_images_container">
      //       <img src={iotx06} alt="" className="iotx_images" />
      //     </Grid>
      //     <Grid item xs={12} md={6} lg={6} className="iotx-tf">
      //       <article>
      //         <h1 className="typography_heading">Reports and Analytics</h1>
      //         <h3 className="homepageSubhead">
      //           Insights that Drive Excellence
      //         </h3>
      //         <article className="content_text">
      //           <Typography variant="p">
      //             Make informed decisions backed by data-driven insights through
      //             our Reports and Analytics services. Gain deeper understanding
      //             and uncover trends in your operations with comprehensive
      //             reports tailored to your needs. Leverage historical data to
      //             refine strategies and optimize processes for better results.
      //           </Typography>
      //         </article>
      //       </article>
      //     </Grid>
      //   </Grid>
      // </section>
      // <section className="productpagecontainer">
      //   <Grid container className="product_deails">
      //     <Grid item xs={12} md={6} lg={6} className="iotx-tf">
      //       <article>
      //         <h1 className="typography_heading">REST API Service</h1>
      //         <h3 className="homepageSubhead">Empower Your Ecosystem</h3>
      //         <article className="content_text">
      //           <Typography variant="p">
      //             Our API Development services enable you to open new avenues of
      //             innovation by creating interfaces for third-party applications
      //             and services. Seamlessly share data, facilitate integrations,
      //             and foster collaboration within your ecosystem. This empowers
      //             you to build a thriving IoT community around your products and
      //             services.
      //           </Typography>
      //         </article>
      //       </article>
      //     </Grid>
      //     <Grid item xs={12} md={6} className="iotx_images_container">
      //       <img src={iotx07} alt="" className="iotx_images" />
      //     </Grid>
      //   </Grid>
      // </section>
      // <Footer />
//     </>
//   );
// }

// export default Iotx;

import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../page/home/navbar";
import Footer from "../../page/home/Footer";
import { Helmet } from "react-helmet";

const Buttons = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Buttons)`
  opacity: 0.9;
  width : 20% ;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    background : #00b894;
    width : 20%
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

const NextGenBtn = [
  {
    id: 1,
    title: "IoT Expertise",
    data: "Our team of experts specializes in MQTT, Modbus, OPC UA, PLCs, and SCADA, ensuring seamless integration and transformation.",
    img: "../images/products/nextGen/nxtgen01.webp",
  },
  {
    id: 2,
    title: "Industry 4.0 Pioneers",
    data: "Embrace the future of manufacturing with our Industry 4.0 solutions, driving innovation and competitiveness.",
    img: "../images/products/nextGen/nxtgen02.webp",
  },
  {
    id: 3,
    title: "Secure Connectivity",
    data: "Our proficiency in MQTT, Modbus, and OPC UA ensures your data remains secure during transmission and storage.",
    img: "../images/products/nextGen/nxtgen03.webp",
  },
  {
    id: 4,
    title: "Tailored Solutions",
    data: "We understand the unique needs of different industries. Our solutions are customized to align with your business goals.",
    img: "../images/products/nextGen/nxtgen04.webp",
  },
  {
    id: 5,
    title: " Global Reach",
    data: "Regardless of your location, our services are designed to be accessible and adaptable on a global scale.",
    img: "../images/products/nextGen/nxtgen05.webp",
  },
];
function Iotx() {
  const [active, setActive] = useState(NextGenBtn[0]);
  const [NextGenData, setNextGenData] = useState(
    "Our team of experts specializes in MQTT, Modbus, OPC UA, PLCs, and SCADA, ensuring seamless integration and transformation."
  );
  const [img, setImg] = useState("../images/products/nextGen/nxtgen01.webp");
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Product | IoT X</title>
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
      <section className="product_homepage">
        <video className="prod_page_video" muted autoPlay loop>
          <source src={iotx_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className="iotx_top_innertext">
          <h1>
            Get your device connected for just $1 per month! <br />
            Connected your device for &#8377; 100 per month
          </h1>
        </header>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item xs={12} md={6} lg={6} className="iotx-tf">
            <article>
              <h1 className="typography_heading">
                Unlock the Power of IoT with Our Comprehensive Services
              </h1>
              <article className="content_text">
                <Typography variant="p">
                  In a world driven by technology, harnessing the potential of
                  the Internet of Things (IoT) has become essential for
                  businesses and individuals alike. Our NextGen IoT Services
                  offer a seamless and holistic solution to bring your devices
                  to life, enabling you to collect, analyze, and utilize data
                  like never before.
                </Typography>
              </article>
              <Button
                style={{
                  borderRadius: 15,
                  backgroundColor: "#00b894",
                  color: "white",
                  margin: "5px",
                  fontSize: "18px",
                }}
                variant="contained"
                type="submit"
              >
                Learn More
              </Button>
            </article>
          </Grid>
          <Grid item xs={12} md={6} className="iotx_images_container">
            <img src={iotx02} alt="" className="iotx_images" />
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item md={12}>
            <h1 className="typography_heading">
              Why Choose NextGen IoT Services?
            </h1>
          </Grid>
          <Grid item md={12} lg={12} >
            <ButtonGroup>
              {NextGenBtn.map((type, ind) => (
                <ButtonToggle
                  key={ind}
                  active={active === type}
                  style={{
                    cursor: "pointer",
                    width: "20%",
                    fontSize: "15px",
                    fontWeight: "600",
                    padding : "10px 0",
                    border : '1px solid #cdf5ed',
                  }}
                  onClick={() => {
                    setActive(type);
                    setNextGenData(type.data);
                    setImg(type.img);
                  }}
                >
                  {type.title}
                </ButtonToggle>
              ))}
            </ButtonGroup>
          </Grid>
          <Grid item md={12}>
            <article className="teue">
              <img src={img} alt="" className="nextgen_images" />
              <Typography variant="h5">{NextGenData}</Typography>
            </article>
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item xs={12} md={6} className="iotx_images_container">
            <img src={iotx03} alt="" className="iotx_images" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="iotx-tf">
            <article>
              <h1 className="typography_heading">Device Connectivity</h1>
              <h3 className="homepageSubhead">
                Seamless Integration, Boundless Possibilities
              </h3>
              <article className="content_text">
                <Typography variant="p">
                  Our Device Connectivity services ensure that your IoT devices
                  are seamlessly connected to the network, enabling real-time
                  data transmission. Whether it's sensors, wearables, industrial
                  equipment, or smart appliances, we ensure a reliable and
                  secure connection, giving you the power to monitor and control
                  your devices remotely.
                </Typography>
              </article>
            </article>
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item xs={12} md={6} lg={6} className="iotx-tf">
            <article>
              <h1 className="typography_heading">Data Integration</h1>
              <h3 className="homepageSubhead">Unify Data, Unleash Insights</h3>
              <article className="content_text">
                <Typography variant="p">
                  Unlock the true potential of your data with our Data
                  Integration services. We bring together data from diverse
                  sources, allowing you to create a unified view of your
                  operations. Our robust integration framework supports various
                  data protocols, ensuring compatibility and enhancing your
                  decision-making process.
                </Typography>
              </article>
            </article>
          </Grid>
          <Grid item xs={12} md={6} className="iotx_images_container">
            <img src={iotx04} alt="" className="iotx_images" />
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item xs={12} md={12} lg={12} className="iotx-tf">
            <article>
              <h1 className="typography_heading">Real-Time Monitoring</h1>
              <article className="content_text">
                <Typography variant="p">
                  Real-time monitoring lies at the heart of Industry 4.0,
                  enabling businesses to capture data as it's generated and make
                  immediate, informed choices. With our MQTT, Modbus, OPC UA,
                  PLC, and SCADA expertise
                </Typography>
              </article>
            </article>
          </Grid>
          <Grid item xs={12} md={12} className="iotx_realtime_card_container">
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
                <div className="iotx_realtime_card_innerhead">
                  <h4>Track Performance</h4>
                </div>
                <article className="iotx_realtime_card">
                  <Typography variant="p">
                    Monitor machine performance, production rates, and process
                    parameters in real time. Identify trends, patterns, and
                    anomalies to optimize efficiency.
                  </Typography>
                </article>
              </Grid>
              <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
              <div className="iotx_realtime_card_innerhead">
                  <h4>Quality Assurance</h4>
                </div>
                <article className="iotx_realtime_card">
                  <Typography variant="p">
                    Ensure product quality by monitoring and analyzing data at
                    every stage of the production process. Implement corrective
                    actions in real time to maintain consistent quality.
                  </Typography>
                </article>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                style={{ position: "relative" }}
              >
                <div className="iotx_realtime_card_innerhead">
                  <h4>Predictive Maintenance</h4>
                </div>
                <article className="iotx_realtime_card">
                  <Typography variant="p">
                    Utilize data from IoT devices, PLCs, and SCADA systems to
                    predict equipment maintenance needs. Prevent costly
                    downtimes and extend the lifespan of critical assets..
                  </Typography>
                </article>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                style={{ position: "relative" }}
              >
                <div className="iotx_realtime_card_innerhead">
                  <h4>Operational Visibility</h4>
                </div>
                <article className="iotx_realtime_card">
                  <Typography variant="p">
                    Gain a comprehensive view of your operations through
                    intuitive dashboards and visualization tools. Monitor key
                    performance indicators (KPIs) to drive continuous
                    improvement.
                  </Typography>
                </article>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item xs={12} md={6} lg={6} className="iotx-tf">
            <article>
              <h1 className="typography_heading">
                Alert & Notification System
              </h1>
              <h3 className="homepageSubhead">Stay Informed, Act Swiftlys</h3>
              <article className="content_text">
                <Typography variant="p">
                  Respond promptly to critical events with our Alert &
                  Notification System. Configure custom alerts based on
                  real-time data thresholds, ensuring that you're always aware
                  of changes in your environment. Whether it's a temperature
                  spike, a security breach, or an operational anomaly, you'll
                  receive timely alerts via your preferred communication
                  channel.
                </Typography>
              </article>
            </article>
          </Grid>
          <Grid item xs={12} md={6} className="iotx_images_container">
            <img src={iotx05} alt="" className="iotx_images" />
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item xs={12} md={6} className="iotx_images_container">
            <img src={iotx06} alt="" className="iotx_images" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="iotx-tf">
            <article>
              <h1 className="typography_heading">Reports and Analytics</h1>
              <h3 className="homepageSubhead">
                Insights that Drive Excellence
              </h3>
              <article className="content_text">
                <Typography variant="p">
                  Make informed decisions backed by data-driven insights through
                  our Reports and Analytics services. Gain deeper understanding
                  and uncover trends in your operations with comprehensive
                  reports tailored to your needs. Leverage historical data to
                  refine strategies and optimize processes for better results.
                </Typography>
              </article>
            </article>
          </Grid>
        </Grid>
      </section>
      <section className="productpagecontainer">
        <Grid container className="product_deails">
          <Grid item xs={12} md={6} lg={6} className="iotx-tf">
            <article>
              <h1 className="typography_heading">REST API Service</h1>
              <h3 className="homepageSubhead">Empower Your Ecosystem</h3>
              <article className="content_text">
                <Typography variant="p">
                  Our API Development services enable you to open new avenues of
                  innovation by creating interfaces for third-party applications
                  and services. Seamlessly share data, facilitate integrations,
                  and foster collaboration within your ecosystem. This empowers
                  you to build a thriving IoT community around your products and
                  services.
                </Typography>
              </article>
            </article>
          </Grid>
          <Grid item xs={12} md={6} className="iotx_images_container">
            <img src={iotx07} alt="" className="iotx_images" />
          </Grid>
        </Grid>
      </section>
      <Footer />
    </>
  );
}
export default Iotx;

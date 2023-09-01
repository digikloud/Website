import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";

function ProtocolsHome() {
  const data = [
    {
      id: 1,
      img: "./images/Iotprotocols/lorawan.png",
      title: "lorawan",
      info: "Unleash the Potential of Long-Range IoT with LoRaWAN Connectivity",
    },
    {
      id: 2,
      img: "./images/Iotprotocols/mqtt.png",
      title: "mqtt",
      info: "Accelerate your IoT journey with MQTT's Lightweight power",
    },
    {
      id: 3,
      img: "./images/Iotprotocols/modbus.png",
      title: "modbus",
      info: "Modbus - Your Reliable and Time-Tested IoT Communication Protocol",
    },
    {
      id: 4,
      img: "./images/Iotprotocols/opcUa.png",
      title: "opc ua",
      info: "Secure Data Exchange and Interoperability with OPC UA for IoT",
    },
    {
      id: 5,
      img: "./images/Iotprotocols/kafka.png",
      title: "kafka",
      info: "Real-Time Data Streaming for IoT: Experience the Power of Kafka",
    },
  ];

  return (
    <article className="homeContainer">
      <Grid container className="iotProtocols">
        <Grid item xs={12} md={12} lg={12}>
        <Fade direction="up" triggerOnce={true} duration={1500}>
          <h1 className="typography_heading">Supported IoT protocols</h1>
          <h3 className="homepageSubhead">
            Seamless Connectivity, Boundless Possibilities
          </h3>
          <div className="content_text">
            <Typography variant="p" align="justify">
              At DiGiKloud, we specialize in delivering cutting-edge Internet of
              Things (IoT) solutions that empower businesses and individuals to
              succeed in an interconnected world. With our expertise and
              commitment to staying at the forefront of technology, we support a
              range of industry-leading IoT protocols. These protocols serve as
              the foundation of our IoT ecosystem, facilitating smooth
              communication, data exchange, and seamless integration between
              devices and applications.
            </Typography>
          </div>
          </Fade>
          <Fade direction="up" triggerOnce={true} duration={1500}>

          <div className="Dashboadrhomepagediv">
            <div className="Dashboadrhomecardlayout">
              {data.map((img, id) => {
                return (
                  <div className="card" key={img.id}>
                    <div className="front">
                      <div className="logoFlip">
                        <Stack direction="row">
                          <img
                            src={img.img}
                            alt={img.title}
                            className="img_flipCard"
                          />
                        </Stack>
                        <Typography variant="h6" className="flipCard_subhead">
                          {img.title}
                        </Typography>
                      </div>
                    </div>
                    <div className="back">
                      <Typography
                        variant="h6"
                        className="flipcard_back_content"
                      >
                        {img.info}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </Fade>
        </Grid>
      </Grid>
    </article>
  );
}
export default ProtocolsHome;

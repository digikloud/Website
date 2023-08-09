import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import mqtt from "../../assets/iotprotocols/mqtt.png";
import modbus from "../../assets/iotprotocols/modbus.png";
import lorawan from "../../assets/iotprotocols/lorawan.png";
import opcua from "../../assets/iotprotocols/opcUa.png";
import kafka from "../../assets/iotprotocols/kafka.png";

// function ProtocolsHome() {
//   return (
//     <div className="homeContainer">
//       <Grid
//         container
//         spacing={4}
//         className="iotProtocols"
//         style={{ height: "800px", background: "red" }}
//       >
//         <Grid item xs={12} md={12}>
// <h1 className="typography_heading">Supported IoT protocols</h1>
// <h3 className="homepageSubhead">
//   Seamless Connectivity, Boundless Possibilities
// </h3>
// <div className="content_text">
//   <Typography variant="p" align="justify">
//     At DiGiKloud, we specialize in delivering cutting-edge Internet of
//     Things (IoT) solutions that empower businesses and individuals to
//     succeed in an interconnected world. With our expertise and
//     commitment to staying at the forefront of technology, we support a
//     range of industry-leading IoT protocols. These protocols serve as
//     the foundation of our IoT ecosystem, facilitating smooth
//     communication, data exchange, and seamless integration between
//     devices and applications.
//   </Typography>
// </div>
//           {/* <img src={protocols2} className="iotprotocols_image"/> */}
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           className="iotProtocols_content_image"
//           style={{ background: "blue" }}
//         >
// <div className="card">
//   <div className="front">
//     <div className="logoFlip">
//       <Stack direction="row">
//         {/* <img src={logo} alt="logo" className="img_flipCard"/> */}
//         <Typography variant="h3">props.text</Typography>
//       </Stack>
//       <Typography variant="h3" className="flipCard_subhead">
//         props.heading
//       </Typography>
//       <Typography variant="p">props.info</Typography>
//     </div>
//   </div>
//   <div className="back">
//     <p>props.backcardinfo</p>
//   </div>
// </div>
//           {/* <img src={protocols2213} className="iotprotocols_image"/>   */}
//           {/* <div className="content_text">
//         <Typography variant="p" align="justify">
//             At DiGiKloud, we specialize in delivering cutting-edge Internet of
//             Things (IoT) solutions that empower businesses and individuals to
//             succeed in an interconnected world. With our expertise and
//             commitment to staying at the forefront of technology, we support a
//             range of industry-leading IoT protocols. These protocols serve as
//             the foundation of our IoT ecosystem, facilitating smooth
//             communication, data exchange, and seamless integration between
//             devices and applications.
//           </Typography>
//         </div> */}
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default ProtocolsHome;

function ProtocolsHome() {
  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="iotProtocols">
        <Grid item xs={12} md={12} lg={12}>
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
          <div className="Dashboadrhomepagediv">
            <div className="Dashboadrhomecardlayout">
              <div className="card">
                <div className="front">
                  <div className="logoFlip">
                    <Stack direction="row">
                      <img src={lorawan} alt="logo" className="img_flipCard" />
                    </Stack>
                    <Typography variant="h6" className="flipCard_subhead">
                      lorawan
                    </Typography>
                  </div>
                </div>
                <div className="back">
                  <Typography variant="h6" className="flipcard_back_content">
                    Unleash the Potential of Long-Range IoT with LoRaWAN
                    Connectivity
                  </Typography>
                </div>
              </div>

              <div className="card">
                <div className="front">
                  <div className="logoFlip">
                    <Stack direction="row">
                      <img src={mqtt} alt="logo" className="img_flipCard" />
                    </Stack>
                    <Typography variant="h6" className="flipCard_subhead">
                      mqtt
                    </Typography>
                  </div>
                </div>
                <div className="back">
                  <Typography variant="h6" className="flipcard_back_content">
                    Accelerate your IoT journey with MQTT's Lightweight power
                  </Typography>
                </div>
              </div>

              <div className="card">
                <div className="front">
                  <div className="logoFlip">
                    <Stack direction="row">
                      <img src={modbus} alt="logo" className="img_flipCard" />
                    </Stack>
                    <Typography variant="h6" className="flipCard_subhead">
                      modbus
                    </Typography>
                  </div>
                </div>
                <div className="back">
                  <Typography variant="h6" className="flipcard_back_content">
                    Modbus - Your Reliable and Time-Tested IoT Communication
                    Protocol
                  </Typography>
                </div>
              </div>
              <div className="card">
                <div className="front">
                  <div className="logoFlip">
                    <Stack direction="row">
                      <img src={opcua} alt="logo" className="img_flipCard" />
                    </Stack>
                    <Typography variant="h6" className="flipCard_subhead">
                      opc ua
                    </Typography>
                  </div>
                </div>
                <div className="back">
                  <Typography variant="h6" className="flipcard_back_content">
                    Secure Data Exchange and Interoperability with OPC UA for
                    IoT
                  </Typography>
                </div>
              </div>
              <div className="card">
                <div className="front">
                  <div className="logoFlip">
                    <Stack direction="row">
                      <img src={kafka} alt="logo" className="img_flipCard" />
                    </Stack>
                    <Typography variant="h6" className="flipCard_subhead">
                      kafka
                    </Typography>
                  </div>
                </div>
                <div className="back">
                  <Typography variant="h6" className="flipcard_back_content">
                    Real-Time Data Streaming for IoT: Experience the Power of
                    Kafka
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProtocolsHome;

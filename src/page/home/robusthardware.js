import { Grid,  Typography } from "@mui/material";
import React from "react";
import FlipCard from "../../components/FlipCard";

function Robusthardware() {
  return (
    <div className="robusthardware_bgd">
      <Typography variant="h2">ROBUST HARDWARE</Typography>
      <Card />
    </div>
  );
}

export default Robusthardware;

function Card() {
  const FlipCardDetails = [
    {
      id: 1,
      text: "log",
      heading: "ETA log",
      info: "The perfect data logger",
      backcardinfo:
        "IOT gateway accumulating field data over modbus RS485 & TCP/IP-Integrated DI, DO and AI slots -Protocols supported:HTTP/MQTT/FTP",
    },
  ];
  return (
    <div className="flip_card_container">
      <Grid container>
        <Grid item md={4} className="flip_card">
          <FlipCard
            text={FlipCardDetails[0].text}
            heading={FlipCardDetails[0].heading}
            info={FlipCardDetails[0].info}
            backcardinfo={FlipCardDetails[0].backcardinfo}
          />
        </Grid>

        <Grid item md={4} className="flip_card">
        <FlipCard
            text={FlipCardDetails[0].text}
            heading={FlipCardDetails[0].heading}
            info={FlipCardDetails[0].info}
            backcardinfo={FlipCardDetails[0].backcardinfo}
          />
        </Grid>

        <Grid item md={4} className="flip_card">
        <FlipCard
            text={FlipCardDetails[0].text}
            heading={FlipCardDetails[0].heading}
            info={FlipCardDetails[0].info}
            backcardinfo={FlipCardDetails[0].backcardinfo}
          />
        </Grid>
      </Grid>

      <div className="flip_card_container_bottom">
        <Grid container>
          <Grid item md={6} className="flip_card flip_card_bottom">
          <FlipCard
            text={FlipCardDetails[0].text}
            heading={FlipCardDetails[0].heading}
            info={FlipCardDetails[0].info}
            backcardinfo={FlipCardDetails[0].backcardinfo}
          />
          </Grid>
          <Grid item md={6} className="flip_card flip_card_bottom">
          <FlipCard
            text={FlipCardDetails[0].text}
            heading={FlipCardDetails[0].heading}
            info={FlipCardDetails[0].info}
            backcardinfo={FlipCardDetails[0].backcardinfo}
          />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

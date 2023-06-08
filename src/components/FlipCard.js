import {Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/digi_d_logo.png";

function FlipCard(props) {
  return (
    <div className="card">
      <div className="front">
        <div className="logoFlip">
          <Stack direction="row">
            <img src={logo} alt="logo" className="img_flipCard"/>
            <Typography variant="h3">{props.text}</Typography>
          </Stack>
          <Typography variant="h3" className="flipCard_subhead">{props.heading}</Typography>
          <Typography variant="p">{props.info}</Typography>
        </div>
      </div>
      <div className="back">
        <p>
          {props.backcardinfo}
        </p>
      </div>
    </div>
  );
}

export default FlipCard;

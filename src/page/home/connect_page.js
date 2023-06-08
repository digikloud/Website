import { Grid, Typography } from "@mui/material";
import React, { useEffect, useId, useState } from "react";
import app from "../../assets/app.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PropTypes from "prop-types";

function Connect_page() {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);
  const [fadedown, setFadeDown] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight - 100;
    const elementPosition =
      document.getElementsByClassName("connect_leftanim")[0].offsetTop;

    const elementPosition1 = document.getElementById(id).offsetTop;

    console.log(scrollPosition, elementPosition);
    if (scrollPosition > elementPosition) {
      setIsVisible(true);
    }
    if (scrollPosition > elementPosition1) {
      setFadeDown(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid container className="connect_page">
      <Grid
        item
        md={6}
        className={`connect_right connect_leftanim ${isVisible && "animation"}`}
      >
        <img src={app} height="auto" width="80%" />
      </Grid>
      <Grid item md={6} className="connect_right">
        <div>
          <Typography
            className={`connect_head ${fadedown && "visible"}`}
            variant="h2"
            sx={{ color: "#153d6c", marginBottom: "20px" }}
            id={id}
          >
            COGNETO CONNECT
          </Typography>
          <Typography variant="h3" sx={{ color: "#00b894" }} gutterBottom>
            Get Insights on the Move
          </Typography>

          <ConnectText text="Monitor" />
          <ConnectText text="Sechedule tasks" />
          <ConnectText text="Get instant notifications" />
          <ConnectText text="Android and Ios connect" />
        </div>
      </Grid>
    </Grid>
  );
}

export default Connect_page;

function ConnectText({ text }) {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight - 150;
    const elementPosition = document.getElementById(id).offsetTop;

    if (scrollPosition > elementPosition) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`connect_details ${isVisible && "visible"}`} id={id}>
      <ArrowRightAltIcon sx={{ color: "#00b894" }} />
      <Typography variant="p">{text}</Typography>
    </div>
  );
}

ConnectText.prototype = { text: PropTypes.string };

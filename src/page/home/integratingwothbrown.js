import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useId, useState } from "react";
import integrate from "../../assets/integrate.png";
import PropType from "prop-types";

function Integratingwothbrown() {
  return (
    <div className="integrationbrowncontainer">
      <Grid container width={"75%"} padding={"0 15px"} margin="auto">
        <Grid item md={12}>
          <Typography variant="h2">
            INTEGRATING WITH THE BROWNFIELD PROJECTS
          </Typography>
          <br />
          <br />
        </Grid>
        <Grid item md={8} sm={12} xs={12} marginTop={"40px"}>
          <Stack height="100%">
            <AnimationCard text="Any topology" />
            <AnimationCard text="Any hardware" />
            <AnimationCard text="Any communication methodology" />
          </Stack>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <img src={integrate} width={220} />
        </Grid>

        <Grid item md={12}>
          <br />
          <br />
          <Typography variant="h4">WE INTEGRATE ALL</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Integratingwothbrown;

function AnimationCard({ text }) {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
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
    <div className={`integration_content ${isVisible && "visible"}`} id={id}>
      <Typography variant="h3">{text}</Typography>
    </div>
  );
}

AnimationCard.prototype = { text: PropType.string };

import { Grid, Typography } from "@mui/material";
import React from "react";
import building from "../../assets/smart building.png";
import solar from "../../assets/solar1.png";
import waste from "../../assets/waste management.png";
import hospital from "../../assets/health management.png";
import occupancy from "../../assets/occupancy management.png";
import { useNavigate } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../components/imageSlider.css";

function Dashboadrhomepage() {
  const navigate = useNavigate();
  return (
    <article className="homeContainer">
      <Grid container className="Dashboadrhomepage">
        <Grid item xs={12} md={12}>
          <h1 className="typography_heading">
            Harness IoT to aggregate data from every asset
          </h1>
          <div className="content_text">
            <Typography variant="p" align="justify">
              Collect and consolidate data from a wide range of assets,
              including machinery, equipment, devices, and infrastructure. This
              process enables organizations to gain a comprehensive and unified
              view of their operations, facilitating better decision
              making,optimization,andefficiency improvements.
            </Typography>
          </div>
          <div className="Dashboadrhomepagediv">
            <div className="Dashboadrhomecardlayout">
              <div className="Dashboadrhomecard" mt={"10px"}>
                <img
                  src={building}
                  alt="Smart Building using IoT"
                  height="50px"
                  width="50px"
                />
                <Typography variant="h6">Smart Building</Typography>
                <ArrowForwardIcon />
              </div>
              <div
                className="Dashboadrhomecard"
                onClick={() => {
                  navigate("/solution/workplacemanagement");
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={occupancy}
                  alt="Workplace Management using IoT"
                  height="40px"
                  width="40px"
                />
                <Typography variant="h6">Workplace Management</Typography>
                <ArrowForwardIcon />
              </div>
              <div
                className="Dashboadrhomecard"
                onClick={() => {
                  navigate("/solution/healthmanagement");
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={hospital}
                  alt="Health Management using IoT"
                  height="50px"
                  width="50px"
                />
                <Typography variant="h6">Health Management</Typography>
                <ArrowForwardIcon />
              </div>
            </div>
            <div className="Dashboadrhomecardlayout">
              <div
                className="Dashboadrhomecard"
                onClick={() => {
                  navigate("/solution/solarmonitoring");
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={solar}
                  alt="Solar Panel using IoT"
                  height="50px"
                  width="50px"
                />
                <Typography variant="h6">Solar Panel</Typography>
                <ArrowForwardIcon />
              </div>
              <div
                className="Dashboadrhomecard"
                onClick={() => {
                  navigate("/solution/wastemonitoring");
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={waste}
                  alt="Waste Management using IoT"
                  height="50px"
                  width="50px"
                />
                <Typography variant="h6">Waste Management</Typography>
                <ArrowForwardIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </article>
  );
}

export default Dashboadrhomepage;

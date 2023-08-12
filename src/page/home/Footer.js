import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import digikloud from "../../assets/digikloud.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <footer className="footer">
      <Grid container className="footer_container">
        <Grid item md={4} xs={12} className="footer_logo">
          <Stack justifyContent="center" height="100%">
            <img src={digikloud} alt="iot company logo" width="300px" />
          </Stack>
        </Grid>
        <Grid item md={4}  xs={12} className="a" >
          <Typography variant="h6" color={"#00b894"} style={{textAlign:'start'}} gutterBottom>
            IoT Dashboards
          </Typography>
          <div className="link_footer">
            <Link to="solutionpage/wastemonitoring" target="_blank" style={{ textDecoration: "none" }}>
              <div className="footer_icon_nav_link">
                <KeyboardArrowRightIcon /> Waste Monitoring
              </div>
            </Link>
            <Link to="solutionpage/solarmonitoring" target="_blank" style={{ textDecoration: "none" }}>
              <div className="footer_icon_nav_link">
                <KeyboardArrowRightIcon /> Solar Monitoring
              </div>
            </Link>
            <Link to="solutionpage/healthmanagement" target="_blank" style={{ textDecoration: "none" }}>
              <div className="footer_icon_nav_link">
                <KeyboardArrowRightIcon /> Health Management
              </div>
            </Link>
            <Link to="solutionpage/workplacemanagement" target="_blank" style={{ textDecoration: "none" }}>
              <div className="footer_icon_nav_link">
                <KeyboardArrowRightIcon /> Workplace Management
              </div>
            </Link>
          </div>
        </Grid>
        <Grid item md={4} xs={12} className="as">
          <Typography variant="h6" color={"#00b894"} marginBottom={"10px"}>
            CONTACT US
          </Typography>
          <div className="footer_address">
            <div className="footer_icon_address">
              <LocationOnIcon sx={{ color: "#00b894", marginRight: "10px" }} />{" "}
              002, Sai Bageecha Apartment,
              <br />
              Channasandra, Bengaluru -560067
              <br />
              India
            </div>
            <Stack direction="column">
              <div className="footer_icon_address">
                <EmailIcon sx={{ color: "#00b894", marginRight: "10px" }} />{" "}
                solutions@digikloudsystems.com
              </div>
            </Stack>
            <Stack direction="row" spacing={2}>
              {/* <div>
                <Link to="/#" style={{ textDecoration: "none" }}>
                  <div className="footer_icon_social">
                    <FacebookIcon />
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/#" style={{ textDecoration: "none" }}>
                  <div className="footer_icon_social">
                    <TwitterIcon />
                  </div>
                </Link>
              </div> */}
              <div>
                <Link to="https://www.linkedin.com/company/digikloud-system/?viewAsMember=true" target="_blank" style={{ textDecoration: "none" }}>
                  <div className="footer_icon_social">
                    <LinkedInIcon />
                  </div>
                </Link>
              </div>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;

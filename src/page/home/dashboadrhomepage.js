import { Grid, Typography } from "@mui/material";
import React from "react";
import building from "../../assets/smart building.png";
import solar from "../../assets/solar1.png";
import waste from "../../assets/waste management.png";
import hospital from "../../assets/health management.png";
import irrigation from "../../assets/smart irrigation.png";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
import Solutionpage from "../../Pages/SolutionPage/solutionpage";


function Dashboadrhomepage() {
  const navigate = useNavigate();
  function click(props){
    navigate('/solutionpage/solar');
    window.scrollTo(0, 0);
  }
  function clicked(){
    navigate('solutionpage');
    window.scrollTo(0,0)
  }
  return (
    <div>
      <Grid container className="Dashboadrhomepage">
        <Grid item xs={12} md={12} lg={12} className="Dashboadrhomepagehead">
          <h1 className="typography_heading">Harness IoT to aggregate data from every asset</h1>
        </Grid>
        <Grid item sx={12} md={6} lg={6} className="Dashboadrhomepagecontent" >
        <Typography
            variant="p"
            align="justify"
            className="dashboard_paragraph"
          >
            Collect and consolidate data from a wide range of assets, including
            machinery, equipment, devices, and infrastructure. This process
            enables organizations to gain a comprehensive and unified view of
            their operations, facilitating betterdecision
            making,optimization,andefficiency improvements.
          </Typography>
        </Grid>
        <Grid item sx={12} md={6} lg={6} className="Dashboadrhomepagediv1 ">
        <div style={{ width: "50%" }} className="Dashboadrhomecardlayout">
          <div className="Dashboadrhomecard" mt={'10px'} >
            <img src={building} height='50px' width='50px'/>
            <Typography align="center">Smart Building </Typography>
          </div>
          <div className="Dashboadrhomecard" onClick={click("irrigation")}>
            <img src={irrigation} height='50px' width='50px'/>
            <Typography align="center">Smart Irrigation </Typography>
          </div>
        </div>
        <div style={{ width: "50%" }} className="Dashboadrhomecardlayout">
          <div className="Dashboadrhomecard" onClick={clicked}>
            <img src={hospital} height='50px' width='50px'/>
            <Typography align="center">Health Management </Typography>
          </div>
          <div className="Dashboadrhomecard">
            <img src={waste} height='50px' width='50px'/>
            <Typography align="center">Waste Management</Typography>
          </div>
          <div className="Dashboadrhomecard" onClick={click}>
            <img src={solar} height='50px' width='50px'/>
            <Typography  align="center">Solar Panel </Typography>
          </div>
        </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboadrhomepage;

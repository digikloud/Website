import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import "./navbar.css";
import { Stack, Typography } from "@mui/material";
import digikloud from "../../assets/final file.png";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const drawerWidth = 240;

function Navbar() {
  const [color, setColor] = useState("white_nav");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      setColor("white_nav");
    } else {
      setColor("white_nav");
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const solution = () => {
    // navigate("/solutionpage");
    window.scrollTo(0, 0);
    setAnchorEl(null);
  };
  // const solar = () => {
  //   navigate("/solutionpage/solar");
  //   window.scrollTo(0, 0);
  //   setAnchorEl(null);
  // };
  // const wasteMonitoring = () => {
  //   navigate("solutionpage/wastemonitoring");
  //   setAnchorEl(null);
  // }

  const health = () => {
    navigate("/solutionpage/healthmanagement");
    window.scrollTo(0, 0);
  }
  const solar = () => {
    navigate("/solutionpage/solarmonitoring");
    window.scrollTo(0, 0);
  }
  const waste = () => {
    navigate("/solutionpage/wastemonitoring");
    window.scrollTo(0, 0);
  }

  useEffect( () => {
    const home = () =>{
      navigate("/");
      window.scrollTo(0, 0);
      console.log("s")
    }
    
    const element = document.getElementById("logo");
    element.addEventListener("click" , home);

    // const element1 = document.getElementById("healthpage");
    // element1.addEventListener("click" , health)
  },[]

  )

  return (
    <div className={`${color} navbar_container`}>
      <div>
        <div id="logo" className="digi_logo">
          <img src={digikloud} width="200px" id="logo"/>
        </div>

        <Stack direction="row" spacing={3} alignItems="center">
          <Stack direction="row" spacing={3}>
            <Typography variant="h4">Product</Typography>
            <Typography
              variant="h4"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Solution
            </Typography>
            <Typography variant="h4">Customer</Typography>
            <Typography variant="h4">Resources </Typography>
            <Typography variant="h4">Company </Typography>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              selected={true} 
            >
              <MenuItem onClick={health}  id="healthpage" >Health Management</MenuItem>
              <MenuItem onClick={solar} >Solar Monitoring</MenuItem>
              <MenuItem onClick={waste} >Waste Monitoring</MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Navbar;

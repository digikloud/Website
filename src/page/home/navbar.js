import digikloud from "../../assets/final file.png";
import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";
import { Typography } from "@mui/material";

function Navbar() {
  const [color, setColor] = useState("white_nav");
  const navRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      setColor("white_nav");
    } else {
      setColor("white_nav");
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const health = () => {
    navigate("/solutionpage/healthmanagement");
    window.scrollTo(0, 0);
  };
  const solar = () => {
    navigate("/solutionpage/solarmonitoring");
    window.scrollTo(0, 0);
  };
  const waste = () => {
    navigate("/solutionpage/wastemonitoring");
    window.scrollTo(0, 0);
  };
  const workplace = () => {
    navigate("/solutionpage/workplacemanagement");
    window.scrollTo(0, 0);

  }

  useEffect(() => {
    const home = () => {
      navigate("/");
      window.scrollTo(0, 0);
      console.log("s");
    };

    const element = document.getElementById("logo");
    element.addEventListener("click", home);
  }, []);

  return (
    <div className={`${color} navbar_container`}>
      <header>
        <div id="logo" className="digi_logo">
          <img src={digikloud} width="200px" id="logo" />
        </div>
        <nav ref={navRef}>
          {/* <Stack  spacing={3} alignItems="center">
            <Stack className="nav_links" spacing={3}> */}
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
            // selected={true}
            onTouchMoveCapture={true}
            // variant="soft"
            color="primary"
          >
            <MenuItem onClick={health} id="healthpage">
              Health Management
            </MenuItem>
            <MenuItem onClick={solar}>Solar Monitoring</MenuItem>
            <MenuItem onClick={waste}>Waste Monitoring</MenuItem>
            <MenuItem onClick={workplace}>Smart Workplace Management</MenuItem>
          </Menu>
          {/* </Stack>
          </Stack> */}
          <CloseIcon className="nav-btn nav-close-btn" onClick={showNavbar} />
          {/* <MenuIcon className="nav-btn" onClick={showNavbar} /> */}
          {/* <MenuIcon className="nav-btn" onClick={showNavbar} /> */}
        </nav>
        <MenuIcon className="nav-btn" onClick={showNavbar} />
      </header>
    </div>
  );
}

export default Navbar;

import digikloud from "../../assets/final file.png";
import { Link, useNavigate } from "react-router-dom";
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
  const [anchorElIoT, setanchorElIoT] = useState(null);
  const open = Boolean(anchorEl);
  const iotopen = Boolean(anchorElIoT);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setanchorElIoT(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setanchorElIoT(null);
  };
  const health = () => {
    navigate("/solution/healthmanagement");
    window.scrollTo(0, 0);
  };
  const solar = () => {
    navigate("/solution/solarmonitoring");
    window.scrollTo(0, 0);
  };
  const waste = () => {
    navigate("/solution/wastemonitoring");
    window.scrollTo(0, 0);
  };
  const workplace = () => {
    navigate("/solution/workplacemanagement");
    window.scrollTo(0, 0);
  };
  const iotwaste = () => {
    navigate("/iotdashboards/wastemonitoring");
    window.scrollTo(0, 0);
  };
  const iotSolar = () => {
    navigate("/iotdashboards/solar");
    window.scrollTo(0, 0);
  };

  const solution = [
    {
      id: 1,
      title: "Solar Monitoring",
      click: solar,
    },
    {
      id: 2,
      title: "Waste Monitoring",
      click: waste,
    },
    {
      id: 3,
      title: "Health Management",
      click: health,
    },
    {
      id: 4,
      title: "Workplace Management",
      click: workplace,
    },
  ];

  const iotdashboards = [
    {
      id: 1,
      title: "Solar Monitoring",
      click: iotSolar,
    },
    {
      id: 2,
      title: "Waste Monitoring",
      click: iotwaste,
    },
  ];

  const company = () => {
    navigate("/company");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const home = () => {
      navigate("/");
      window.scrollTo(0, 0);
    };

    const element = document.getElementById("logo");
    element.addEventListener("click", home);
  }, [navigate]);

  return (
    <div className={`${color} navbar_container`}>
      <header>
        <div id="logo" className="digi_logo">
          <img src={digikloud} alt="iot company name" width="200px" id="logo" />
        </div>
        <nav ref={navRef}>
          <Typography variant="h4">Product</Typography>
          {/* <Typography
            variant="h4"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Solution
          </Typography> */}
          <div className="dropdown">
            <div className="content">
              <Typography variant="h4">Solution</Typography>
            </div>
            <button type="button"></button>
            <div className="menu sol">
              {/* <a>
                <Typography onClick={solar}>Solar Monitoring</Typography>
              </a>
              <a>
                <Typography onClick={waste}>Waste Monitoring</Typography>
              </a>
              <a>
                <Typography onClick={health}>Health Management</Typography>
              </a>
              <a>
                <Typography onClick={workplace}>
                  Smart Workplace Management
                </Typography>
              </a> */}

              {solution.map((solution, id) => {
                return (
                  <a key={solution.id}>
                    <Typography onClick={solution.click}>
                      {solution.title}
                    </Typography>
                  </a>
                );
              })}
            </div>
          </div>
          <Typography variant="h4">Services </Typography>
          {/* <Typography
            variant="h4"
            id="basic-button1"
            aria-controls={iotopen ? "basic-menu1" : undefined}
            aria-haspopup="true"
            aria-expanded={iotopen ? "true" : undefined}
            onClick={handleClick1}
          >
            IoT Dashboards
          </Typography> */}
          <div className="dropdown">
            <div className="content">
              <Typography variant="h4">IoT Dashboards</Typography>
            </div>
            <button type="button"></button>
            <div className="menu">
              {/* <a>
                <Typography onClick={solar}>Solar Monitoring</Typography>
              </a>
              <a>
                <Typography onClick={waste}>Waste Monitoring</Typography>
              </a>
              <a>
                <Typography onClick={health}>Health Management</Typography>
              </a>
              <a>
                <Typography onClick={workplace}>
                  Smart Workplace Management
                </Typography>
              </a> */}

              {iotdashboards.map((solution, id) => {
                return (
                  <a key={solution.id}>
                    <Typography onClick={solution.click}>
                      {solution.title}
                    </Typography>
                  </a>
                );
              })}
            </div>
          </div>
          {/* <Typography variant="h4" onClick={iotSolar}>IoT Dashboards</Typography> */}
          {/* <Typography variant="h4">Company </Typography> */}
          <Typography variant="h4"  onClick={company}>Company </Typography>
          <Typography variant="h4">Contact Us</Typography>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            onTouchMoveCapture={true}
            color="primary"
          >
            <MenuItem onClick={waste}>Waste Monitoring</MenuItem>
            <MenuItem onClick={solar}>Solar Monitoring</MenuItem>
            <MenuItem onClick={health} id="healthpage">
              Health Management
            </MenuItem>

            <MenuItem onClick={workplace}>Smart Workplace Management</MenuItem>
          </Menu>
          <Menu
            id="basic-menu1"
            anchorEl={anchorElIoT}
            open={iotopen}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button1",
            }}
            onTouchMoveCapture={true}
            color="primary"
          >
            <MenuItem onClick={iotSolar}>Solar Monitoring</MenuItem>
            <MenuItem onClick={iotwaste}>Waste Monitoring</MenuItem>
          </Menu>
          <CloseIcon className="nav-btn nav-close-btn" onClick={showNavbar} />
        </nav>
        <MenuIcon className="nav-btn" onClick={showNavbar} />
      </header>
    </div>
  );
}

export default Navbar;

// export function Link(){
//   return (
//     <Link />
//   )
// }

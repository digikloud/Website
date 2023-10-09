import digikloud from "../../assets/final file.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";

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
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClick1 = (event) => {
  //   setanchorElIoT(event.currentTarget);
  // };
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
      click: "/solution/solarmonitoring",
    },
    {
      id: 2,
      title: "Waste Monitoring",
      click: "/solution/wastemonitoring",
    },
    {
      id: 3,
      title: "Health Management",
      click: "/solution/healthmanagement",
    },
    {
      id: 4,
      title: "Workplace Management",
      click: "/solution/workplacemanagement",
    },
  ];

  const iotdashboards = [
    {
      id: 1,
      title: "Solar Monitoring",
      click: "/iotdashboards/solar",
    },
    {
      id: 2,
      title: "Waste Monitoring",
      click: "/iotdashboards/wastemonitoring",
    },
    {
      id: 3,
      title: "Health Monitoring",
      click: "/iotdashboards/healthmonitoring",
    },
  ];

  const product = [
    {
      id : 1 ,
      title : "Thingskloud" ,
      click : "/product/thingskloud"
    }
    ,
    {
      id : 2 ,
      title : "IoT X" ,
      click : "/product/iot-x"
    }
    ,
    {
      id : 3 ,
      title : "BYOP" ,
      click : "/product/byop"
    }
  ]

  const services = [ 
    {
      id : 1 ,
      title : "IoT Service" ,
      click : "/services"
    }
    ,
    {
      id : 2 ,
      title : "IIoT Service" ,
      click : "/services/iiot"
    }
    ,
    {
      id : 3 ,
      title : "AWS IoT Service" ,
      click : "/services/aws"
    }
    ,
    {
      id : 4 ,
      title : "Azure IoT Service" ,
      click : "/services/azure"
    }
    ,
    {
      id : 5,
      title : "Featured IOT Services",
      click : "/services/featured"
    }
    ,
    {
      id : 6 ,
      title : "Thingsboard Services" ,
      click : "/services/thingsboard"
    }
  ]

  // const contactus = () => {
  //   navigate("/contact-us");
  //   window.scrollTo(0, 0);
  // };

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
          <div className="dropdown">
            <div className="content">
              <Link underline="none" to="#">
              Product
              </Link>
            </div>
            <button type="button"></button>
            <div className="menu">
              {product.map((solution, id) => {
                return (
                  <Link
                    underline="none"
                    to={solution.click}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    key={solution.id}
                  >
                    {solution.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="dropdown">
            <div className="content">
              <Link underline="none" to="#">
                Solution
              </Link>
            </div>
            <button type="button"></button>
            <div className="menu">
              {solution.map((solution, id) => {
                return (
                  <Link
                    underline="none"
                    to={solution.click}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    key={solution.id}
                  >
                    {solution.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="dropdown">
            <div className="content">
              <Link underline="none" to="#">
                Services
              </Link>
            </div>
            <button type="button"></button>
            <div className="menu">
              {services.map((services, id) => {
                return (
                  <Link
                    underline="none"
                    to={services.click}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    key={services.id}
                  >
                    {services.title}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <Link
            underline="none"
            to="/services"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Services
          </Link> */}
          <div className="dropdown">
            <div className="content">
              <Link underline="none" to="#">
                IoT Dashboards
              </Link>
            </div>
            <button type="button"></button>
            <div className="menu">
              {iotdashboards.map((solution, id) => {
                return (
                  <Link
                    underline="none"
                    to={solution.click}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    key={solution.id}
                  >
                    {solution.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <Link
            underline="none"
            to="/company"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Company
          </Link>
          <Link
            underline="none"
            to="/contact-us"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Contact Us
          </Link>

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

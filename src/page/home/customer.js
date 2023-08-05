import { Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import React from "react";
import ambit from "../../assets/Company Logo/ambit.png";
import axis from "../../assets/Company Logo/axis.png";
import axs from "../../assets/Company Logo/axs.png";
import maxbyte from "../../assets/Company Logo/maxbyte.png";
import sasa from "../../assets/Company Logo/sasa.png";
import elausys from "../../assets/Company Logo/elausys.png";
import hilcher from "../../assets/Company Logo/hilcher.png";
import keystone from "../../assets/Company Logo/keystone.png";
import log5data from "../../assets/Company Logo/log5data.png";
import mfc from "../../assets/Company Logo/mfc.png";
import tecnosoft from "../../assets/Company Logo/tecnosoft.png";

function Customer() {
  const customers = [
    {
      id: 1,
      icon: { sasa },
    },
    {
      id: 2,
      icon: "https://keystoneit.tech/assets/img/root/logo-black.png",
    },
  ];

  return (
    <div className="homeContainer">
      <Grid container spacing={4} className="customers">
        <Grid item lg={12} md={12} p={5} align="center">
          <h1>20+ Clients rely on us</h1>
        </Grid>
        <Grid item lg={12} xs={12} style={{ display: "flex" }} p={5}>
          <Marquee>
            {/* {
              customers.map((logo) =>
               <div key={logo.id} className="image_wrapper">
                  <p>{logo.id}</p>
                  <img src={logo.icon} key={logo.id} />
               </div>
              )
            } */}
            <div className="image_wrapper">
              <img src={sasa} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={ambit} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={axis} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={axs} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={maxbyte} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={hilcher} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={elausys} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={log5data} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={keystone} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={mfc} height="150px" width="150px" />
            </div>
            <div className="image_wrapper">
              <img src={tecnosoft} height="150px" width="150px" />
            </div>
          </Marquee>
        </Grid>
      </Grid>
    </div>
  );
}

export default Customer;

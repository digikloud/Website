import { Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import React from "react";

function Customer() {
  return (
    <div>
      <Grid container className="customers">
        <Grid item lg={12} md={12} p={5} align="center">
          <h1>20+ Clients rely on us</h1>
        </Grid>

        <Grid item lg={12} style={{ display: "flex" }} p={5}>
          <Marquee>
            <div className="image_wrapper">
              <img src="https://ambitsoftware.com/wp-content/uploads/2021/01/Ambit_logo_new-crop-2.png" />
            </div>
            <div className="image_wrapper">
              <img src="https://www.technosoft.com/wp-content/uploads/2015/10/TechnoSoft1.png" />
            </div>
            <div className="image_wrapper">
              <img src="https://global-uploads.webflow.com/60674839574cc422f108afa1/6389edff80c0c729e4a11967_logo.svg" />
            </div>
            <div className="image_wrapper">
              <img src="https://img1.wsimg.com/isteam/ip/d306fc29-3c86-4936-8254-f1624a34396e/Axis.png/:/rs=h:84,cg:true,m/qt=q:100/ll" />
            </div>
            <div className="image_wrapper">
              <img src="https://static.wixstatic.com/media/841590_4e9f10a6539847788dad8041fe6beca8~mv2.png/v1/fill/w_210,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SASA%20Full%20Colour%20Logo%20RGB%20(002).png" />
            </div>
            <div className="image_wrapper">
              <img src="https://axsmanagedservices.com/images/Logo-AXS-print-K-no-slogan.svg" />
            </div>
          </Marquee>
        </Grid>
      </Grid>
    </div>
  );
}

export default Customer;

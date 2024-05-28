import { Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import React from "react";

function Customer() {
  const customers = [
    {
      id: 10,
      img: "./images/Customers/uog.png",
      alt: "uog",
    },
    {
      id: 1,
      img: "./images/Customers/ambit.png",
      alt: "ambit",
    },
    {
      id: 2,
      img: "./images/Customers/axis.png",
      alt: "axis",
    },
    {
      id: 3,
      img: "./images/Customers/axs.png",
      alt: "axs",
    },
    {
      id: 4,
      img: "./images/Customers/elausys.png",
      alt: "elausys",
    },
    {
      id: 5,
      img: "./images/Customers/hilcher.png",
      alt: "hilcher",
    },
    {
      id: 6,
      img: "./images/Customers/keystone.png",
      alt: "keystone",
    },
    {
      id: 7,
      img: "./images/Customers/log5data.png",
      alt: "amblog5datait",
    },
    {
      id: 8,
      img: "./images/Customers/maxbyte.png",
      alt: "maxbyte",
    },
    {
      id: 9,
      img: "./images/Customers/mfc.png",
      alt: "mfc",
    },
    {
      id: 19,
      img: "./images/Customers/sasa.png",
      alt: "sasa",
    },
    {
      id: 11,
      img: "./images/Customers/tecnosoft.png",
      alt: "tecnosoft",
    },
  ];

  return (
    <article className="homeContainer">
      <Grid container className="customers">
        <Grid item lg={12} md={12} p={5} align="center">
          <h1>20+ Clients rely on us</h1>
        </Grid>
        <Grid item lg={12} xs={12} style={{ display: "flex" }} p={5}>
          <Marquee>
            {customers.map((img , id) => {
              return (
                <div key={id} className="image_wrapper">
                  <img  src={img.img} alt={img.alt} height="150px" width="150px"/>
                </div>
              );
            })}
          </Marquee>
        </Grid>
      </Grid>
    </article>
  );
}

export default Customer;

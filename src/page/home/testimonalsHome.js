import { Grid, Typography } from "@mui/material";
import React from "react";

function TestimonalsHome() {
  const details = [
    {
      name: "Ellen Downing, Wrode Co.",
      info: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    },
    {
      name: "Douglas Galveston, Sitwell Financial",
      info: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    },
    {
      name: "Kian Graham, Henlow Express",
      info: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    },
  ];

  return (
    <div>
      <Grid container className="testimonials">
        <Grid item md={12}>
          <Typography variant="h2" align="center">
            Client Testimonials
          </Typography>
        </Grid>
        <Grid item md={12} className="test">
          {details.map((details) => (
            <div className="testimonialsContainer">
              <div className="testimonialsName">{details.name}</div>
              <div className="testimonialsInfo">{details.info}</div>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default TestimonalsHome;

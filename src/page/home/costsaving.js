import { Grid, Typography } from '@mui/material';
import React from 'react';
import cost from "../../assets/cost saving insight.png"
import { Padding } from '@mui/icons-material';

function Costsaving() {
    return (
        <div className="homeContainer">
            <Grid container spacing={2} className='costSaving' >
                {/* <Grid item xs={12} lg={12} md={6} className='costsavinghead' >
                    <h1 className="typography_heading">Cost-Saving Insights</h1>
                    <h3 className="homepageSubhead">Minimize Downtimes, Optimize Operations with IoT Analytics</h3>
                </Grid> */}
                <Grid item xs={12} md={6} lg={6} className="costsavingcontent" >
                <h1 className="typography_heading">Cost-Saving Insights</h1>
                    <h3 className="homepageSubhead">Minimize Downtimes, Optimize Operations with IoT Analytics</h3>
                    <Typography variant='p' >IoT analytics offers businesses the opportunity to unlock cost-saving insights by minimizing downtimes and optimizing operations. By leveraging real-time data, predictive maintenance, data-driven decision-making, and supply chain optimization, organizations can drive efficiency, reduce costs, and gain a competitive edge. </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                <img src={cost} height='300px' width='300px' />
                </Grid>
            </Grid>
        </div>
    );
}

export default Costsaving;
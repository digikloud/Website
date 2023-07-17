import { Grid, Typography } from '@mui/material';
import React from 'react';

function Costsaving() {
    return (
        <div>
            <Grid container className='costSaving'>
                <Grid item md={6} className="analyzehomehead">
                    <Typography variant='h2' > Cost-Saving Insights</Typography>
                    <Typography variant='h3' mt={2}>Minimize Downtimes, Optimize Operations with IoT Analytics</Typography>
                    <Typography variant='p' >IoT analytics offers businesses the opportunity to unlock cost-saving insights by minimizing downtimes and optimizing operations. By leveraging real-time data, predictive maintenance, data-driven decision-making, and supply chain optimization, organizations can drive efficiency, reduce costs, and gain a competitive edge. </Typography>
                </Grid>
                <Grid item md={6}>
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default Costsaving;
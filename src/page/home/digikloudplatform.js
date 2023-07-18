import { Grid, Typography } from '@mui/material';
import React from 'react';

function Digikloudplatform() {
    return (
        <div>
            <Grid container>
                <Grid item sx={12} lg={12} md={12}>
                    <Typography variant='h2' align='center'>The DigiKloud Platform</Typography>
                </Grid>
                <Grid item sx={12} md={6} lg={6}>
                    <Typography variant='h2'>Unlock the Full Potential of </Typography>
                    <Typography variant='h2'>Your Business with Digikloud</Typography>
                    <div>
                        <Typography variant='p'>The platform offers flexibility in data storage options, allowing businesses to choose between cloud-based or on-premises solutions based on their requirements.With its scalable and flexible architecture, Digikloud empowers businesses to grow and adapt to changing market dynamics.</Typography>
                    </div>
                </Grid>
                <Grid item>
                    Dashboard Image with scroll
                </Grid>
            </Grid>
        </div>
    );
}

export default Digikloudplatform;
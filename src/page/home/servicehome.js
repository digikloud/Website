import { Grid, Typography } from '@mui/material';
import React from 'react';

function ServiceHome() {
    return (
        <div>
           <Grid container className='servicehome'>
                <Grid item sx={12} md={12}>
                    <Typography variant='h2' align='center'>Our Services</Typography>
                </Grid>
                <Grid item md={4} sx={12} className='jf'>
                    <Typography variant='p' align='center'>Execute & Support IOT Projects on Man-hour Basis</Typography>
                </Grid>
                <Grid item md={4} sx={12} className='jf'>
                    <Typography variant='p' align='center'>Design , Implementation and Maintance Support</Typography>
                </Grid>
                <Grid item md={4} sx={12} className='jf'>
                    <Typography variant='p' align='center'>Cloud IoT Architecture Support</Typography>
                </Grid>
                <Grid item md={6} sx={12} className='jf'>
                    <Typography variant='p' align='center'>Cost Estimation</Typography>
                </Grid>
                <Grid item md={6} sx={12} className='jf'>
                    <Typography variant='p' align='center'>Consultation support</Typography>
                </Grid>
           </Grid>
        </div>
        
    );
}

export default ServiceHome;

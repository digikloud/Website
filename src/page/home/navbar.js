import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Stack, Typography } from '@mui/material'
import digikloud from "../../assets/final file.png"

function Navbar() {
    const [color, setColor] = useState("transparent_nav")


    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

 const listenScrollEvent = e => {
    if (window.scrollY > 400) {
        setColor('white_nav')
    } else {
    setColor("transparent_nav")
    }
  }

    return (
        <div className={`${color} navbar_container`}>
            <div>

                <div>
                    <img src={digikloud} width='200px'/>
                </div>

                <Stack direction="row" spacing={3} alignItems="center">
                    <Stack direction="row" spacing={3}>
                    <Typography variant='h4'>Product</Typography>
                        <Typography variant='h4'>Solution</Typography>
                        <Typography variant='h4'>Customer</Typography>
                        <Typography variant='h4'>Resources </Typography>
                        <Typography variant='h4'>Company </Typography>
                    </Stack>
                </Stack>
            </div>
        </div>
    )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Stack, Typography } from '@mui/material'
import digikloud from "../../assets/final file.png"
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [color, setColor] = useState("transparent_nav")

    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    };
    const solution = () => {
        navigate('/solutionpage')
    }
    
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

                <div onClick={home} className='digi_logo'>
                    <img src={digikloud} width='200px'/>
                </div>

                <Stack direction="row" spacing={3} alignItems="center">
                    <Stack direction="row" spacing={3}>
                    <Typography variant='h4'>Product</Typography>
                        <Typography variant='h4' onClick={solution}>Solution</Typography>
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
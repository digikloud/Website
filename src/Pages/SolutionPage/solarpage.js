import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./solutionpage.css";
import solarenergy from "../../assets/solar energy management.png";
import iotsolar from "../../assets/IoTsolar.png";
import Navbar from "../../page/home/navbar";
import remoteMonitoring from "../../assets/remote monitoring solar.png";
import energyMonitoring from "../../assets/energy monitoring.png";
import solarDashboard from "../../assets/solar_dashboard_ref.gif"
import Footer from "../../page/home/Footer";

function Solutionpage() {
  return (
    <div>
      <Navbar />
      <Grid container className="companyPagecontainer">
         <Grid className="solution_solar_page_top_image">
          <div className="solution_home_head ">
            <h1 className="solutionTopTag">
            Step into the Solar Revolution with Digikloud's IoT-enabled
              Solutions
            </h1>
            <h1 className="solutionTopTag"></h1>
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Solar Energy Management
            </h1>
            <div className="content_text">
              <Typography variant="p">
                Solar energy has emerged as a key player in the global shift
                towards sustainable and renewable energy sources. As the world
                recognizes the importance of reducing carbon emissions and
                combatting climate change, solar power offers a clean and
                abundant alternative. To further optimize solar energy
                generation and consumption, the integration of Internet of
                Things (IoT) technology has revolutionized solar energy
                management. This article explores how IoT is transforming solar
                energy management, enabling more efficient utilization,
                monitoring, and control of solar power systems.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={solarenergy} className="images" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              IoT-enabled Solar Energy Monitoring
            </h1>
            <img src={iotsolar} className="images" />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="content_text">
              <Typography variant="p">
                IoT devices, such as sensors and smart meters, can be deployed
                in solar power systems to gather real-time data on solar panel
                performance, energy production, and environmental conditions.
                This data can be transmitted wirelessly to a central management
                system for analysis and monitoring. By collecting and analyzing
                this data, operators can identify and rectify issues promptly,
                leading to increased overall system efficiency and improved
                maintenance.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Remote Monitoring and Predictive Maintenance
            </h1>
            <div className="content_text">
              <Typography variant="p">
                IoT technology enables remote monitoring of solar energy
                systems, allowing operators to access real-time performance data
                from anywhere. By utilizing predictive maintenance algorithms,
                IoT systems can detect anomalies or potential failures in the
                system components. This proactive approach helps prevent
                downtime, reduces maintenance costs, and extends the lifespan of
                solar panels and other equipment
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={remoteMonitoring} className="images" />
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid md={6} xs={12}>
            <h1 className="typography_heading_solution">
              Energy Monitoring and Analytics
            </h1>
            <img src={energyMonitoring} className="images" />
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="content_text">
              <Typography variant="p">
                With IoT, solar energy system owners and operators gain access
                to comprehensive energy monitoring and analytics tools.
                Real-time data on energy production, consumption, and storage
                can be visualized and analyzed to gain insights into system
                performance, energy usage patterns, and potential areas for
                improvement. These insights can inform energy optimization
                strategies, leading to increased cost savings and overall energy
                efficiency
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail dashboardpage">
          <Grid item md={12} xs={12}>
            <h1 className="typography_heading_solution">
              Digikloud Solar Energy Management Dashboard
            </h1>
            <div className="content_text">
              <Typography variant="p">
                Digikloud's advanced analytics engine provides deep insights
                into your energy usage patterns. Analyze historical data,
                identify peak demand periods, and optimize energy consumption
                based on real-time and forecasted information. Discover
                opportunities for energy savings and efficiency improvements.
              </Typography>
            </div>
          </Grid>
          <Grid item md={12} xs={12} >
            <img src={solarDashboard} className=" dashboard" />        
          </Grid>
          {/* <Grid item md={6} xs={12}>
            <div className="content_text">
              <Typography variant="p">
                Digikloud's advanced analytics engine provides deep insights
                into your energy usage patterns. Analyze historical data,
                identify peak demand periods, and optimize energy consumption
                based on real-time and forecasted information. Discover
                opportunities for energy savings and efficiency improvements.
              </Typography>
            </div>
          </Grid> */}
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default Solutionpage;


  //  <Grid container spacing={4} className="companyPagecontainer">
  //       <Grid item xs={12} md={12} className="companyHomepage">
  //         <div className="companypage_tophead">
  //           <Typography variant="h1">
  //             Empowering a Connected World Through IoT Innovation
  //           </Typography>
  //           <div className="companypage_subhead">
  //             <Typography variant="h3">Let's get started with yours</Typography>
  //           </div>
  //         </div>
  //       </Grid>
  //       <Grid container className="company_page_detail">
  //         <Grid item md={6} xs={12}>
  //           <h1 className="typography_heading_solution">Who we are</h1>
  //           <div className="content_text">
  //             <Typography variant="p">
  //               Welcome to Digikloud, where we're dedicated to revolutionizing
  //               industries through our cutting-edge IoT platform. Our mission is
  //               to bridge the gap between the physical and digital realms,
  //               empowering businesses to harness the power of the Internet of
  //               Things (IoT) and drive unprecedented innovation, efficiency, and
  //               growth.
  //             </Typography>
  //           </div>
  //         </Grid>
  //         <Grid item md={6} xs={12}>
  //           Image
  //         </Grid>
  //       </Grid>
  //       <Grid container className="company_page_detail">
  //         <Grid item md={12} xs={12}>
  //           <h1 className="typography_heading_solution">Our IoT Journey</h1>
  //           <div className="content_text">
  //             <Typography variant="p">
  //               In 2022 , Digikloud systems embarked on a journey to reshape the
  //               way businesses interact with the world around them. From the
  //               outset, our focus has been on creating a seamless and
  //               intelligent ecosystem where devices, data, and insights converge
  //               to create transformative solutions. Today, we stand as pioneers
  //               in the IoT landscape, helping companies across
  //               [Industries/Verticals] realize the full potential of
  //               connectivity.
  //             </Typography>
  //           </div>
  //         </Grid>
  //       </Grid>
  //       <Grid container spacing={4} className="company_page_detail">
  //         <Grid item md={12} xs={12}>
  //           <h1 className="typography_heading_solution">
  //             Why Choose Our IoT Platform?
  //           </h1>
  //           <div className="content_text">
  //             <Typography variant="p">
  //               At Digikloud, we understand that selecting the right IoT
  //               platform is a critical decision.Beyond providing a platform, we
  //               offer comprehensive support throughout your IoT journey. From
  //               consultation and implementation to monitoring and continuous
  //               innovation, we're here for you every step of the way..
  //             </Typography>
  //           </div>
  //         </Grid>
  //         <Grid item xs={12} md={12} className="company_platform_container" >
  //           <Grid item xs={12} md={4} lg={4} className="company_platform">
  //             <div className="inner_head">
  //               <Avatar>01</Avatar>
  //               <Typography variant="h6">Data-Driven Insights</Typography>
  //             </div>
  //             <Typography variant="p">
  //               Write here a key feature of the app or software that is being
  //               advertised here.
  //             </Typography>
  //           </Grid>
  //           <Grid item xs={12} md={4} lg={4} className="company_platform">
  //             <Avatar>02</Avatar>
  //           </Grid>
  //           <Grid item xs={12} md={4} lg={4} className="company_platform">
  //             <Avatar>03</Avatar>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Grid> 
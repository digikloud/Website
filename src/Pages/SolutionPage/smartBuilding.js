import { Grid, Typography } from "@mui/material";
import building1 from "../../assets/building1.png";
import building2 from "../../assets/building2.webp";
import { Helmet } from "react-helmet";
import Footer from "../../page/home/Footer";
import "./solutionpage.css";
import Navbar from "../../page/home/navbar";
// import grafana from "../../assets/grafana.png";
import influxdb from "../../assets/Services/AWS/aws03.webp";
import iothub from "../../assets/Services/Azure/azure01.webp";
// import nodered from "../../assets/nodered.png";
import architecture from "../../assets/uog architecture.png";
import tandam from "../../assets/tandam.png";
import tandam3d from "../../assets/Uog.gif";
import { Slide } from "react-awesome-reveal";
import iiot08 from "../../assets/Services/iiot08.webp";

function smartbuilding() {
  return (
    <div>
      <Helmet>
        <title>Smart Building Solution</title>
        <meta
          name="description"
          content="DiGiKloud is dedicated to providing businesses with secure, dependable, and cutting-edge IoT solutions, empowering them to overcome challenges and achieve their goals. We offer comprehensive services, from analyzing your business needs to implementing and securing your IoT ecosystem."
        />
        <meta name="msvalidate.01" content="E7C8450433A1B04E4DB234FBBCB4D282" />
        <meta
          name="keywords"
          content="digikloud,iot,dasboard,waste management dashboard using iot,solar monitoring dashboard using iot,workplace management using iot"
        ></meta>
        <link rel="canonical" href="https://digikloud.io/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Grid container className="solution_container">
        <Grid className="solution_building_page_top_image">
          <div className="solution_home_head  ">
            <Slide triggerOnce={true} direction="up" duration={2000}>
              <h1 className="solutionTopTag">
                Smart buildings use IoT for efficient, secure, and comfortable
                environments through real-time data
              </h1>
            </Slide>
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <Typography variant="h3" className="typography_heading_solution">
                Smart Building Management
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  IoT integrated with AI and machine learning in building
                  management enhances data analysis and autonomous
                  decision-making, fostering sustainable, energy-efficient, and
                  improved living and working environments.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <img
                src={building1}
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <img
                src={building2}
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <Typography variant="h3" className="typography_heading_solution">
                Energy Efficiency and Sustainability
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  IoT-enabled Smart Building Management Systems (SBMS) optimize
                  energy use by monitoring consumption, adjusting lighting and
                  HVAC systems based on occupancy, and integrating with
                  renewable energy sources for dynamic management.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <Typography variant="h3" className="typography_heading_solution">
                Data Collection with Node-RED
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  Node-RED, an open-source flow-based tool, collects data from
                  building systems and devices, seamlessly interfacing with
                  BACnet software via the OBS protocol to enable real-time
                  communication between HVAC, lighting, and security systems.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <img
                src={iiot08}
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <img
                src={iothub}
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <Typography variant="h3" className="typography_heading_solution">
                Integration with Azure IoT Hub
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  Node-RED pushes data to Azure IoT Hub, ensuring secure
                  communication between smart building devices and IoT
                  applications to enhance efficient data management.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <Typography variant="h3" className="typography_heading_solution">
                Data Transfer Using Event Hub and Telegraf
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  Data from Azure IoT Hub flows to Azure Event Hub for real-time
                  ingestion, and subsequently to InfluxDB via Telegraf, ensuring
                  efficient formatting and ingestion optimized for high-write
                  and query loads.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <img
                src={influxdb}
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <img
                src="../images/services/iiot/iiot06.webp"
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <Typography variant="h3" className="typography_heading_solution">
                Visualization with Grafana
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  InfluxDB data is visualized through Grafana, providing
                  real-time monitoring of system performance, energy usage,
                  occupancy trends, and other metrics to support data-driven
                  decisions and optimize building operations for enhanced
                  efficiency.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <Typography variant="h3" className="typography_heading_solution">
                3D Model Visualization with Tandem
              </Typography>
              <div className="content_text">
                <Typography variant="p">
                  Tandem integrates InfluxDB data into 3D building models to
                  enable immersive monitoring and management of system
                  operations, improving troubleshooting and spatial
                  understanding capabilities.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <img
                src={tandam}
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="dashboardpage">
          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="typography_heading_solution">
              Digikloud 3D Tandem Viewer
            </Typography>
            <div className="content_text">
              <Typography variant="p">
                The addition of 3D visualization with Tandem provides a unique
                and detailed perspective, further empowering building managers
                to optimize performance and address issues promptly.
              </Typography>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <img
              src={tandam3d}
              alt="iot solar dahboard"
              className=" dashboard"
            />
          </Grid>
        </Grid>
        {/* <Grid container className="dashboardpage">
          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="typography_heading_solution">
              Architecture - Smart Building
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <img
              src={architecture}
              alt="architcture"
              className="architcture_dashboard"
            />
          </Grid>
        </Grid> */}
        <Grid container className="dashboardpage">
          <article className="key_elements_solar key_elements_solars">
            <h2>
              The University of Glasgow's Smart Building Transformation - User
              Story
            </h2>
            <article className="key_element_card">
              <Typography variant="p">
                Founded in 1451, the University of Glasgow, the fourth-oldest in
                the English-speaking world, is modernizing its campus through a
                smart building initiative with DigiKloud and Autodesk. This
                project has retrofitted four buildings with over 1,000 smart
                devices to optimize energy efficiency, security, and living
                conditions. The comprehensive building management system
                enhances lighting, HVAC, and overall operational efficiency.
              </Typography>
            </article>
            <article className="key_element_card">
              <Typography variant="p">
                The University of Glasgow's partnership with DigiKloud and
                Autodesk showcases its commitment to leveraging technology,
                integrating smart building solutions that preserve its legacy
                and set a global standard. The initiative enhances efficiency,
                security, and sustainability, with the success of the first four
                buildings highlighting the potential when tradition meets
                innovation. This positions the university at the forefront of
                educational and technological excellence.
              </Typography>
            </article>

            <Typography variant="h3" className="typography_heading_solution">
              Benefits
            </Typography>
            <article className="key_element_card smart_benefits">
              <Typography variant="h5" className="homepageSubhead">
                Scalable solutions for future
              </Typography>
              <ul style={{ lineHeight: "2" }}>
                <li>
                  <Typography variant="p">
                    Using existing IT solutions
                  </Typography>
                  {/* <ul>
                    <li>
                      <Typography variant="p">Microsoft | Autodesk</Typography>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Typography variant="p">Microsoft | Autodesk</Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Open Building Architecture such as BACNET, MQTT,DALI etc
                  </Typography>
                </li>
              </ul>
            </article>
            <article className="key_element_card smart_benefits">
              <Typography variant="h5" className="homepageSubhead">
                Enhance Campus Management
              </Typography>
              <ul style={{ lineHeight: "2" }}>
                <li>
                  <Typography variant="p">
                    Real time data into BIM Models using IoT
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Predicative Facility Management with single point of data
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Smart Command and Control Centre
                  </Typography>
                </li>
              </ul>
            </article>
            <article className="key_element_card smart_benefits">
              <Typography variant="h5" className="homepageSubhead">
                Energy Savings
              </Typography>
              <ul style={{ lineHeight: "2" }}>
                <li>
                  <Typography variant="p">you can save Up to 30% on Electricity, Gas, and Carbon Emissions</Typography>
                </li>
                {/* <li>
                  <Typography variant="p">Gas : £64,849.51</Typography>
                </li>
                <li>
                  <Typography variant="p">Carbon : £ 11,925</Typography>
                </li>
                <li>
                  <Typography variant="p">
                    TOTAL : £ 117,001 Annually
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Supporting 2030 Net Zero Targets
                  </Typography>
                </li> */}
              </ul>
            </article>
          </article>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
export default smartbuilding;

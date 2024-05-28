import { Grid, Typography } from "@mui/material";
import building1 from "../../assets/building1.jpeg";
import building2 from "../../assets/building2.webp";
import { Helmet } from "react-helmet";
import Footer from "../../page/home/Footer";
import "./solutionpage.css";
import Navbar from "../../page/home/navbar";
import grafana from "../../assets/grafana.png";
import influxdb from "../../assets/influxdb.png";
import iothub from "../../assets/iothub.png";
import nodered from "../../assets/nodered.png";
import tandam from "../../assets/tandam.png";
import tandam3d from "../../assets/tandam_3d.png";
import { Slide } from "react-awesome-reveal";

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
            <Slide triggerOnce={true} direction="up">
              <h1 className="solutionTopTag" style={{ color: "black" }}>
                Smart buildings use IoT for efficient, secure, and comfortable
                environments through real-time data
              </h1>
            </Slide>
          </div>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <h1 className="typography_heading_solution">
                Smart Building Management
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  The integration of IoT technology in building management is
                  poised to grow, driven by advancements in artificial
                  intelligence (AI) and machine learning. These technologies
                  will further enhance the capabilities of SBMS, enabling more
                  sophisticated data analysis and autonomous decision-making. As
                  buildings become smarter, they will play a crucial role in the
                  global push towards sustainability, energy efficiency, and
                  enhanced living and working environments.
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
              <h1 className="typography_heading_solution">
                Energy Efficiency and Sustainability
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  IoT-enabled SBMS can significantly enhance energy efficiency
                  by continuously monitoring energy consumption patterns and
                  adjusting systems to optimize usage. For instance, smart
                  sensors can detect occupancy and natural light levels,
                  adjusting lighting and HVAC systems accordingly to reduce
                  waste. These systems also integrate with renewable energy
                  sources, like solar panels, to manage energy generation and
                  consumption dynamically.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <h1 className="typography_heading_solution">
                Data Collection with Node-RED
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  Node-RED, an open-source flow-based development tool, is
                  employed to collect data from various building systems and
                  devices. It interfaces with BACnet (Building Automation and
                  Control Network) software using the OBS (Open Building
                  Systems) protocol. This setup allows seamless communication
                  between different building systems, such as HVAC, lighting,
                  and security sensors, capturing real-time data from each
                  component.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <img
                src={nodered}
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
              <h1 className="typography_heading_solution">
                Integration with Azure IoT Hub
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  Once data is collected via Node-RED, it is pushed to the Azure
                  IoT Hub. Azure IoT Hub acts as a central message hub, ensuring
                  reliable and secure communication between IoT applications and
                  the devices in the smart building. This integration allows for
                  efficient data ingestion and management, providing a scalable
                  solution for handling large volumes of data generated by
                  building systems.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <h1 className="typography_heading_solution">
                Data Transfer Using Event Hub and Telegraf
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  The collected data from Azure IoT Hub is then routed to Azure
                  Event Hub. Event Hub is a fully managed, real-time data
                  ingestion service that can receive and process millions of
                  events per second. This data is subsequently transferred to
                  InfluxDB, a time-series database optimized for high-write and
                  query loads. Telegraf, an open-source agent for collecting and
                  reporting metrics, facilitates this data transfer, ensuring
                  that the data is formatted correctly and efficiently ingested
                  into InfluxDB.
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
                src={grafana}
                alt="iot solar dahboard"
                className="imagesSmart"
              />
            </Slide>
          </Grid>
          <Grid item md={6} xs={12}>
            <Slide duration={1500} triggerOnce={true} direction="right">
              <h1 className="typography_heading_solution">
                Visualization with Grafana
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  Finally, the data stored in InfluxDB is visualized using
                  Grafana. Grafana is an open-source analytics and monitoring
                  platform known for its powerful and flexible visualization
                  capabilities. It enables the creation of detailed and
                  interactive dashboards, allowing building managers to monitor
                  system performance, energy usage, occupancy trends, and more
                  in real-time. This visualization aids in making data-driven
                  decisions to optimize building operations and enhance
                  efficiency.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container className="solution_page_detail">
          <Grid item md={6} xs={12}>
            <Slide triggerOnce={true}>
              <h1 className="typography_heading_solution">
                3D Model Visualization with Tandam
              </h1>
              <div className="content_text">
                <Typography variant="p">
                  Tandam is used to view and interact with 3D models of the
                  building. Tandam integrates with the data collected and stored
                  in InfluxDB, providing a comprehensive 3D representation of
                  the building's systems and operations. This 3D visualization
                  offers an immersive and intuitive way to monitor and manage
                  building performance, allowing for better spatial
                  understanding and more effective troubleshooting.
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
            <h1 className="typography_heading_solution">
              Digikloud 3D Tandam Viewer
            </h1>
            <div className="content_text">
              <Typography variant="p">
                The addition of 3D visualization with Tandam provides a unique
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
        <Grid container className="dashboardpage">
          <article className="key_elements_solar key_elements_solars">
            <h2>
              The University of Glasgow's Smart Building Transformation - User
              Story
            </h2>
            <article className="key_element_card">
                <Typography variant="p">
                Founded in 1451 by papal bull, the University of Glasgow stands
                as the fourth-oldest university in the English-speaking world.
                Known for its prestigious history and cutting-edge research, the
                university has consistently pushed the boundaries of innovation.
                Today, the University of Glasgow (abbreviated as Glas. in
                post-nominals; Scottish Gaelic: Oilthigh Ghlaschu) continues
                this legacy by embarking on a transformative smart building
                initiative in partnership with DigiKloud and Autodesk.The
                collaboration with DigiKloud, a leader in IoT solutions, and
                Autodesk, renowned for its advanced design software, has enabled
                the university to retrofit and modernize its historical campus
                with state-of-the-art smart building systems.This ambitious
                project has already seen the completion of four buildings, each
                equipped with over 1,000 smart devices. These devices are
                designed to optimize energy efficiency, enhance security, and
                improve the overall living and working conditions for students
                and staff.Each smart device, integrated into a comprehensive
                building management system, monitors and controls various
                aspects of the buildings’ operations. This includes lighting,
                heating, ventilation, and air conditioning systems, ensuring
                they operate at peak efficiency.
                </Typography>
              </article>
              <article className="key_element_card">
                <Typography variant="p">
                The partnership with DigiKloud and Autodesk exemplifies the
                University of Glasgow’s commitment to leveraging technology for
                the betterment of its community. By integrating cutting-edge
                smart building solutions, the university not only preserves its
                rich historical legacy but also sets a standard for future-ready
                educational institutions worldwide. As the University of Glasgow
                continues to expand its smart building initiative, the benefits
                of this transformation will become increasingly evident.
                Enhanced efficiency, improved security, and a more sustainable
                campus are just the beginning. The success of these first four
                buildings serves as a testament to what is possible when
                tradition meets innovation, paving the way for the University of
                Glasgow to remain at the forefront of educational excellence and
                technological advancement for centuries to come.
                </Typography>
              </article>
          </article>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
export default smartbuilding;

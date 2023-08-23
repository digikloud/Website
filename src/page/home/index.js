import React from "react";
import Navbar from "./navbar";
import "./index.css";
import { Typography } from "@mui/material";
import Footer from "./Footer";
import HomeAbout from "./HomeAbout";
import Customer from "./customer";
import Costsaving from "./costsaving";
import Analyzehome from "./analyzehome";
import Dashboadrhomepage from "./dashboadrhomepage";
import video from "../../assets/home1.gif";
import ProtocolsHome from "./IotProtocols";
import Bookdemo from "./bookdemo";
import { Helmet } from "react-helmet";
import Dashboard from "./dashboard";

function HomeIndex() {

  return (
    <main>
      <Helmet>
        <title>DiGiKloud | IoT Solutions that Transform your Business</title>
        <meta
          name="description"
          content="DiGiKloud is dedicated to providing businesses with secure, dependable, and cutting-edge IoT solutions, empowering them to overcome challenges and achieve their goals. We offer comprehensive services, from analyzing your business needs to implementing and securing your IoT ecosystem."
        />
        <meta name="msvalidate.01" content="E7C8450433A1B04E4DB234FBBCB4D282" />
        <meta
          name="keywords"
          content="digikloud,iot,dasboard,waste management dashboard using iot,solar monitoring dashboard using iot,workplace management using iot,dashboard iot,waste management,solar monitoring,solar dashboard,health management dashboard"
        ></meta>
        <link rel="canonical" href="https://digikloud.io/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <section className="homepage">
        <img src={video} alt="Digikloud Company" className="backgroundvideo" muted autoPlay loop />
        <header className="home_top_innertext">
          <Typography variant="h1">
            IoT Solutions that Transform your Business
          </Typography>
        </header>
      </section>

      <HomeAbout />
      <Customer />
      <Dashboadrhomepage />
      <Dashboard />
      <Analyzehome />
      <Costsaving />
      <ProtocolsHome />
      <Bookdemo />
      <Footer />
    </main>
  );
}

export default HomeIndex;

// function SolutionstoBuild({ title, margin, index, direction }) {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const elementPosition =
//       document.getElementsByClassName("fade-in-element")[index].offsetTop;

//     if (scrollPosition > elementPosition) {
//       setIsVisible(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const visibleclassName = () => {
//     if (direction == "left") {
//       if (margin) {
//         return "visible_margin";
//       }
//       return "visible";
//     } else {
//       if (margin) {
//         return "visible_right_margin";
//       }
//       return "visible_right";
//     }
//   };

//   return (
//     <>
//       <div
//         className={`service_content fade-in-element fade-in ${
//           isVisible ? visibleclassName() : "invisible"
//         }
//  `}
//       >
//         <Stack direction="row" alignItems="center" spacing={3}>
//           {/* <img src={solar} /> */}
//           <Typography variant="h5">{title}</Typography>
//         </Stack>
//       </div>
//     </>
//   );
// }

// SolutionstoBuild.prototype = {
//   title: PropTypes.string,
//   margin: PropTypes.bool,
//   index: PropTypes.number,
//   direction: "right" | "left",
// };

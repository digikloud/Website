import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from "./theme"
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import AboutUs from './Pages/AboutUs';
import Solutionpage from './Pages/SolutionPage/healthMonitoringPage';
import Solarpage from './Pages/SolutionPage/solarpage';
import WasteMonitoringPage from './Pages/SolutionPage/wasteMonitoringPage';
import Workplacemanagement from './Pages/SolutionPage/workplacemanagement';
import Company from './Pages/Company';
import SolarMonitoring from './Pages/IoTdashboards/solarMonitoring';
import WasteManagementIoT from './Pages/IoTdashboards/wasteManagement';
import HealthManagementIoT from './Pages/IoTdashboards/healthManagement';
import Product from './Pages/product';
import ContactUs from './Pages/ContactUs';
import Iotx from './Pages/Product/Iotx';
import Byop from './Pages/Product/Byop';
import Services from './Pages/Services/Services';

const Home = React.lazy(() => import("./page/home"))


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Suspense fallback={<>Loading...</>}><Home /></Suspense>} path='' />
            <Route path='about-us' element={<AboutUs /> } />
            <Route path='solution/healthmanagement' element={<Solutionpage/>} />
            <Route path='solution/solarmonitoring' element={<Solarpage />} />
            <Route path='solution/wastemonitoring' element={<WasteMonitoringPage />} />
            <Route path='solution/workplacemanagement' element={<Workplacemanagement />} />
            <Route path='company' element={<Company />} />
            <Route path='iotdashboards/solar' element={<SolarMonitoring />} />
            <Route path='iotdashboards/wastemonitoring' element={<WasteManagementIoT />} />
            <Route path='iotdashboards/healthmonitoring' element={<HealthManagementIoT />} />
            <Route path='product/thingskloud' element={<Product />} />
            <Route path='product/iot-x' element={<Iotx />} />
            <Route path='product/byop' element={<Byop />} />
            <Route path='services' element={<Services />} />
            <Route path='contact-us' element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
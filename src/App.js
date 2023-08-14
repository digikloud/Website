import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from "./theme"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import AboutUs from './Pages/AboutUs';
import Solutionpage from './Pages/SolutionPage/solutionpage';
import Solarpage from './Pages/SolutionPage/solarpage';
import WasteMonitoringPage from './Pages/SolutionPage/wasteMonitoringPage';
import Workplacemanagement from './Pages/SolutionPage/workplacemanagement';
import Company from './Pages/Company';

const Home = React.lazy(() => import("./page/home"))


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Suspense fallback={<>Loading...</>}><Home /></Suspense>} path='' />
            <Route path='sitemap.xml' element={sitemap.xml} />
            <Route path='about-us' element={<AboutUs /> } />
            <Route path='solution/healthmanagement' element={<Solutionpage/>} />
            <Route path='solution/solarmonitoring' element={<Solarpage />} />
            <Route path='solution/wastemonitoring' element={<WasteMonitoringPage />} />
            <Route path='solution/workplacemanagement' element={<Workplacemanagement />} />
            <Route path='company' element={<Company />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
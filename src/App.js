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

const Home = React.lazy(() => import("./page/home"))


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Suspense fallback={<>Loading...</>}><Home /></Suspense>} path='' />
            <Route path='about-us' element={<AboutUs /> } />
            <Route path='solutionpage/healthmanagement' element={<Solutionpage/>} />
            <Route path='solutionpage/solarmonitoring' element={<Solarpage />} />
            <Route path='solutionpage/wastemonitoring' element={<WasteMonitoringPage />} />
            <Route path='solutionpage/workplacemanagement' element={<Workplacemanagement />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
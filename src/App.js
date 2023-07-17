import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from "./theme"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import AboutUs from './Pages/AboutUs';
import Solutionpage from './Pages/SolutionPage/solutionpage';

const Home = React.lazy(() => import("./page/home"))


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Suspense fallback={<>Loading...</>}><Home /></Suspense>} path='' />
            <Route path='about-us' element={<AboutUs /> } />
            <Route path='solutionpage' element={<Solutionpage/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
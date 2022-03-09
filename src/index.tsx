import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Nav from './views/Navbar/Navbar';
import HeroPage from './views/HeroPage/HeroPage';
import Goals from './views/Goals/Goals'
import Statistics from './views/Stastistics/Statistics';
import Footer from './views/Footer/Footer';
import Fishtank from './views/Fishtank/Fishtank';
import Refrences from './views/Refrences/Refrences';
import AboutUs from './views/AboutUs/AboutUs';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <HeroPage />
    <Goals />
    <Statistics />
    <Refrences />
    <AboutUs />
    <Fishtank />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

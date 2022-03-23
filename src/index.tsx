import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SlideShow from './views/SlideShow/SlideShow';
import HeroPage from './views/HeroPage/HeroPage';
import Goals from './views/Goals/Goals'
import Refrences from './views/Refrences/Refrences';
import Biology from './views/Biology/Biology';
import Sensors from './views/Sensors/Sensors';
import Footer from './views/Footer/Footer';
import AboutUs from './views/AboutUs/AboutUs';
import reportWebVitals from './reportWebVitals';
import Fishtank from './views/Fishtank/Fishtank';

ReactDOM.render(
  <React.StrictMode>
    <HeroPage></HeroPage>
    <Goals></Goals>
    <Biology></Biology>
    <Sensors></Sensors>
    <AboutUs></AboutUs>
    <Refrences></Refrences>
    <Fishtank></Fishtank>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

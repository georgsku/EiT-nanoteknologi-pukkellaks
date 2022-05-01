import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './views/Navbar/Navbar';
import Ocean from './views/Ocean/Ocean';
import Goals from './views/Goals/Goals'
import Refrences from './views/Refrences/Refrences';
import Biology from './views/Biology/Biology';
import Sensors from './views/Sensors/Sensors';
import Conclusion from './views/Conclusion/Conclusion';
import Footer from './views/Footer/Footer';
import AboutUs from './views/AboutUs/AboutUs';
import reportWebVitals from './reportWebVitals';
import Fishtank from './views/Fishtank/Fishtank';
import bubble from './svg/bubble.svg';

ReactDOM.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Ocean></Ocean>
    <Goals></Goals>
    <Biology></Biology>
    <Sensors></Sensors>
    <Conclusion></Conclusion>
    <AboutUs></AboutUs>
    <Refrences></Refrences>
    <Fishtank></Fishtank>
    <Footer></Footer>
    <img className='bubble' src={bubble} alt="" style={{left: "150px", animationDelay: "1s",}}/>
    <img className='bubble' src={bubble} alt="" style={{left: "130px", animationDelay: "0.4s"}}/>
    <img className='bubble' src={bubble} alt="" style={{left: "200px"}} />

    <img className='bubble' src={bubble} alt="" style={{right: "150px", animationDelay: "11s",}}/>
    <img className='bubble' src={bubble} alt="" style={{right: "130px", animationDelay: "10.4s"}}/>
    <img className='bubble' src={bubble} alt="" style={{right: "200px", animationDelay: "10s",}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

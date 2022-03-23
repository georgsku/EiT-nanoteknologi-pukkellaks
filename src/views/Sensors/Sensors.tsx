import './Sensors.scss';
import fish from '../../svg/FishRed.svg'
import stones from '../../svg/stones.svg'
import kjetting from '../../svg/kjetting.svg'
import fishBlue from '../../svg/FishBlue.svg'
import flower from '../../svg/flowers.svg'
import flower2 from '../../svg/flower6.svg'
import flower3 from '../../svg/flower3.svg'

function Sensors() {

  return (
    <section className="sensors panels luftig">
      <div className="left-panel">
        <div className="animation-container">

          <img className='fish red' src={fish} alt="" />
          <img className='fish blue' src={fishBlue} alt="" />

          <div className="tube">
            <div className="sensor left top"></div>
            <div className="sensor left bottom"></div>
            <div className="sensor right top"></div>
            <div className="sensor right bottom"></div>
          </div>
          <div className="sensor-blocker"></div>

          <img className="center" src={flower} alt="" />
          <img className="right" src={flower2} alt="" />
          <img className="left" src={flower3} alt="" />
          
          <img className="stones" src={stones} alt="" />
          <img className="stones" src={stones} alt="" style={{transform: "translateX(100%)"}}/>

          <img className="kjetting" src={kjetting} alt="" style={{}}/>
          <img className="kjetting" src={kjetting} alt="" style={{left: "330px"}}/>
        </div>
      </div>
      <div className="right-panel">
        <h1>Kan sensorer detektere pukkellaks?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maxime nemo quis, iste possimus, nisi voluptas ab laborum quisquam quos pariatur autem consequatur voluptate excepturi eius ullam voluptatem quia beatae?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maxime nemo quis, iste possimus, nisi voluptas ab laborum quisquam quos pariatur autem consequatur voluptate excepturi eius ullam voluptatem quia beatae?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maxime nemo quis, iste possimus, nisi voluptas ab laborum quisquam quos pariatur autem consequatur voluptate excepturi eius ullam voluptatem quia beatae?</p>
      </div>
    </section>
  );
}

export default Sensors;

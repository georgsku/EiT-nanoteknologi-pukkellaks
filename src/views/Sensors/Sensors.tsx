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
    <section className="sensors panels luftig center">
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
        <h1>En tunnel med fotosensorer</h1>
        <p>
          Vi ønsker å lage en sensortunnel som vil være i stand til å detektere og klassifisere ulike typer fisk som svømmer gjennom for å kunne kartlegge omfanget av pukkellaks i norske vassdrag. Dette vil gjøres med innebygde sensorer, blant annet foto, ultra-fiolette og ultrasoniske sensorer. Kombinert vil disse kunne gi nok informasjon til å skille pukkellaks fra annen fisk. Ideen er å plassere slike tunneler i elver hvor pukkellaksen er et stort problem, slik at de kan behandles uten konstant oppsyn. Dette vil kunne hjelpe med å redusere de mange timene som frivillige i dag bruker på å bekjempe denne  problematiske fremmedarten.
        </p>
      </div>
    </section>
  );
}

export default Sensors;

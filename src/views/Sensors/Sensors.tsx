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
        <p>
        Gruppen har utviklet en sensortunnel som vil være i stand til å detektere og klassifisere ulike typer fisk som svømmer gjennom for å kunne kartlegge omfanget av pukkellaks i norske vassdrag.
        Tunnelen er innebygd med flere sensorer, blant annet foto, ultra-fiolette og ultrasoniske, som kombinert vil være i stand til å innskaffe veldig detaljerte og spesifikke opplysninger om fisken.
        Ideen er å plassere slike tunneler i elver hvor pukkellaksen er et stort problem, for å så videreformidle informasjonen slik at pukkellaksen kan fjernes på den mest effektive mulige måten.
        Sensortunnelen har en relativt lav diameter på 1 meter, for å gjøre deteksjonen lettere og for å minske signalpåvirkninger som kan oppstå fra elvevannet som er i konstant bevegelse.
        Tunnelen blir i tillegg fungerende som en flaskehals hvor tunnelen begrenser hvor mye fisk som kan komme seg gjennom på en viss tid.
        Dette bidrar også med å gjøre deteksjonen enklere da lavere antall fisk som kommer gjennom tunnellen på en gang betyr mindre interferens og høyere spesifisitet.
        </p>
      </div>
    </section>
  );
}

export default Sensors;

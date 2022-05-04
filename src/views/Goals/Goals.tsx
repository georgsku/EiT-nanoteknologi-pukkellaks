import './Goals.scss';
import lifecycle from '../../svg/lifecycle.svg'
import timeline from '../../svg/timeline.svg'

function Goals() {

  function show2023() {
    
    const el = document.getElementById("toExpand")
    console.log(el);
    if (el) el.setAttribute("height", "2000px");
  }

  return (
    <section className='goals luftig'>
      <div className="narrow-l">
        <div className="super-narrow auto-center vision">
          <h1>Vår visjon</h1>
          <p> Prosjektets formål er å redusere negative virkninger av invasjonen av russisk pukkellaks i norske vassdrag ved hjelp av nanoteknologi</p>
        </div>
        <div className="panels ">
          <div className="left-panel">
            <h1 id="problem">Hvorfor bør vi bry oss om pukkellaksen?</h1>
            <p>
            Pukkellaksen byr på store utfordringer. Bekjempelsen av pukkellaks er utfordrende ettersom dette må skje uten at de andre andre artene tar skade av prosjektet, samtidig som utbredelsen er i stadig vekst. Metodene som har blitt brukt frem til nå består av manuelt arbeid av frivillige mennesker og foreninger, samt at de er tungvinte og krever store ressurser. Dette er en stor belastning for spesielt foreningene ettersom disse ikke har store økonomiske ressurser til å utarbeide utstyr, og at dette legger et stort press på de frivillige som deltar i arbeidet. Tanken er at nanoteknologiske løsninger kan bidra til å lette og effektivisere dette arbeidet. Vårt mål er derfor å redusere negative virkninger av invasjonen av russisk pukkellaks i norske vassdrag ved hjelp av nanoteknologi.
            </p>
          </div>
          <div className="right-panel place-center">
            <img src={lifecycle} alt="" />
          </div>
        </div>
        <div className="panels reverse-on-mobile">
          <div className="left-panel place-center">
            <img src={timeline} alt="" />
          </div>
          <div className="right-panel">
            <h1 id="why" >Hva er en pukkellaks og hvorfor er det et problem?</h1>
            <p>
            Pukkellaksen ble satt ut på Kolahalvøya på 60-tallet, og har siden det flyttet seg vestover og inn i norske vassdrag i Troms og Finnmark. Her er laksen en fremmed art, og den presenterer en økologisk fare for andre arter som naturlig holdet til i de norske vassdragene. Pukkellaksen har en to-årig livssyklus, og den dør etter gyting. Pukkellaksen legger også et høyt antall egg, som gjør at veksten fra gyteår til gyteår er enorm, som man kan se på grafene. Etter og under gyting er laksen svært aggressiv og er til stor skade for blant annet Atlanterhavslaksen. Videre råtner pukkellaksen i elvene, noe som igjen ødelegger vannkvaliteten i en rekke vassdrag. 
            </p>
          </div>
        </div>
        <br /><br /><br />
        <h1>Hvordan ser fremtiden ut?</h1>
        <div className="panels narrow">
          <div className="left-panel ">
            <p>
              Antall pukkellaks de site årene har økt dramatisk. Med samme økning vil blalba
            </p>
          </div>
          <div className="right-panel place-center">
            <div className='counter' onClick={show2023}>
              <h1>700 000</h1>
              <p>PUKKELLAKS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;

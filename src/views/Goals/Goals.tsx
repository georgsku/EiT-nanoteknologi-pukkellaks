import './Goals.scss';
import lifecycle from '../../svg/lifecycle.svg'
import timeline from '../../svg/timeline.svg'

function Goals() {

  function show2023() {
    
    const elOne = document.getElementById("one")
    const elTwo = document.getElementById("two")
    if (elOne) elOne.style.display = "none"
    if (elTwo) elTwo.style.display = "flex"
  }

  return (
    <section className='goals luftig'>
      <div className="narrow-l">
        <div className="super-narrow auto-center vision">
          <h1>Vår visjon</h1>
          <p>Vi ønsker å redusere negative virkninger av invasjonen av russisk pukkellaks i norske vassdrag ved hjelp av nanoteknologi</p>
          <b>#PALEIAN</b>
        </div>
        <p style={{maxWidth: "500px", margin: "auto"}}>#PALEIAN er et ordspill på PALE ALIEN som referer til pukkellaksens bleke utseende etter gyting. Alien stammer fra pukkellaksens status som fremmedart. </p>
        <br /><br />
        <div className="panels reverse-on-mobile">
          <div className="left-panel place-center">
            <img src={timeline} alt=""/>
            <i>Antall avlivet pukkellaks i de respektive gyteårene</i>
          </div>
          <div className="right-panel">
            <h1 id="why" >Hva er en pukkellaks og hvorfor er de et problem?</h1>
            <p>
            Pukkellaksen ble satt ut på Kolahalvøya på 60-tallet, og har siden det flyttet seg vestover og inn i norske vassdrag i Troms og Finnmark. Her er laksen en fremmed art, og den presenterer en økologisk fare for andre arter som naturlig holder til i de norske vassdragene. Pukkellaksen har en to-årig livssyklus, og den dør og råtner etter gyting, som ødelegger vannkvaliteten i vassdragene. Pukkellaksen legger også et høyt antall egg, som gjør at veksten fra gyteår til gyteår er enorm. Etter og under gyting er laksen svært aggressiv og er til stor skade for blant annet Atlanterhavslaksen, som har bidratt til å gjøre arten utryddningstruet i Norge.
            </p>
          </div>
        </div>
        <div className="panels ">
          <div className="left-panel">
            <h1 id="problem">Hvorfor bør vi bry oss om pukkellaksen?</h1>
            <p>
            Bekjempelsen av pukkellaks er utfordrende ettersom dette må skje uten at de andre artene tar skade av prosjektet, samtidig som utbredelsen er i stadig vekst. Metodene som har blitt brukt frem til nå består av manuelt arbeid av frivillige mennesker og foreninger, samt at de er tungvinte og krever store ressurser. Dette er en stor belastning for spesielt foreningene ettersom disse ikke har store økonomiske ressurser til å utarbeide utstyr, og at dette legger et stort press på de frivillige som deltar i arbeidet. Tanken er at nanoteknologiske løsninger kan bidra til å lette og effektivisere dette arbeidet.
            </p>
          </div>
          <div className="right-panel place-center">
            <img src={lifecycle} alt="" />
            <i>Livssyklusen til pukkellaksen. <br /> Fra rogn til pukkellaksens død er det 2 år</i>
          </div>
        </div>
        <br /><br /><br />
        <h1>Vi må handle nå!</h1>
        <div className="panels narrow">
          <div className="left-panel ">
            <p>
            Økningen i pukkellaks de siste årene har vært enorm. Tallet for antall registrerte pukkellaks syvdoblet seg fra 2019 til 2021. <b>Klikk på boksen </b> for å se hvor stort tallet vil bli for 2023 hvis vi lar utviklingen bli den samme.
            </p>
          </div>
          <div className="right-panel place-center flex">
            <div className='counter' onClick={show2023}>
              <div id="one">
                <h1>2023</h1>
              </div>
              <div id="two" style={{display: "none"}}>
                <h1>700 000</h1>
                <p>PUKKELLAKS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;

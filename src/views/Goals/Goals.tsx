import './Goals.scss';

function Goals() {
  return (
    <section className='goals luftig'>
      <div className="super-narrow auto-center luftig">
        <h1>Vårt mål</h1>
        <p> Vi har som et mål å redusere negative virkninger av russisk pukkellaks invasjon i norske vassdrag, ved å identifisere og detektere pukkellaksen med nanoteknologi. </p>
      </div>
      <div className="panels">
        <div className="left-panel">
          <h1 id="problem">Hvorfor pukkellaks?</h1>
          <p>Pukkellaks er en type stillehavslaks som har to-årig livssyklus. Problemet oppstår i oddetallsår når laksen går opp i elvene for å gyte. Pukkellaksen har et høyere antall egg enn de andre laksesortene som holder til i vassdragene, og som man kan se på grafen har populasjonen eksplodert i 2019 og 2021. Etter at laksen er ferdig å gyte, begynner den å råtne i elvene, som igjen ødelegger vannkvaliteten. Pukkellaksen er også veldig aggressiv, og gjør det vanskelig for de andre fiskesortene å gyte. Dette betyr at pukkellaksen er til stor fare for bestanden av de andre artene. 
          </p>
        </div>
        <div className="left-panel">
          <h1 id="why" >Hva er problemet?</h1>
          <p>
          Pukkellaksen byr på store utfordringer. Bekjempelsen av pukkellaks er utfordrende ettersom dette må skje uten at de andre andre artene tar skade av prosjektet, samtidig som utbredelsen er i stadig vekst. Metodene som har blitt brukt frem til nå består av manuelt arbeid av frivillige mennesker og foreninger, samt at de er tungvinte og krever store ressurser. Dette er en stor belastning for spesielt foreningene ettersom disse ikke har store økonomiske ressurser til å utarbeide utstyr, og at dette legger et stort press på de frivillige som deltar i arbeidet. Tanken er at nanoteknologiske løsninger kan bidra til å lette og effektivisere dette arbeidet. Vårt mål er derfor å redusere negative virkninger av invasjonen av russisk pukkellaks i norske vassdrag ved hjelp av nanoteknologi
          </p>
        </div>
      </div>
    </section>
  );
}

export default Goals;

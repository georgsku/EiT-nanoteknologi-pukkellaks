import './Goals.scss';

function Goals() {
  return (
    <section className='goals luftig'>
      <div className="super-narrow auto-center luftig">
        <h1>Vårt mål</h1>
        <p> Vi har som et mål å redusere negative virkninger av russisk pukkellaks invasjon i norske vassdrag <span className='link'>(2001, georg)</span></p>
      </div>
      <div className="panels">
        <div className="left-panel">
          <h1 id="problem">Hva er problemet?</h1>
          <p>Pukkellaks er en type stillehavslaks som har to-årig livssyklus. Problemet oppstår i oddetallsår når laksen går opp i elvene for å gyte. Pukkellaksen har et høyere antall egg enn de andre laksesortene som holder til i vassdragene, og som man kan se på grafen har populasjonen eksplodert i 2019 og 2021. Etter at laksen er ferdig å gyte, begynner den å råtne i elvene, som igjen ødelegger vannkvaliteten. Pukkellaksen er også veldig aggressiv, og gjør det vanskelig for de andre fiskesortene å gyte. Dette betyr at pukkellaksen er til stor fare for bestanden av de andre artene. 
          </p>
        </div>
        <div className="left-panel">
          <h1 id="why" >Hvorfor pukkellaks?</h1>
          <p>Pukkellaks, er en fiskeart i laksefamilien som tilhører stillehavslaksene, men som står oppført på den norske fremmedartlisten.
            Denne arten er uønsket i norske elver, hovedsaklig fordi den påvirker andre fiskearter, inkludert atlanterhavslaksen, i negativ grad ved å ta opp gyteplass og forurenser vannet.
            Problemstillingen gruppen har valgt går ut på å finne en løsning på det såkalte pukkellaksproblemet som har påvirket vannkvaliteten i nordnorske elver i økende grad de siste årene.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Goals;

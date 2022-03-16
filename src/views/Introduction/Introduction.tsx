

import './Introduction.scss';

function Introduction() {


  return (
    <section className='panels intro'>
      <div className="left-panel">
        <h1>Introduksjon</h1>
        <p>Landsbyen til gruppen sitt prosjekt, TFY4853 - Nanoteknologi, fokuserer på bruk av nanoteknologi til å løse problemer i stor skala.
          Nanoteknologi er her definert som teknologi som opererer på partikler mellom 1 og 100 nanometer.
          Det var lite spesifikk kunnskap fokusert på nanoteknologi innad i gruppen fra før av, men Lars og Sondre hadde en del kunnskap innenfor biologi og kjemi, som hjalp å forme prosjektet.
        </p>
        <p>
          Pukkellaks, Oncorhynchus Gorbuscha, er en fiskeart i laksefamilien som tilhører stillehavslaksene, men som står oppført på den norske fremmedartlista.
          Denne arten er uønsket i norske elver, hovedsaklig fordi den påvirker andre fiskearter, inkludert atlanterhavslaksen, i negativ grad ved å ta opp yteplass og forurenser vannet.
          Problemstillingen gruppen har valgt går ut på å finne en løsning på det såkalte pukkellaksproblemet som har påvirket vannkvaliteten i nordnorske elver i økende grad de siste årene.
          Målet med prosjektet ble derfor hvordan redusere negative virkninger av russisk pukkellaks invasjon i norske vassdrag ved hjelp av nanoteknologi.
        </p>
        <p>
          I starten av EiT-prosjektet ble hele gruppen enig om å fokusere hovedsaklig på to ulike fremgangsmåter for å finne en løsning på problemstillingen.
          Den første, som fikk mest fokus og støtte av gruppen, var deteksjon og avliving av pukkellaksen gjennom biologiske metoder, som ved hjelp av hormoner/DNA-påvirkning.
          Den andre løsningen gikk ut på samme prinsipp, deteksjon og avliving, men i stedet for bruk av biologiske metoder sto sensorteknikk sentralt.
          Bakgrunnen for disse valgene var at forskjellige gruppemedlemmer hadde forkunnskaper innen biologi, og noen innen sensorer.
        </p>
      </div>
      <div className="right-panel place-center">
        <img src="https://www.europarl.europa.eu/resources/library/images/20200611PHT81012/20200611PHT81012-ml.jpg" alt="" />
      </div>
    </section>
  );
}

export default Introduction;

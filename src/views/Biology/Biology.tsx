import './Biology.scss';
import edna from '../../svg/edna.png'

function Biology() {

  return (
    <section className="biology panels luftig narrow-l center">
      <div className="left-panel">
        <h1>eDNA - Naturens merkelapp</h1>
        <p>
        Levende organismer avgir ulike DNA-spor i økosystemet de lever i, som for eksempel hudceller, avføring og lignende komponenter som inneholder organismes arvemateriale, DNA. eDNA-teknologi utnytter såkalte "assay" for å detektere disse DNA-sporene, som  brukes overvåkning av artsmangfoldet i naturen uten behov for fysisk observasjon av artene. Ved å ta i bruk et stabilt assay for pukkellaks kan vassdragene med mest pågang identifiseres tidlig, slik at fordeling av ressurser til å bekjempe pukkellaksproblemet skjer mest mulig effektivt.
        </p>
      </div>
      <div className="right-panel place-center max-width">
        <img src={edna} width="100%" alt="" />
        <i>Minibåt med eDNA-teknologi om bord samler opp DNA-spor fra miljøet</i>
      </div>
    </section>
  );
}

export default Biology;

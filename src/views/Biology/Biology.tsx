import './Biology.scss';
import edna from '../../svg/edna.png'

function Biology() {

  return (
    <section className="biology panels luftig narrow-l center">
      <div className="left-panel">
        <h1>Kan bilogi detektere pukkellaks?</h1>
        <p>Pukkellaks sin livssyklus har en rekke fellestrekk med annen laks, som utviklingen fra ferskvanns- til saltvannsfisk, men har også markante forskjeller.
          De mest definerende trekkene til pukkellaks sin toårige livssyklus har å gjøre med dens raske smoltifisering, altså utvikling fra ferskvanns- til saltvannsfisk, og dens sære oppførsel under og etter gyting.

          Under gyting blir pukkellaksrogn gravd ca. 20 cm under elvgrusen nær kantene av elven, og blir vanligvis liggende i 3-4 måneder.
          Dybden de blir gravd ned i sørger både for beskyttelse mot økosystemet samt jevnere temperatur, som er viktig da tid fra gyting til klekking avhenger av temperaturen i omgivelsene.
          Pukkellaks normalt krever 450-550 temperaturdøgn før de klekker, som blir beregnet som vist i formel.</p>
      </div>
      <div className="right-panel place-center max-width">
        <img src={edna} width="100%"alt="" />
      </div>
    </section>
  );
}

export default Biology;

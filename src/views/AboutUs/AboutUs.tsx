import './AboutUs.scss';
import blob from '../../svg/blob.svg'

function AboutUs() {
  const info = [
    {navn: "Amalie", desc: "4 klasse kybernetikk. Meh"},
    {navn: "Anneli", desc: "4 klasse økonomi. Hater pukkellaks"},
    {navn: "Georg", desc: "4 klasse datateknologi. Hater sushi"},
    {navn: "Lars", desc: "4 klasse bioingeniør. Allergisk mot fisk"},
    {navn: "Sondre", desc: "4 klasse informatikk. STFU SONDRE!!"},
    {navn: "Thomas", desc: "4 klasse maskin. Spiser fish 2 ganger om dagen"},
    {navn: "Zaim⭐", desc: "4 klasse datateknologi. Elsker sushi"},
  ]
  return (
    <section className='center luftig narrow'>
      <div className="main-panel">
        <h1>Dette er oss</h1>
        <p>Vi er et tverrfaglig team som jobbe godt sammen for å bekjempe pukkellaksen.</p>
        <div className="AboutUs">
          {
            info.map((i) => 
            <div className='about-card'>
                <h3>
                  {i.navn}
                </h3>
                <p>
                  {i.desc}
                </p>
                <img src={blob} alt="" />
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

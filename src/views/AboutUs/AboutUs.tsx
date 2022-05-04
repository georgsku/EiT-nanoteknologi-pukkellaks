import './AboutUs.scss';
import blob from '../../svg/blob.svg'

function AboutUs() {
  const info = [
    {navn: "Amalie", desc: "4. klasse Kybernetikk"},
    {navn: "Anneli", desc: "4. klasse Økonomi"},
    {navn: "Georg", desc: "4. klasse Kommunikasjonsteknologi"},
    {navn: "Lars", desc: "4. klasse Bioingeniør"},
    {navn: "Sondre", desc: "4. klasse Informatikk"},
    {navn: "Thomas", desc: "4. klasse Produktutvikling og produksjon"},
    {navn: "Zaim⭐", desc: "4. klasse Datateknologi"},
  ]
  return (
    <section className='center luftig narrow'>
      <div className="main-panel">
        <h1>Dette er oss</h1>
        <p>Vi er et tverrfaglig team som jobber godt sammen for å bekjempe pukkellaksen.</p>
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

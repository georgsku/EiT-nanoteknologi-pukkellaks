import './AboutUs.scss';

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
    <div className='root'>
      <h2>Om oss</h2>
      <div className="AboutUs">
        {
          info.map((i) => 
          <div>
              <h3>
                {i.navn}
              </h3>
              <p>
                {i.desc}
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default AboutUs;

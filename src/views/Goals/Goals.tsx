import './Goals.scss';

function Goals() {
  return (
    <section className='goals luftig'>
      <div id='goal' className='flex center'>
        <div>
          <h1>Vårt mål</h1>
          <p>Redusere negative virkninger av russisk pukkellaks invasjon i norske vassdrag</p>
        </div>
        <img src="https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/vhtp6flfp4zvp5bfjcjw/saftige-kanelboller-i-langpanne" alt="" />
      </div>
        <h1 id="problem">Hva er problemet?</h1>
        <h1 id="why" >Hvorfor pukkellaks?</h1>
        <h1 id='theory'>Teori</h1>
          <h2>Biologisk løsning?</h2>
          <h2>Sensor løsning?</h2>
        <h1 id='conlusion' >Konklusjon</h1>
    </section>
  );
}

export default Goals;

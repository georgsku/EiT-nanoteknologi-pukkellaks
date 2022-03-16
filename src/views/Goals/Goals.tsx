import './Goals.scss';

function Goals() {
  return (
    <section className='panels goals'>
      <div className="left-panel">
          <h1>Vårt mål</h1>
          <p>Redusere negative virkninger av russisk pukkellaks invasjon i norske vassdrag <span className='link'>(2001, georg)</span></p>
          <h1 id="problem">Hva er problemet?</h1>
          <h1 id="why" >Hvorfor pukkellaks?</h1>
          <h1 id='conlusion' >Konklusjon</h1>
      </div>
      <div className="right-panel">
        <img src="https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/vhtp6flfp4zvp5bfjcjw/saftige-kanelboller-i-langpanne" alt="" />
      </div>
    </section>
  );
}

export default Goals;

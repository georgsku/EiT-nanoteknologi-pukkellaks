import './HeroPage.scss';
import arrow from '../../svg/arrow.svg'

function HeroPage() {

  return (
    <section className="hero-page">
      <h1 className="white">PUKKELLAKS ER DRITT</h1>
      <h1 className="red">HJELP OSS UTRYDDE DETTE ROMVESENET</h1>
      <h1 className="red">#PALEIAN</h1>
      <img className='svg' src={arrow} alt="" />
    </section>
  );
}

export default HeroPage;

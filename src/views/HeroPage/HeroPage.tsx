import './HeroPage.scss';
import arrow from "../../svg/arrow.svg";

function HeroPage() {

  function scrollDown() {
    window.scrollBy(0,200)
  }

  return (
    <section className="hero-page">
      <h1 className="white">PUKKELLAKS ER DRITT</h1>
      <h1 className="red">HJELP OSS UTRYDDE DETTE ROMVESENET</h1>
      <h1 className="red">#PALEIAN</h1>
      <img className='svg' onClick={scrollDown} src={arrow} alt="" />
    </section>
  );
}

export default HeroPage;

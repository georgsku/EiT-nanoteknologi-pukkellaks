import './Ocean.scss';
import background from '../../svg/background.svg'
import wave from '../../svg/wave.svg'
import fish from '../../svg/FishRed.svg'

function Ocean() {

  return (
    <section  className='ocean'>
        <div className='header'>
          <h1>#PALEIAN</h1>
          <p><b>Hjelp oss!</b> Vi trenger din hjelp til å bekjempe pukkellaksinvasjonen i norske vassdrag</p>
        </div>
        <img className='background' src={background} alt="" />
        <div className="moon"></div>
        <img className='wave' src={wave} alt="" />
        <div className="blocker"></div>
    </section>
  );
}

export default Ocean;

import './Ocean.scss';
import background from '../../svg/background.svg'
import moon from '../../svg/moon.svg'
import wave from '../../svg/wave.svg'

function Ocean() {



  return (
    <section  className='ocean'>
        <img className='background' src={background} alt="" />
        <div className="moon"></div>
        <img className='wave' src={wave} alt="" />
        <div className="blocker"></div>
    </section>
  );
}

export default Ocean;

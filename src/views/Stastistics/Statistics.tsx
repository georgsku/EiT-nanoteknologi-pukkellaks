import './Statistics.scss';
import layer1 from '../../svg/Layer_1.svg'
import layer2 from '../../svg/Layer_2.svg'
import background from '../../svg/Background_1.svg'

function Statistics() {
  return (
    <section className='statistics narrow'>
        <div className="counter one">
            <h3>Antall drept</h3>
            <p>40721</p>
        </div>
        <div className="counter two">
            <h3>Antall igjen</h3>
            <p>10248192</p>
        </div>
        <div className="graph">
          <h3>Fisker graf</h3>
            <img className='popup' src={layer1} alt="" />
            <img className='popup' src={layer2} alt="" />
        </div>
    </section>
  );
}

export default Statistics;

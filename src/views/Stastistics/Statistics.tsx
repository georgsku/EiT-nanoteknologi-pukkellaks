import './Statistics.scss';
import layer1 from '../../svg/Layer_1.svg'
import layer2 from '../../svg/Layer_2.svg'

function Statistics() {

  return (
    <section className='narrow center luftig'>
      <div className="statistics">
        <div className="counter one">
            <h3>Antall drept</h3>
            <p>125629</p>
        </div>
        <div className="counter two">
            <h3>Antall igjen</h3>
            <p>10248192</p>
        </div>
        <div className="graph">
          <p className="red">Antall pukkelaks drept</p>
          <p className="blue">Antall fisk drept</p>
          <img className='movein' src={layer1} alt="" />
          <img className='movein' src={layer2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Statistics;

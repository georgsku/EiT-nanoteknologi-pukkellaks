import './Fishtank.scss';
import fish from '../../svg/FishRed.svg'
import fishBlue from '../../svg/FishBlue.svg'
import flower from '../../svg/flowers.svg'
import flower2 from '../../svg/flower6.svg'
import flower3 from '../../svg/flower3.svg'
import expolosion from '../../images/explosion.png'


const pew = require("../../sounds/Pew.mp3");
let counter = 0


function playSound(event: any) {
  const audio = new Audio(pew);
  audio.play();
  event.target.src = expolosion
  setTimeout(() => event.target.remove(), 300)

  counter++
  const el = document.getElementById("counter")
  if (!el) return
  el.innerHTML = `ANTALL PUKKELLAKS DREPT: ${counter}`
}

function blueFishClicked() {
  window.alert("Vi dreper ikke vanlig fisk, bare pukkelaks")
}

function Fishtank() {
  return (
    <section className='fishtank luftig'>
      <p id="counter"></p>
      <img onClick={playSound} className="fish one" src={fish} alt="" />
      <img onClick={playSound} className="fish two" src={fish} alt="" />
      <img onClick={playSound} className="fish three" src={fish} alt="" />
      <img onClick={playSound} className="fish four" src={fish} alt="" />

      <img onClick={playSound} className="fish one late" src={fish} alt="" />
      <img onClick={playSound} className="fish three late" src={fish} alt="" />
      <img onClick={playSound} className="fish four late" src={fish} alt="" />

      <img onClick={playSound} className="fish one late2" src={fish} alt="" />
      <img onClick={playSound} className="fish three late2" src={fish} alt="" />
      <img onClick={playSound} className="fish four late2" src={fish} alt="" />

      <img onClick={blueFishClicked} className="fish blue one" src={fishBlue} alt="" />
      <img onClick={blueFishClicked} className="fish blue two" src={fishBlue} alt="" />
      <img onClick={blueFishClicked} className="fish blue three" src={fishBlue} alt="" />
      <img onClick={blueFishClicked} className="fish blue four" src={fishBlue} alt="" />

      <img onClick={playSound} className="fish one late3" src={fish} alt="" />
      <img onClick={playSound} className="fish two late3" src={fish} alt="" />

      <img className="left" src={flower3} alt="" />
      <img className="center" src={flower2} alt="" />
      <img className="right" src={flower} alt="" />
    </section>
  );
}

export default Fishtank;

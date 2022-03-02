import FishRed from '../../svg/FishRed.svg'
import FishBlue from '../../svg/FishBlue.svg'
import expolosion from '../../images/explosion.png'

let counter = 0

function Fish(props: any) {

  const pew = require("../../sounds/Pew.mp3")

  function playSound(target: any) {
    const audio = new Audio(pew);
    audio.play();
    target.src = expolosion
    target.removeAttribute("onclick");
    setTimeout(() => target.remove(), 300)
  }

  function fishClicked(e: any) {
    if (e.target.dataset.type === "red") {
      playSound(e.target)
      counter++
    } else {
      counter--
    }
    const el = document.getElementById("counter")
    if (!el) return
    el.innerHTML = `ANTALL PUKKELLAKS DREPT: ${counter}`
  }

  return (
    <img onClick={fishClicked} 
      data-type={props.color}
      className={`fish swim ${props.color} ${props.reverse ? "reverse" : null} `} 
      style={{bottom: `${props.y}px`}} 
      src={props.color === "red" ? FishRed : FishBlue } 
      alt="" 
    />
  );
}

export default Fish;

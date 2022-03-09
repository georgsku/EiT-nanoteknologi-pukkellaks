import './SlideShow.scss';
import HeroPage from '../../views/HeroPage/HeroPage';
import Goals from '../../views/Goals/Goals'
import Statistics from '../../views/Stastistics/Statistics';
import Fishtank from '../../views/Fishtank/Fishtank';
import Refrences from '../../views/Refrences/Refrences';
import AboutUs from '../../views/AboutUs/AboutUs';

import arrowLeft from '../../svg/arrow-left.svg';
import arrowRight from '../../svg/arrow-right.svg';
import { useState } from "react";


function SlideShow() {

  const [slide, setSlide] = useState(0)
  const [tmpSlide, setTmpSlide] = useState(0)
  const slideShow = document.querySelector(".slideShow")

/*   document.addEventListener("keyup", (e: any) => {
    if (e.key == "ArrowLeft" ) {
      let number = slide == 0 ? 0 : slide - 1 
      switchSlide(number)
    } else if (e.key == "ArrowRight") {
      let number = slide == 6 ? 6 : slide + 1 
      switchSlide(number)
    }
  }) */
  

  slideShow?.addEventListener("animationend", (e: any) => {
    if (e.animationName == "fadeOut") {
      setSlide(tmpSlide)
      slideShow?.classList.remove("fadeOut")
      slideShow?.classList.add("fadeIn")
    } else if (e.animationName == "fadeIn") {
      slideShow?.classList.remove("fadeIn")
    }
  })

  function switchSlide(nr: any) {
    setTmpSlide(nr)
    slideShow?.classList.remove("fadeOut")
    slideShow?.classList.remove("fadeIn")
    slideShow?.classList.add("fadeOut")
  }

  return (
    <section className='slideShow'>
      {(() => {
        switch (slide as any) {
          case 0: 
            return <HeroPage></HeroPage>
          case 1:
            return <Goals></Goals>
          case 2:
            return <Statistics></Statistics>
          case 3:
            return <Fishtank></Fishtank>
          case 4:
            return <Refrences></Refrences>
          case 5:
            return <AboutUs></AboutUs>
        }
      })()}
      <div className="bottom-bar">
        { slide != 0 ? <img className="next" src={arrowLeft} onClick={() => switchSlide(slide - 1)}></img> : <button style={{opacity: "0"}}></button>}
        <div className="progress-bar">
          {[...Array(6)].map((x, i) =>
            <div onClick={() => switchSlide(i)} className="progress" style={i == slide ? { backgroundColor: "var(--pink)"} : {}}></div>
          )}
        </div>
        { slide != 5 ? <img className="next" src={arrowRight} onClick={() => switchSlide(slide + 1)}></img> : <button style={{opacity: "0"}}></button>}
      </div>
    </section>
  );
}

export default SlideShow;

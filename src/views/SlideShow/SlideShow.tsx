import './SlideShow.scss';
import { useHotkeys } from 'react-hotkeys-hook';
import HeroPage from '../../views/HeroPage/HeroPage';
import Goals from '../../views/Goals/Goals'
import Refrences from '../../views/Refrences/Refrences';
import Biology from '../../views/Biology/Biology';
import Sensors from '../../views/Sensors/Sensors';
import AboutUs from '../../views/AboutUs/AboutUs';
import arrowLeft from '../../svg/arrow-left.svg';
import arrowRight from '../../svg/arrow-right.svg';
import { useState } from "react";
import Introduction from '../Introduction/Introduction';


function SlideShow() {

  const [slide, setSlide] = useState(0)
  const [tmpSlide, setTmpSlide] = useState(0)
  const slideShow = document.querySelector(".slideShow")
  
  useHotkeys('left', (e) => {
    e.preventDefault()
    const leftClick = document.getElementById("left-click")
    leftClick?.click()
  })
  useHotkeys('right', (e) => {
    e.preventDefault()
    const rightClick = document.getElementById("right-click")
    rightClick?.click()
  })

  slideShow?.addEventListener("animationend", (e: any) => {
    if (e.animationName === "fadeOut") {
      setSlide(tmpSlide)
      slideShow?.classList.remove("fadeOut")
      slideShow?.classList.add("fadeIn")
    } else if (e.animationName === "fadeIn") {
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
            return <Introduction></Introduction>
          case 2:
            return <Goals></Goals>
          case 3:
            return <Biology></Biology>
          case 4:
            return <Sensors></Sensors>
          case 5:
            return <Refrences></Refrences>
          case 6:
            return <AboutUs></AboutUs>
        }
      })()}
      <div className="bottom-bar">
        { slide !== 0 ? <img id='left-click' className="next" alt="" src={arrowLeft} onClick={() => switchSlide(slide - 1)}></img> : <button style={{opacity: "0"}}></button>}
        <div className="progress-bar">
          {[...Array(7)].map((x, i) =>
            <div onClick={() => switchSlide(i)} className="progress" style={i === slide ? { backgroundColor: "var(--pink)"} : {}}></div>
          )}
        </div>
        { slide !== 6 ? <img id='right-click' className="next" alt="" src={arrowRight} onClick={() => switchSlide(slide + 1)}></img> : <button style={{opacity: "0"}}></button>}
      </div>
    </section>
  );
}

export default SlideShow;

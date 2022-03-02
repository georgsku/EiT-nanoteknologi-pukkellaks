import './Refrences.scss';


function Refrences() {

  const refrences = [
    {
      title: "En kjempe fin nettside",
      author: "Georg Skuggedal",
      year: "2021",
      link: "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/vhtp6flfp4zvp5bfjcjw/saftige-kanelboller-i-langpanne"
    },
    {
      title: "En bok om pukkellaks",
      author: "Larsmellow",
      year: "2019",
      link: "https://www.miljodirektoratet.no/globalassets/bilder/nyhetsbilder/2019---nyhetsbilder/pukkellaks-eva-thorstad-b-widescreen.jpg"
    },
    {
      title: "How to be a star",
      author: "Zain the star",
      year: "2001",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/2234px-Star%2A.svg.png"
    },

  ]

  return (
    <section id="ref" className='refrences super-narrow'>
      <h1>Referanser</h1>
      {refrences.map(ref => (
        <p>
          <span>{ref.author},</span>
          <span> ({ref.year})</span>
          <span> '{ref.title}'</span>
          <span> <a href={ref.link}>{ref.link}</a></span>
        </p>
      ))}
    </section>
  );
}

export default Refrences;

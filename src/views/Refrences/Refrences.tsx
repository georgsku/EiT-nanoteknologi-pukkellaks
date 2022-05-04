import './Refrences.scss';


function Refrences() {

  const refrences = [
    {
      title: "Assessment of the risk to Norwegian biodiversity and aquaculture from pink salmon (Oncorhynchus gorbuscha). Scientific Opinion of the Panel on Alien Organisms and Trade in Endangered Species of the Norwegian Scientific Committee for Food and Environment",
      author: "Hindar, Kjetil et al.",
      year: "2020",
      link: "https://hdl.handle.net/11250/2831521"
    },
    {
      title: "Enorme mengder pukkellaks",
      author: "Statsforvalteren i Troms og Finnmark",
      year: "2022",
      link: "https://www.statsforvalteren.no/contentassets/92ed5100299c4d4caf705f45ea632684/rapport-fra-bekjempelse-av-pukkellaks-2021.pdf"
    },
    {
      title: "Pukkellaks i Norge, 2017",
      author: "Berntsen, H.H. et al",
      year: "2018",
      link: "http://hdl.handle.net/11250/2575646"
    },
    {
      title: "Development of an environmental DNA assay and field validation for the detection of invasive pink salmon Oncorhynchus gorbuscha",
      author: "Gargan, Laura M. and Mo, Tor A. and Carlsson, Jeanette E. L. and Ball, Bernard and Fossoy, Frode and Carlsson, Jens",
      year: "2021",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/edn3.250"
    },
    {
      title: "Elvefiske",
      author: "Baklie, Anne T and Rundtom, Terje O",
      year: "2022",
      link: "https://www.ssb.no/jord-skog-jakt-og-fiskeri/fiske-og-fangst/statistikk/elvefiske"
    },

  ]

  return (
    <section id="ref" className='refrences luftig super-narrow'>
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

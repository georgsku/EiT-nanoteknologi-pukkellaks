import './Refrences.scss';


function Refrences() {

  const refrences = [
    {
      title: "How to sleep anywhere",
      author: "Thomas",
      year: "1997",
      link: "https://post.healthline.com/wp-content/uploads/2020/02/sleep-sleeping-bed-732x549-thumbnail-732x549.jpg"
    },
    {
      title: "A journey through coffees history",
      author: "Georg Skuggedal",
      year: "2021",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/250px-A_small_cup_of_coffee.JPG"
    },
    {
      title: "Formula 1 is love, F1 is life",
      author: "Larsmellow",
      year: "2019",
      link: "https://www.youtube.com/watch?v=43HCYSXZ9GI&t=24s"
    },
    {
      title: "How to be a star",
      author: "Zain the star",
      year: "2001",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/2234px-Star%2A.svg.png"
    },
    {
      title: "10 ways to deal with busy school work",
      author: "Amalie Gjersdal",
      year: "2001",
      link: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_166274926_2000200020009280404_111386.jpg"
    },
    {
      title: "A boring book about accounting",
      author: "Anneli Kalliainen Kyrrø​",
      year: "2001",
      link: "https://www.merchantmaverick.com/wp-content/uploads/2016/08/bigstock-ACCOUNTING-inscription-coming-324977827.jpg"
    },
    {
      title: "A crazy night in Japan",
      author: "Sondre Haugen Elgaaen​​",
      year: "2004",
      link: "https://static01.nyt.com/images/2020/06/13/business/10japan-videogames1-print/merlin_159469545_35f39da4-25c0-404e-988d-e37ecd73c400-superJumbo.jpg"
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

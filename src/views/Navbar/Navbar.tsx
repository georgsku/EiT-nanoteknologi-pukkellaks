import './Navbar.scss';

function Nav() {

  function navTo(to: string) {
    document.getElementById(to)?.scrollIntoView({behavior: "smooth", block: "end"})
  }

  return (
    <nav>
        <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="156" cy="76" r="12"></circle><path d="M186.3,167.9H184a48,48,0,0,1-48-48A48,48,0,0,1,88,72a17.7,17.7,0,0,1,.1-2.3" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M62.2,153.2,8,176l56,16,16,56,22.8-54.2h0c138.4-3.3,120-122.9,114.4-148.9a8.2,8.2,0,0,0-6.1-6.1c-26-5.6-145.6-24-148.9,114.4Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></a>
      <ul>
        <li onClick={() => navTo("goal")}>Vårt mål</li>
        <li onClick={() => navTo("problem")}>Problemstilling</li>
        <li onClick={() => navTo("why")}>Hvorfor</li>
        <li onClick={() => navTo("theory")}>Teori</li>
        <li onClick={() => navTo("conlusion")}>Konklusjon</li>
        <li onClick={() => navTo("ref")}>Referanser</li>
      </ul>
    </nav>
  );
}

export default Nav;

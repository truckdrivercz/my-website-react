import "./Menu.css";
export default function Menu() {
  return (
    <>
      <div className="flags">
        <div className="language-selector">
          <div className="selected-language">
            <img src="../Logos/Flag_of_the_Czech_Republic.svg" alt="Czech Republic" />
          </div>
          <div className="arrow-down"></div>
          <div className="language-options">
            <div className="language-option" data-lang="cz">
              <img src="../Logos/Flag_of_the_Czech_Republic.svg" alt="Čeština" />
              <span>Čeština</span>
            </div>
            <div className="language-option" data-lang="en">
              <img src="../Logos/Flag-United-Kingdom.png" alt="English" />
              <span>English</span>
            </div>
            <div className="language-option" data-lang="de">
              <img src="../Logos/Flag_Germany.png" alt="Germany" />
              <span>Germany</span>
            </div>
            <div className="language-option" data-lang="pl">
              <img src="../Logos/polskokopie.png" alt="Polski" />
              <span>Polski</span>
            </div>
          </div>
          <div className="btn">
            <div className="btn__indicator">
              <div className="btn__icon-container">
                <i className="btn__icon fa-solid"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="logo">
          <a href="../Home/Home.jsx">VTC Hell Riders</a>
        </div>

        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <ul>
            <li>
              <a href="../Home/Home.jsx" className="active" id="uvod-1">
                Úvod
              </a>
            </li>
            <li>
              <a href="../Pravidla/Pravidla.jsx" id="pravidla-1">
                Pravidla
              </a>
            </li>
            <li>
              <a href="../Nábor/Nabor.jsx" id="nabor-1">
                Nábor
              </a>
            </li>
            <li>
              <a href="../Konvoje/Konvoje.jsx" id="konvoje-1">
                Konvoje
              </a>
            </li>
            <li>
              <a href="../Kontakty/Kontakty.jsx" id="kontakty-1">
                Kontakty
              </a>
            </li>
            <li>
              <a href="../Galerie/Galerie.jsx" id="galerie-1">
                Galerie
              </a>
            </li>
            <li>
              <a href="https://discord.gg/nJ6tbtjbPx">
                <img src="../Logos/dis_bile_logo.png" alt="Discord" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vtc_hell_riders/">
                <img src="../Logos/ig_bile_logo.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://trucksbook.eu/company/133784">
                <img src="../Logos/trucksbook.png" alt="TrucksBook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/lucianusshow">
                <img src="../Logos/cernytwitch_logo_jde_do_biliho.png" alt="Twitch" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@lucianusshow2942">
                <img src="../Logos/ytb_bile_logo.png" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://truckersmp.com/vtc/56889">
                <img src="../Logos/tmp.png" alt="TruckersMP" />
              </a>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </>
  );
}
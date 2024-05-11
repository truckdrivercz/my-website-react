import "./Menu.css";

export default function Menu() {
  return (
    <>
      <div className="flags">
        <div className="language-selector">
          <div className="selected-language">
            <img src="../logos/Flag_of_the_Czech_Republic.svg" alt="Czech Republic" />
          </div>
          <div className="arrow-down"></div>
          <div className="language-options">
            <div className="language-option" data-lang="cz">
              <img src="../logos/Flag_of_the_Czech_Republic.svg" alt="Čeština" />
              <span>Čeština</span>
            </div>
            <div className="language-option" data-lang="en">
              <img src="../logos/Flag-United-Kingdom.png" alt="English" />
              <span>English</span>
            </div>
            <div className="language-option" data-lang="de">
              <img src="../logos/Flag_Germany.png" alt="Germany" />
              <span>Germany</span>
            </div>
            <div className="language-option" data-lang="pl">
              <img src="../logos/polskokopie.png" alt="Polski" />
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
          <a href="index.html">VTC Hell Riders</a>
        </div>

        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <ul>
            <li>
              <a href="index.html" className="active" id="uvod-1">
                Úvod
              </a>
            </li>
            <li>
              <a href="pravidla.html" id="pravidla-1">
                Pravidla
              </a>
            </li>
            <li>
              <a href="nabor.html" id="nabor-1">
                Nábor
              </a>
            </li>
            <li>
              <a href="konvoje.html" id="konvoje-1">
                Konvoje
              </a>
            </li>
            <li>
              <a href="kontakty.html" id="kontakty-1">
                Kontakty
              </a>
            </li>
            <li>
              <a href="galerie.html" id="galerie-1">
                Galerie
              </a>
            </li>
            <li>
              <a href="https://discord.gg/nJ6tbtjbPx">
                <img src="../logos/dis_bile_logo.png" alt="Discord" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vtc_hell_riders/">
                <img src="../logos/ig_bile_logo.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://trucksbook.eu/company/133784">
                <img className="tb" src="../logos/trucksbook.png" alt="TrucksBook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/lucianusshow">
                <img src="../logos/cernytwitch_logo_jde_do_biliho.png" alt="Twitch" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@lucianusshow2942">
                <img src="../logos/ytb_bile_logo.png" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://truckersmp.com/vtc/56889">
                <img className="tmp" src="../logos/tmp.png" alt="TruckersMP" />
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
import "./Menu.css";
export default function Menu() {
  return (
    <>

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
              <img src="../Logos/Dis_bile_logo.png"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vtc_hell_riders/">
                <img src="../Logos/Ig_bile_logo.png"/>
              </a>
            </li>
            <li>
              <a href="https://trucksbook.eu/company/133784">
                <img src="../Logos/Trucksbook.png"/>
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/lucianusshow">
                <img src="../Logos/Cernytwitch_logo_jde_do_biliho.png"/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@lucianusshow2942">
                <img src="../Logos/Ytb_bile_logo.png"/>
              </a>
            </li>
            <li>
              <a href="https://truckersmp.com/vtc/56889">
                <img src="../Logos/Tmp.png"/>
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
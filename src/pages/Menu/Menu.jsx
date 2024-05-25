import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/Home/Home.jsx">VTC Hell Riders</Link>
        </div>

        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <ul>
            <li>
              <Link to="/Home/Home.jsx" className="active" id="uvod-1">
                Úvod
              </Link>
            </li>
            <li>
              <Link to="/Pravidla/Pravidla.jsx" id="pravidla-1">
                Pravidla
              </Link>
            </li>
            <li>
              <Link to="/Nábor/Nabor.jsx" id="nabor-1">
                Nábor
              </Link>
            </li>
            <li>
              <Link to="/Konvoje/Konvoje.jsx" id="konvoje-1">
                Konvoje
              </Link>
            </li>
            <li>
              <Link to="/Kontakty/Kontakty.jsx" id="kontakty-1">
                Kontakty
              </Link>
            </li>
            <li>
              <Link to="/Galerie/Galerie.jsx" id="galerie-1">
                Galerie
              </Link>
            </li>
            <li>
              <a href="https://discord.gg/nJ6tbtjbPx">
                <img src="./Dis_bile_logo.png"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vtc_hell_riders/">
                <img src="./Ig_bile_logo.png"/>
              </a>
            </li>
            <li>
              <a href="https://trucksbook.eu/company/133784">
                <img src="./Trucksbook.png"/>
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/lucianusshow">
                <img src="./Cernytwitch_logo_jde_do_biliho.png"/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@lucianusshow2942">
                <img src="./Ytb_bile_logo.png"/>
              </a>
            </li>
            <li>
              <a href="https://truckersmp.com/vtc/56889">
                <img src="./Tmp.png"/>
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
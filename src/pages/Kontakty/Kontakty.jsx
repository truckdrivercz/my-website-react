import "./Kontakty.css"
import "../Css/Flags.css"
import "../Css/Style.css"
import Menu from "../Menu/Menu"
import Animation from "../AnimationFrames/Animation"
import Footer from "../Footer/Footer"
export default function Kontakty(){
    return(
        <>
        <Menu/>
        <Animation/>
<h1 className="nadpis" id="nadpis">Kontakty</h1>
<div className="kontakty">
    <div className="medvidek">
        <img className="foto" src="./Profiles/profiles/medvidek01.png" alt="reditel" />
        <div id="p_1">
            <p>medvidek01</p>
            <p>majitel</p>
            <p>Discord: medvidek01</p>
        </div>
    </div>
    <div className="eda">
        <img className="foto" src="./Profiles/profiles/EdaO1.PNG" alt="reditel" />
        <div id="p_2">
            <p>EdaO1</p>
            <p>ředitel</p>
            <p>Discord: edao1</p>
        </div>
    </div>
    <div className="lucian">
        <img className="foto" src="./Profiles/profiles/lucian.png" alt="reditel" />
        <div id="p_3">
            <p>LucianusShow</p>
            <p>ředitel</p>
            <p>Discord: lucianusshow</p>
        </div>
    </div>
    <div className="lada">
        <img className="foto" src="./Profiles/profiles/ladicz6.png" alt="zastupce" />
        <div id="p_4">
            <p>ladicz6</p>
            <p>zástupce</p>
            <p>Discord: pekelnyvlk</p>
        </div>
    </div>
    <div className="alan">
        <img className="foto" src="./Profiles/profiles/Kobra11cz.jpg" alt="zastupce" />
        <div id="p_5">
            <p>Kobra11cz</p>
            <p>zástupce</p>
            <p>Discord: kobra11</p>
        </div>
    </div>
    <div className="kuba">
        <img className="foto" src="./Profiles/profiles/Kuba_9.jpg" alt="zastupce" />
        <div id="p_6">
            <p>Kuba 9</p>
            <p>zástupce</p>
            <p>Discord: kuba_91</p>
        </div>
    </div>
</div>
        <Footer/>
        </>
    )
}
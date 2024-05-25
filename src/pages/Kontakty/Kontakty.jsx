import "./Kontakty.css"
import Menu from "../Menu/Menu"
import Animation from "../AnimationFrames/Animation"
import Flags_dark from "../Flag_dark/Flags_dark"
import Footer from "../Footer/Footer"
// Importing images
import MedvidekImage from '../Profiles/Medvidek01.png'
import EdaImage from '../Profiles/EdaO1.png'
import LucianImage from '../Profiles/Lucian.png'
import LadaImage from '../Profiles/Ladicz6.png'
import AlanImage from '../Profiles/Kobra11cz.jpg'
import KubaImage from '../Profiles/Kuba_9.jpg'

export default function Kontakty(){
    document.title = "Kontakty"
    return(
        <>
        <Menu/>
        <Animation/>
        <Flags_dark/>
        <h1 className="nadpis">Kontakty</h1>
        <div className="kontakty">
            <div className="medvidek">
                <img className="foto" src={MedvidekImage} alt="Medvidek" />
                <div id="p_1">
                    <p className="name">medvidek01</p>
                    <p className="position">majitel</p>
                    <p>Discord: medvidek01</p>
                </div>
            </div>
            <div className="eda">
                <img className="foto" src={EdaImage} alt="Eda" />
                <div id="p_2">
                    <p className="name">EdaO1</p>
                    <p className="position">ředitel</p>
                    <p>Discord: edao1</p>
                </div>
            </div>
            <div className="lucian">
                <img className="foto" src={LucianImage} alt="Lucian" />
                <div id="p_3">
                    <p className="name">LucianusShow</p>
                    <p className="position">ředitel</p>
                    <p>Discord: lucianusshow</p>
                </div>
            </div>
            <div className="lada">
                <img className="foto" src={LadaImage} alt="Lada" />
                <div id="p_4">
                    <p className="name">ladicz6</p>
                    <p className="position">zástupce</p>
                    <p>Discord: pekelnyvlk</p>
                </div>
            </div>
            <div className="alan">
                <img className="foto" src={AlanImage} alt="Alan" />
                <div id="p_5">
                    <p className="name">Kobra11cz</p>
                    <p className="position">zástupce</p>
                    <p>Discord: kobra11</p>
                </div>
            </div>
            <div className="kuba">
                <img className="foto" src={KubaImage} alt="Kuba" />
                <div id="p_6">
                    <p className="name">Kuba 9</p>
                    <p className="position">zástupce</p>
                    <p>Discord: kuba_91</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
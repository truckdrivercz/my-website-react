import "./Galerie.css"
import Menu from"../Menu/Menu"
import Flags_dark from "../Flag_dark/Flags_dark"
export default function Galerie(){
    document.title = "Galerie"
    return(
        <>
        <Menu/>
        <Flags_dark/>
        <div className="container">
    <h1 id="nadpis">Konvoje</h1>
    <div className="image-container">
        <div className="image"><img src="./Itvtc.png"/></div>
        <div className="image"><img src="./Itvtc konvoj.png"/></div>
        <div className="image"><img src="./Konvoj 10.12.png"/></div>
        <div className="image"><img src="./Konvoj 11.2.png"/></div>
        <div className="image"><img src="./Konvoj 22.12_2.jpg"/></div>
        <div className="image"><img src="./Konvoj 2.12_3.jpg"/></div>
        <div className="image"><img src="./Konvoj 11.2.png"/></div>
        <div className="image"><img src="./Konvoj 23.2.png"/></div>
        <div className="image"><img src="./Konvoj 1.3.jpg"/></div>
        <div className="image"><img src="./Konvoj 1.3_4.jpg"/></div>
        <div className="image"><img src="./Konvoj 1.3_3.jpg"/></div>
        <div className="image"><img src="./Konvoj 10.3.png"/></div>
        <div className="image"><img src="./Konvoj 10.3_2.png"/></div>
        <div className="image"><img src="./Konvoj 10.3_3.png"/></div>
        <div className="image"><img src="./Konvoj 23.3_1.png"/></div>
        <div className="image"><img src="./Konvoj 5.4.png"/></div>
        <div className="image"><img src="./Konvoj 5.4_2.png"/></div>
        <div className="image"><img src="./Konvoj 5.5.png"/></div>
    </div>
    <div className="popup-image">
        <div className="close">&times;</div>
        <img src="./Itvtc.png"/>
        <div className="sipka">
            <button className="left" id="prevBtn"><i className="bi bi-arrow-left"></i></button>
            <button className="right" id="nextBtn"><i className="bi bi-arrow-right"></i></button>
            <div className="image-counter">
                <div className="current-index">1</div> / <div className="total-count">1</div>
            </div>
        </div>
    </div>
</div>
<footer className="footer">
        <div>
            <h1 className="footerTitle"><a href="https://trucksbook.eu/company/133784"><span className="odkaz">VTC Hell Riders</span></a> | Eduard Orvoš | Ondřej Fíla</h1>
        </div>
    </footer>
        </>
    )
}